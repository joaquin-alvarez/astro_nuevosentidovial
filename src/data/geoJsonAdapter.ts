// Import types
import type { 
  Street, 
  StreetFeature, 
  GeoJSONFeatureCollection,
  GeoJSONCoordinate
} from './types';

// Import the GeoJSON data
import streetChangesJson from './street_changes.json';

/**
 * Converts GeoJSON data for a specific location into Street objects
 * @param locationName Name of the location to filter by
 * @param isColectoraMap Whether this is for a colectora map or regular map
 * @returns Array of Street objects
 */
export function getMapDataForLocation(locationName: string, isColectoraMap: boolean = false): Street[] {
  // Cast the imported JSON to the proper type
  const jsonData = streetChangesJson as unknown as GeoJSONFeatureCollection;
  
  // Filter features for the specific location
  const locationFeatures = jsonData.features.filter(feature => {
    // First filter by location
    const locationMatch = feature.properties.location === locationName;
    
    // Check if the feature has valid coordinates
    const hasValidGeometry = feature.geometry && feature.geometry.coordinates;
    
    // If there's no valid geometry, exclude it
    if (!hasValidGeometry) {
      console.log('No valid geometry for', feature.properties.name);
      return false;
    }
    
    // Then filter by mostrar_en_colectora and mostrar_en_normal properties
    if (isColectoraMap) {
      return locationMatch && feature.properties.mostrar_en_colectora === true;
    } else {
      // For regular maps, show those that meet either:
      // 1. Not for colectora (mostrar_en_colectora is null, false or undefined)
      // 2. Have mostrar_en_normal property explicitly set to true
      return locationMatch && (feature.properties.mostrar_en_colectora !== true || 
                               feature.properties.mostrar_en_normal === true);
    }
  });

  // Convert each feature to our Street format
  const streets: Street[] = locationFeatures.map(feature => ({
    name: feature.properties.name,
    type: feature.properties.type,
    section: feature.properties.section,
    newDirection: feature.properties.newDirection,
    direction: feature.properties.direction,
    details: feature.properties.details,
    // Invert coordinates (GeoJSON uses [long, lat], Leaflet uses [lat, long])
    coordinates: feature.geometry.coordinates.map(
      (coord: GeoJSONCoordinate): [number, number] => [coord[1], coord[0]]
    )
  }));

  return streets;
}
