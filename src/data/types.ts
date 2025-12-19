/**
 * Represents a street with direction change or special traffic rules
 */
export interface Street {
  /**
   * Name of the street
   */
  name: string;
  
  /**
   * Type of change: 'change' (cambio de sentido), 'doubleway' (doble sentido), or 'noparking' (prohibido estacionar)
   */
  type: 'change' | 'doubleway' | 'noparking';
  
  /**
   * Description of the section of the street
   */
  section: string;
  
  /**
   * Text description of the new direction
   */
  newDirection: string | null;
  
  /**
   * Direction code used for arrow rendering: 'este', 'oeste', 'norte', 'sur', 'norte-sur', 'este-oeste', or null
   */
  direction: string | null;
  
  /**
   * Additional details about the change
   */
  details: string;
  
  /**
   * Array of [lat, lng] coordinates representing the street line
   */
  coordinates: [number, number][];
}

/**
 * GeoJSON Feature properties structure
 */
export interface StreetFeatureProperties {
  location: string;
  name: string;
  type: 'change' | 'doubleway' | 'noparking';
  section: string;
  newDirection: string | null;
  direction: string | null;
  details: string;
  mostrar_en_colectora?: boolean;
  mostrar_en_normal?: boolean;
}

/**
 * GeoJSON Point coordinates
 */
export type GeoJSONCoordinate = [number, number];

/**
 * GeoJSON LineString geometry
 */
export interface GeoJSONLineStringGeometry {
  type: 'LineString';
  coordinates: GeoJSONCoordinate[];
}

/**
 * GeoJSON Feature structure for streets
 */
export interface StreetFeature {
  type: 'Feature';
  properties: StreetFeatureProperties;
  geometry: GeoJSONLineStringGeometry;
}

/**
 * GeoJSON FeatureCollection structure
 */
export interface GeoJSONFeatureCollection {
  type: 'FeatureCollection';
  name: string;
  features: StreetFeature[];
}

/**
 * Map configuration parameters
 */
export interface MapConfig {
  center: [number, number];
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
  bounds?: [[number, number], [number, number]];
}

/**
 * Utility functions for street data
 */
export class StreetUtils {
  /**
   * Calculates the center point of an array of streets
   * @param streets Array of streets
   * @param defaultCenter Default center to return if streets array is empty
   * @returns [lat, lng] center coordinates
   */
  static calculateCenter(streets: Street[], defaultCenter: [number, number]): [number, number] {
    if (streets.length === 0) return defaultCenter;
    
    let totalLat = 0;
    let totalLng = 0;
    let pointCount = 0;
    
    streets.forEach((street: Street) => {
      street.coordinates.forEach((coord: [number, number]) => {
        totalLat += coord[0]; // latitude
        totalLng += coord[1]; // longitude
        pointCount++;
      });
    });
    
    return [totalLat / pointCount, totalLng / pointCount];
  }
}
