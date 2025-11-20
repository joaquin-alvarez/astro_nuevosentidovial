import { streetChangesData } from './streetChangesData.js';

// Función para convertir datos GeoJSON en el formato necesario para nuestros mapas
export function getMapDataForLocation(locationName) {
  // Filtrar características para la ubicación específica
  const locationFeatures = streetChangesData.features.filter(feature => 
    feature.properties.location === locationName
  );

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

  // Calcular el centro aproximado de este conjunto de coordenadas
  const center = calculateCenter(streets);
  
  return {
    center,
    zoom: 15,
    streets
  };
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

// Exporta datos ya procesados para cada ubicación
export const belenDeEscobarMapData = getMapDataForLocation('Belén de Escobar');
export const garinMapData = getMapDataForLocation('Garín');
export const ingenieroMaschwitzMapData = getMapDataForLocation('Ingeniero Maschwitz');
export const colectorasMapData = getMapDataForLocation('Colectoras');
