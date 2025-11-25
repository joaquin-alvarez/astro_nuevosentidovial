// Importar el archivo GeoJSON directamente
import streetChangesJson from './street_changes.json';

// Función para convertir datos GeoJSON en el formato necesario para nuestros mapas
export function getMapDataForLocation(locationName, isColectoraMap = false) {
  // Filtrar características para la ubicación específica
  const locationFeatures = streetChangesJson.features.filter(feature => {
    // Primero filtramos por ubicación
    const locationMatch = feature.properties.location === locationName;
    
    // Verificamos si el feature tiene coordenadas válidas
    const hasValidGeometry = feature.geometry && feature.geometry.coordinates;
    
    // Si no hay geometría válida, no lo incluimos
    if (!hasValidGeometry) {
      console.log('No hay geometría válida para', feature.properties.name);
      return false;
    }
    
    // Luego filtramos por las propiedades mostrar_en_colectora y mostrar_en_normal
    if (isColectoraMap) {
      return locationMatch && feature.properties.mostrar_en_colectora === true;
    } else {
      // Para mapas normales, mostrar los que cumplan alguna de estas condiciones:
      // 1. No son para colectora (mostrar_en_colectora es null, false o undefined)
      // 2. Tienen la propiedad mostrar_en_normal explícitamente establecida como true
      return locationMatch && (feature.properties.mostrar_en_colectora !== true || feature.properties.mostrar_en_normal === true);
    }
  });

  // Convertir cada característica a nuestro formato de datos
  const streets = locationFeatures.map(feature => ({
    name: feature.properties.name,
    type: feature.properties.type,
    section: feature.properties.section,
    newDirection: feature.properties.newDirection,
    direction: feature.properties.direction,
    details: feature.properties.details,
    // Invertir las coordenadas (GeoJSON usa [long, lat], Leaflet usa [lat, long])
    coordinates: feature.geometry.coordinates.map(coord => [coord[1], coord[0]])
  }));

  return streets;
}

// Calcula el centro aproximado de un conjunto de calles
function calculateCenter(streets) {
  if (streets.length === 0) return [-34.35, -58.78]; // Valor por defecto
  
  let totalLat = 0;
  let totalLng = 0;
  let pointCount = 0;
  
  streets.forEach(street => {
    street.coordinates.forEach(coord => {
      totalLat += coord[0]; // latitud
      totalLng += coord[1]; // longitud
      pointCount++;
    });
  });
  
  return [totalLat / pointCount, totalLng / pointCount];
}

// Ya no exportamos datos pre-procesados, ahora se procesa en cada página
