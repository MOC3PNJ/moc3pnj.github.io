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
    nombre: "Cómo entrenar a tu dragón",
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
    nombre: "Pequeñas Mentirosas: Perfeccionista",
    año: 2019,
    categoria: "Crimen, Drama, Horror, Suspense, Thriller",
    tipo: "Serie",
    portada: "https://img.onfilom.com/cover/20211228/1640679778103_8c54296618ded2e1dbe0c2cf7cced582xIpqBtVpu9bUq05dT3VTRYPjBP7.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/drama/OUO4gFFNjHoK3eaY07TPW-Pretty-Little-Liars-The-Perfectionists"
  },
  {
    id: "0008",
    nombre: "Cuando el Diablo Llama a Tu Puerta",
    año: 2019,
    categoria: "Drama, Fantasía, Música, Romance",
    tipo: "Serie",
    portada: "https://img.onfilom.com/cover/20230630/1688125486942_af70e2a9afc3a07b90e596fe0250abda%E5%BD%93%E6%81%B6%E9%AD%94%E5%91%BC%E5%96%8A%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97%E6%97%B6.png?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.qbplayer.com/es/detail/drama/LxXhNBodjGwtEh4VnU9lp-When-the-Devil-Calls-Your-Name"
  },
  {
    id: "0009",
    nombre: "Palabras en las paredes del baño",
    año: 2020,
    categoria: "Drama, Romance",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20211228/1640673838249_16750b11fb3409ce792cccdefe50ae19AedH7kQttLVgqd260IXevTK0Mek.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/NLsdnmI5gjFqPgzGwkDJU-Words-on-Bathroom-Walls"
  },
  {
    id: "0010",
    nombre: "Un fin de semana inesperado",
    año: 2021,
    categoria: "Comedia, Romance",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20211228/1640673163627_d6359923c0e00266357e9342248058baOyKfblQX6SR2rL6R26g5eYCLHq.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/AqHmGDNxMbMQxpJ2Dsdb6-Long-Weekend"
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
    id: "0017",
    nombre: "Culpa tuya",
    año: 2025,
    categoria: "Drama, Romance",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20241119/1731993395066_ac56c8f6c65e9bf3d8c0a94685824bba6kYDG8Imfhph2duBYZeYksHgx7L.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/70350-Your-Fault"
  },
  {
    id: "0018",
    nombre: "Kraven el cazador (X)",
    año: 2024,
    categoria: "Acción, Suspense",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20241217/1734402993750_3ac90622e71b62469fc34f8c1144ed741GvBhRxY6MELDfxFrete6BNhBB5.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#buscar#"
  },
  {
    id: "0019",
    nombre: "Sonic 3: La película",
    año: 2025,
    categoria: "Acción, Animación, Comedia, Ciencia ficción",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250211/1739255674749_afa3feba0a15d34c6eab355445966ed81734866466731_c88e0b49ec7a74d8a1893c29e37a9377Sonic%20the%20Hedgehog.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/65165-Sonic-the-Hedgehog-3"
  },
  {
    id: "0020",
    nombre: "Moana 2",
    año: 2025,
    categoria: "Aventura, Animación, Comedia, Familiares, Fantasía, Música",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250211/1739258257114_3126784b01aed6ae4ef9eb644e8b27651730863227964_a41068c9a321bed5e48bc8e4749cc7b8yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/57374-Moana-2"
  },
  {
    id: "0021",
    nombre: "Moana",
    año: 2016,
    categoria: "Aventura, Animación, Comedia, Familiares, Fantasía, Música",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250619/1750314796151_3c0fdb46c4827b2f63ffd57da55f19881666059717999_62d8288899b652513586dea90e9599f61631781085995_f0d85e0f3f8419f908fd4c4117613808vNJFiwtsl7Twww7C0uM4qPnygNw.png?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/Wt0CMHAnaGOZ7RxIiqdcY-Moana"
  },
  {
    id: "0022",
    nombre: "Mufasa: El rey Leon (X)",
    año: 2025,
    categoria: "Aventura, Animación, Drama, Fantasía, Musicales",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20241220/1734684128836_681de0709f561769d63d8fa2c9350a73%E6%9C%A8%E6%B3%95%E6%B2%991.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#Buscar#"
  },
  {
    id: "0023",
    nombre: "Estado Electrico",
    año: 2025,
    categoria: "Acción, Aventura, Comedia, Drama, Ciencia ficción",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250620/1750407482313_d6ce0a55b8014e304594bfc0a97a31ec%E8%A5%BF%E7%AB%96.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/rDsRksl88pPaM6o3LQUZ2-The-Electric-State"
  },
  {
    id: "0024",
    nombre: "El mono (X)",
    año: 2025,
    categoria: "Comedia, Horror",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250408/1744097375221_e220ef4f5254fd953d2651eaa64cd9fa1742972859207_aafc798846d61177403f37085d1691b1yYa8Onk9ow7ukcnfp2QWVvjWYel.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#Buscar#"
  },
  {
    id: "0025",
    nombre: "Capitan America: Un nuevo Mundo",
    año: 2025,
    categoria: "Acción, Aventura, Ciencia ficción",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250207/1738897718023_c6149cc49f5a75cfff8e3d0c43657f57%E7%BE%8E%E9%98%9F41.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/pHO6pykCvPU4HQqX7dWz4-Captain-America-Brave-New-World"
  },
  {
    id: "0026",
    nombre: "Rescate Implacable (X)",
    año: 2025,
    categoria: "Acción, Thriller",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250331/1743402358443_c06909fd283c7b9bf0ed0d2c13c1d3dfyy.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#Buscar#"
  },
  {
    id: "0027",
    nombre: "Warfare: Tiempo de guerra",
    año: 2025,
    categoria: "Acción, Drama, Bélicas",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250421/1745206615449_a1aa8e33ea3f10ae65966f15ea113b92srj9rYrjefyWqkLc6l2xjTGeBGO.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#Buscar#"
  },
  {
    id: "0028",
    nombre: "Love me",
    año: 2025,
    categoria: "Drama",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250117/1737083122035_824a655b20305aaa07f11383fa983ff4uX8Z3qWJ5OjV1uP7yT6yRlw9UL9.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/68359-Love-Me"
  },
  {
    id: "0029",
    nombre: "Dora y la Busqueda del Sol Dorado (X)",
    año: 2025,
    categoria: "Aventura, Familiares",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250703/1751520835345_70d9a747f4382d5b77845dc08371f2d4mA3gfnhD67be14L5JhvNCtetUz8.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "#Buscar#"
  },
  {
    id: "0030",
    nombre: "Ballerina (⚠️ Grabada)",
    año: 2025,
    categoria: "Acción, Thriller",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250620/1750390331363_7061caf4ef869a8a33183fc545ec08db1748338537840_f5fd9b9bad5e24c8841b21408cb80355mKp4euM5Cv3m2U1Vmby3OGwcD5y.png?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/95751-Ballerina-2025"
  },
 {
    id: "0031",
    nombre: "Jefes de estado",
    año: 2025,
    categoria: "Acción, Thriller",
    tipo: "Película",
    portada: "https://img.onfilom.com/cover/20250702/1751424031606_fcc51c10ee325f63eb7024aae52bf3delVgE5oLzf7ABmzyASEVcjYyHI41.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
    link: "https://h5.onfilom.com/es/detail/movie/koqO1bebLKozaarZ1gnRk-Heads-of-State"
  }
];

export { peliculas };
