export const colectorasMapData = {
  center: [-34.365000, -58.775000], // Coordenadas centrales aproximadas
  zoom: 13,
  streets: [
    // Belén de Escobar - Colectora Este
    {
      name: "Colectora Este (Av. De los Inmigrantes)",
      type: "doubleway",
      section: "Entre Spadaccini y Las Casuarinas",
      newDirection: "Doble sentido",
      direction: "norte-sur",
      details: "Mantiene doble sentido",
      coordinates: [
        [-34.335182, -58.766678], // Punto inicial aproximado 
        [-34.340326, -58.772086], // Punto medio aproximado
        [-34.345470, -58.777493]  // Punto final aproximado
      ]
    },
    {
      name: "Colectora Este",
      type: "change",
      section: "Desde Las Casuarinas hasta Docente Serantes de Alvear",
      newDirection: "Sentido único",
      direction: "sur",
      details: "Cambio a mano única",
      coordinates: [
        [-34.345470, -58.777493], // Punto inicial aproximado
        [-34.351184, -58.782814], // Punto medio aproximado
        [-34.356897, -58.788136]  // Punto final aproximado
      ]
    },
    // Belén de Escobar - Colectora Oeste
    {
      name: "Colectora Oeste",
      type: "doubleway",
      section: "Entre Artigas y César Díaz",
      newDirection: "Doble sentido",
      direction: "norte-sur",
      details: "Mantiene doble sentido",
      coordinates: [
        [-34.339789, -58.781091], // Punto inicial aproximado
        [-34.343859, -58.784653], // Punto medio aproximado
        [-34.347928, -58.788214]  // Punto final aproximado
      ]
    },
    {
      name: "Colectora Oeste",
      type: "change",
      section: "Al sur de César Díaz",
      newDirection: "Sentido único hacia el sur",
      direction: "sur",
      details: "Cambio a mano única dirección sur",
      coordinates: [
        [-34.347928, -58.788214], // Punto inicial aproximado
        [-34.352575, -58.791776], // Punto medio aproximado
        [-34.357222, -58.795338]  // Punto final aproximado
      ]
    },
    // Garín - Colectora Oeste
    {
      name: "Colectora Oeste Garín",
      type: "doubleway",
      section: "Entre Mendoza y General Las Heras",
      newDirection: "Doble sentido",
      direction: "norte-sur",
      details: "Mantiene doble sentido",
      coordinates: [
        [-34.412876, -58.751290], // Punto inicial aproximado
        [-34.416946, -58.753125], // Punto medio aproximado
        [-34.421015, -58.754960]  // Punto final aproximado
      ]
    },
    {
      name: "Colectora Oeste Garín",
      type: "change",
      section: "Desde Corrientes hasta Mendoza",
      newDirection: "Mano única",
      direction: "norte",
      details: "Cambio a mano única",
      coordinates: [
        [-34.405990, -58.749361], // Punto inicial aproximado
        [-34.409433, -58.750326], // Punto medio aproximado
        [-34.412876, -58.751290]  // Punto final aproximado
      ]
    },
    {
      name: "Colectora Oeste Garín",
      type: "change",
      section: "Desde General Las Heras hasta Av. Belgrano",
      newDirection: "Mano única",
      direction: "sur",
      details: "Cambio a mano única",
      coordinates: [
        [-34.421015, -58.754960], // Punto inicial aproximado
        [-34.425085, -58.756794], // Punto medio aproximado
        [-34.429154, -58.758629]  // Punto final aproximado
      ]
    },
    {
      name: "Tucumán",
      type: "change",
      section: "De colectora a H. Yrigoyen",
      newDirection: "De este a oeste",
      direction: "oeste",
      details: "Mano única sentido este-oeste",
      coordinates: [
        [-34.409971, -58.749456], // Punto inicial aproximado
        [-34.410124, -58.752052], // Punto medio aproximado
        [-34.410277, -58.754649]  // Punto final aproximado
      ]
    },
    {
      name: "Corrientes",
      type: "change",
      section: "De H. Yrigoyen a Colectora Oeste",
      newDirection: "De oeste a este",
      direction: "este",
      details: "Mano única sentido oeste-este",
      coordinates: [
        [-34.405528, -58.752052], // Punto inicial aproximado
        [-34.405759, -58.750707], // Punto medio aproximado
        [-34.405990, -58.749361]  // Punto final aproximado
      ]
    }
  ]
};
