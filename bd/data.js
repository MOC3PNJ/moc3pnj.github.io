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
    id: "pelicula-004",
    nombre: "El Señor de los Anillos: La Comunidad del Anillo",
    año: 2001,
    categoria: "Fantasía",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-señor-anillos1.jpg",
    link: "https://ejemplo.com/señor-anillos1"
  },
  {
    id: "pelicula-005",
    nombre: "La Matriz",
    año: 1999,
    categoria: "Ciencia Ficción",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-la-matriz.jpg",
    link: "https://ejemplo.com/la-matriz"
  },
  {
    id: "pelicula-006",
    nombre: "Forrest Gump",
    año: 1994,
    categoria: "Drama",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-forrest-gump.jpg",
    link: "https://ejemplo.com/forrest-gump"
  },
  {
    id: "serie-002",
    nombre: "The Crown",
    año: 2016,
    categoria: "Drama Histórico",
    tipo: "Serie",
    portada: "https://ejemplo.com/portada-the-crown.jpg",
    link: "https://ejemplo.com/the-crown"
  },
  {
    id: "pelicula-007",
    nombre: "Origen",
    año: 2010,
    categoria: "Ciencia Ficción",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-origen.jpg",
    link: "https://ejemplo.com/origen"
  },
  {
    id: "pelicula-008",
    nombre: "Gladiador",
    año: 2000,
    categoria: "Acción",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-gladiador.jpg",
    link: "https://ejemplo.com/gladiador"
  },
  {
    id: "pelicula-009",
    nombre: "Titanic",
    año: 1997,
    categoria: "Romance",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-titanic.jpg",
    link: "https://ejemplo.com/titanic"
  },
  {
    id: "serie-003",
    nombre: "Breaking Bad",
    año: 2008,
    categoria: "Drama",
    tipo: "Serie",
    portada: "https://ejemplo.com/portada-breaking-bad.jpg",
    link: "https://ejemplo.com/breaking-bad"
  },
  {
    id: "pelicula-010",
    nombre: "El Caballero Oscuro",
    año: 2008,
    categoria: "Acción",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-caballero-oscuro.jpg",
    link: "https://ejemplo.com/caballero-oscuro"
  },
  {
    id: "pelicula-011",
    nombre: "Parásitos",
    año: 2019,
    categoria: "Thriller",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-parasitos.jpg",
    link: "https://ejemplo.com/parasitos"
  },
  {
    id: "pelicula-012",
    nombre: "Amelie",
    año: 2001,
    categoria: "Comedia Romántica",
    tipo: "Película",
    portada: "https://ejemplo.com/portada-amelie.jpg",
    link: "https://ejemplo.com/amelie"
  },
  {
    id: "serie-004",
    nombre: "Juego de Tronos",
    año: 2011,
    categoria: "Fantasía",
    tipo: "Serie",
    portada: "https://ejemplo.com/portada-juego-tronos.jpg",
    link: "https://ejemplo.com/juego-tronos"
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
