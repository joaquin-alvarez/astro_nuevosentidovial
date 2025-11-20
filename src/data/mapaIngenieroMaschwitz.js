export const ingenieroMaschwitzMapData = {
  center: [-34.385576, -58.737876], // Coordenadas centrales de Ingeniero Maschwitz
  zoom: 15,
  streets: [
    {
      name: "La Plata",
      type: "change",
      section: "Desde Ituzaingó hasta Almirante Brown",
      newDirection: "De norte a sur",
      direction: "sur",
      details: "Mejora la fluidez en zona de alto tránsito",
      coordinates: [
        [-34.382631, -58.737163], // Punto inicial aproximado
        [-34.384222, -58.736927], // Punto medio aproximado
        [-34.385813, -58.736691]  // Punto final aproximado
      ]
    },
    {
      name: "Villanueva",
      type: "noparking",
      section: "Entre Almirante Brown y La Plata",
      newDirection: "Prohibido estacionar sobre mano derecha",
      direction: "none",
      details: "Prohibido estacionar sobre la mano derecha para mejorar la circulación hacia y desde la estación",
      coordinates: [
        [-34.385576, -58.736905], // Punto inicial aproximado (cerca de La Plata)
        [-34.385500, -58.738609], // Punto medio aproximado
        [-34.385424, -58.740312]  // Punto final aproximado (cerca de Almirante Brown)
      ]
    }
  ]
};
