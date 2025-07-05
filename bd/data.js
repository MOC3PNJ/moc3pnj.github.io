const peliculas = [
  {
    id: "0001",
    nombre: "El Juego del Calamar 3",
    año: 2025,
    categoria: "Drama",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250626/1750904539638_ab8aa265f1b4639cca11f9bb996fcb66%E4%B8%8B%E8%BD%BD.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/drama/oDnwlGWTFq8CW18zjyd8C-Squid-Game-Season-3/1"
  },
  {
    id: "0002",
    nombre: "Destino Final: Lazos De Sangre",
    año: 2025,
    categoria: "Horror",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250410/1744273562545_37289de07017d297262e891c659f80f2%E6%AD%BB%E7%A5%9E1.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/UsNJzqxwgH0onKw3tlHJT-Final-Destination-Bloodlines"
  },
  {
    id: "0003",
    nombre: "Exterminio: La evolución (⚠️ Grabada)",
    año: 2025,
    categoria: "Ciencia Ficción, Terror, Grabada en cines",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250527/1748338320708_47d6086832f1621bfcf91092b6d2ae6fhVKHzr4GwSw0FepqhqQ0DDiYHNY%20(1).webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/5UKunplRip3dYHlxZt5lv-28-Years-Later"
  },
  {
    id: "0004",
    nombre: "Película de Minecraft",
    año: 2025,
    categoria: "Comedia",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250407/1743992284274_bff8d2802591f1667c9277f62b13c9deyFHHfHcUgGAxziP1C3lLt0q2T4s.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/PI97tF4VKHGs7NkDVVnLR-A-Minecraft-Movie"
  },
  {
    id: "0005",
    nombre: "El Señor de los Anillos: La Comunidad del Anillo",
    año: 2025,
    categoria: "Aventura, Comedia, Ciencia Ficción",
    tipo: "Película",
    portada: "https://pics.filmaffinity.com/how_to_train_your_dragon-978767756-large.jpg",
    link: "https://h5.onfilom.com/es/detail/movie/NwQbr5TuyP7tKadQaEb9w-How-to-Train-Your-Dragon-2025"
  },
  {
    id: "0006",
    nombre: "Lilo y Stitch",
    año: 2025,
    categoria: "Comedia, Aventura, Drama",
    tipo: "Película",
    portada: "https://pics.filmaffinity.com/lilo_stitch-929032428-large.jpg",
    link: "https://h5.onfilom.com/es/detail/movie/sGjUfpdoJGTD6IIKbBtZG-Lilo--Stitch-2025"
  },
  {
    id: "0007",
    nombre: "Pequeñas mentirosas: Perfeccionistas",
    año: 2019,
    categoria: "Crimen, Drama, Horror, Suspense, Thriller",
    tipo: "Serie",
    portada: "https://img.onfilom.com/cover/20211228/1640679778103_8c54296618ded2e1dbe0c2cf7cced582xIpqBtVpu9bUq05dT3VTRYPjBP7.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#Buscar#"
  },
  {
    id: "0008",
    nombre: "Cuando el Diablo Llama a Tu Puerta",
    año: 2019,
    categoria: "Drama, Fantasía, Música, Romance",
    tipo: "Serie",
    portada: "https://img.onfilom.com/cover/20230630/1688125486942_af70e2a9afc3a07b90e596fe0250abda%E5%BD%93%E6%81%B6%E9%AD%94%E5%91%BC%E5%96%8A%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97%E6%97%B6.png?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#BUscar#"
  },
  {
    id: "0009",
    nombre: "Palabras en las paredes del baño",
    año: 2020,
    categoria: "Drama, Romance",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20211228/1640673838249_16750b11fb3409ce792cccdefe50ae19AedH7kQttLVgqd260IXevTK0Mek.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#Buscar#"
  },
  {
    id: "0010",
    nombre: "Un fin de semana inesperado",
    año: 2021,
    categoria: "Comedia, Romance",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20211228/1640673163627_d6359923c0e00266357e9342248058baOyKfblQX6SR2rL6R26g5eYCLHq.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#Buscar#"
  },
  {
    id: "0011",
    nombre: "La matanza de Texas el origen",
    año: 1974,
    categoria: "Horror, Thriller",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250612/1749720573941_2b830758971bad3ce87571cffce8f6ff6.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/vNDNHkmPOi1YEXTBub66b-The-Texas-Chainsaw-Massacre-The-Beginning"
  },
  {
    id: "0012",
    nombre: "La masacre de Texas 2",
    año: 1986,
    categoria: "Horror",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250612/1749719742905_3aa1a501000c4d8e0975e17fcf5666d81.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/hWR8gRJTXAQOyXQrp4Pov-The-Texas-Chainsaw-Massacre-2"
  },
  {
    id: "0013",
    nombre: "La matanza de Texas 3",
    año: 1990,
    categoria: "Horror, Thriller",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250612/1749720045464_4d184f8f871cd7f1a9cd97c89dceb24d3.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/30wfPlm0wDyAhOcNm86BD-Leatherface-Texas-Chainsaw-Massacre-3"
  },
  {
    id: "0014",
    nombre: "La matanza de Texas : La nueva generación",
    año: 1994,
    categoria: "Comedia, Horror, Thriller",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250612/1749720128937_6110c2f9e2316f5bf20071b6d297cf9c4.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/5CS3TsKlVKkIvtaEM7uaz-Texas-Chainsaw-Massacre-4-The-Next-Generation"
  },
  {
    id: "0015",
    nombre: "La masacre de Texas",
    año: 2003,
    categoria: "Crimen, Horror",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250612/1749720480273_defc6ff065f2535f0f81c9a9671b60145.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/XfVMCeunk3oyGhAnX9eWe-The-Texas-Chainsaw-Massacre"
  },
  {
    id: "0016",
    nombre: "Masacre en Texas: herencia maldita",
    año: 2013,
    categoria: "Horror, Thriller",
    tipo: "Serie",
    portada: "https://img.onfilom.com/cover/20250612/1749720730871_f4c532ea730b8e2c7bbc6272012b8a887.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/AgIwttURYwnx1XVnqOyA8-Texas-Chainsaw-3D"
  },
  {
    id: "pelicula-013",
    nombre: "El Gran Hotel Budapest",
    año: 2014,
    categoria: "Comedia",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-gran-hotel-budapest.jpg",
    link: "https://ejemplo.com/gran-hotel-budapest"
  },
  {
    id: "pelicula-014",
    nombre: "Coco",
    año: 2017,
    categoria: "Animación",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-coco.jpg",
    link: "https://ejemplo.com/coco"
  },
  {
    id: "pelicula-015",
    nombre: "Spider-Man: Un Nuevo Universo",
    año: 2018,
    categoria: "Animación",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-spiderman-universo.jpg",
    link: "https://ejemplo.com/spiderman-universo"
  },
  {
    id: "serie-005",
    nombre: "The Mandalorian",
    año: 2019,
    categoria: "Ciencia Ficción",
    tipo: "Serie",
    portada: "https://ejemplo.com/portada-mandalorian.jpg",
    link: "https://ejemplo.com/mandalorian"
  },
  {
    id: "pelicula-016",
    nombre: "La La Land",
    año: 2016,
    categoria: "Musical",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-la-la-land.jpg",
    link: "https://ejemplo.com/la-la-land"
  },
  {
    id: "pelicula-017",
    nombre: "Vengadores: Endgame",
    año: 2019,
    categoria: "Acción",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-vengadores-endgame.jpg",
    link: "https://ejemplo.com/vengadores-endgame"
  },
  {
    id: "pelicula-018",
    nombre: "Joker",
    año: 2019,
    categoria: "Drama",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-joker.jpg",
    link: "https://ejemplo.com/joker"
  },
  {
    id: "serie-006",
    nombre: "Ozark",
    año: 2017,
    categoria: "Crimen",
    tipo: "Serie",
    portada: "https://ejemplo.com/portada-ozark.jpg",
    link: "https://ejemplo.com/ozark"
  },
  {
    id: "pelicula-019",
    nombre: "Blade Runner 2049",
    año: 2017,
    categoria: "Ciencia Ficción",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-blade-runner-2049.jpg",
    link: "https://ejemplo.com/blade-runner-2049"
  },
  {
    id: "pelicula-020",
    nombre: "Top Gun: Maverick",
    año: 2022,
    categoria: "Acción",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-top-gun-maverick.jpg",
    link: "https://ejemplo.com/top-gun-maverick"
  },
  {
    id: "pelicula-021",
    nombre: "Duna",
    año: 2021,
    categoria: "Ciencia Ficción",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-duna.jpg",
    link: "https://ejemplo.com/duna"
  },
  {
    id: "serie-007",
    nombre: "Squid Game",
    año: 2021,
    categoria: "Thriller",
    tipo: "Serie",
    portada: "https://ejemplo.com/portada-squid-game.jpg",
    link: "https://ejemplo.com/squid-game"
  },
  {
    id: "pelicula-022",
    nombre: "Encanto",
    año: 2021,
    categoria: "Animación",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-encanto.jpg",
    link: "https://ejemplo.com/encanto"
  },
  {
    id: "pelicula-023",
    nombre: "Sin tiempo para morir",
    año: 2021,
    categoria: "Acción",
    tipo: "Película",
    portada: "",
    link: "https://ejemplo.com/no-time-to-die"
  }
];

export { peliculas };
