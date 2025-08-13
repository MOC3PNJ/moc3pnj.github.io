const peliculas = [
  {
  id: "0001",
  nombre: "El Juego del Calamar T3",
  año: 2025,
  categoria: "Drama",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250626/1750904539638_ab8aa265f1b4639cca11f9bb996fcb66%E4%B8%8B%E8%BD%BD.jpg",
  link: "https://h5.onfilom.com/es/detail/drama/oDnwlGWTFq8CW18zjyd8C-Squid-Game-Season-3/1"
},
  {
  id: "0002",
  nombre: "Destino Final: Lazos De Sangre",
  año: 2025,
  categoria: "Horror",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250410/1744273562545_37289de07017d297262e891c659f80f2%E6%AD%BB%E7%A5%9E1.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/UsNJzqxwgH0onKw3tlHJT-Final-Destination-Bloodlines"
},
  {
  id: "0003",
  nombre: "Exterminio: La evolución (⚠️ Grabada)",
  año: 2025,
  categoria: "Ciencia Ficción, Terror, Grabada en cines",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250527/1748338320708_47d6086832f1621bfcf91092b6d2ae6fhVKHzr4GwSw0FepqhqQ0DDiYHNY%20(1).webp",
  link: "https://h5.onfilom.com/es/detail/movie/5UKunplRip3dYHlxZt5lv-28-Years-Later"
},
  {
  id: "0004",
  nombre: "Película de Minecraft",
  año: 2025,
  categoria: "Comedia",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250407/1743992284274_bff8d2802591f1667c9277f62b13c9deyFHHfHcUgGAxziP1C3lLt0q2T4s.webp",
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
  portada: "https://img.onfilom.com/cover/20211228/1640679778103_8c54296618ded2e1dbe0c2cf7cced582xIpqBtVpu9bUq05dT3VTRYPjBP7.jpg",
  link: "https://h5.onfilom.com/es/detail/drama/OUO4gFFNjHoK3eaY07TPW-Pretty-Little-Liars-The-Perfectionists"
},
  {
  id: "0008",
  nombre: "Cuando el Diablo Llama a Tu Puerta",
  año: 2019,
  categoria: "Drama, Fantasía, Música, Romance",
  tipo: "Serie",
  portada: "https://img.onfilom.com/cover/20230630/1688125486942_af70e2a9afc3a07b90e596fe0250abda%E5%BD%93%E6%81%B6%E9%AD%94%E5%91%BC%E5%96%8A%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97%E6%97%B6.png",
  link: "https://h5.qbplayer.com/es/detail/drama/LxXhNBodjGwtEh4VnU9lp-When-the-Devil-Calls-Your-Name"
},
  {
  id: "0009",
  nombre: "Palabras en las paredes del baño",
  año: 2020,
  categoria: "Drama, Romance",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20211228/1640673838249_16750b11fb3409ce792cccdefe50ae19AedH7kQttLVgqd260IXevTK0Mek.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/NLsdnmI5gjFqPgzGwkDJU-Words-on-Bathroom-Walls"
},
  {
  id: "0010",
  nombre: "Un fin de semana inesperado",
  año: 2021,
  categoria: "Comedia, Romance",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20211228/1640673163627_d6359923c0e00266357e9342248058baOyKfblQX6SR2rL6R26g5eYCLHq.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/AqHmGDNxMbMQxpJ2Dsdb6-Long-Weekend"
},
  {
  id: "0011",
  nombre: "La matanza de Texas el origen",
  año: 1974,
  categoria: "Horror, Thriller",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250612/1749720573941_2b830758971bad3ce87571cffce8f6ff6.webp",
  link: "https://h5.onfilom.com/es/detail/movie/vNDNHkmPOi1YEXTBub66b-The-Texas-Chainsaw-Massacre-The-Beginning"
},
  {
  id: "0012",
  nombre: "La masacre de Texas 2",
  año: 1986,
  categoria: "Horror",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250612/1749719742905_3aa1a501000c4d8e0975e17fcf5666d81.webp",
  link: "https://h5.onfilom.com/es/detail/movie/hWR8gRJTXAQOyXQrp4Pov-The-Texas-Chainsaw-Massacre-2"
},
  {
  id: "0013",
  nombre: "La matanza de Texas 3",
  año: 1990,
  categoria: "Horror, Thriller",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250612/1749720045464_4d184f8f871cd7f1a9cd97c89dceb24d3.webp",
  link: "https://h5.onfilom.com/es/detail/movie/30wfPlm0wDyAhOcNm86BD-Leatherface-Texas-Chainsaw-Massacre-3"
},
  {
  id: "0014",
  nombre: "La matanza de Texas : La nueva generación",
  año: 1994,
  categoria: "Comedia, Horror, Thriller",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250612/1749720128937_6110c2f9e2316f5bf20071b6d297cf9c4.webp",
  link: "https://h5.onfilom.com/es/detail/movie/5CS3TsKlVKkIvtaEM7uaz-Texas-Chainsaw-Massacre-4-The-Next-Generation"
},
  {
  id: "0015",
  nombre: "La masacre de Texas",
  año: 2003,
  categoria: "Crimen, Horror",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250612/1749720480273_defc6ff065f2535f0f81c9a9671b60145.webp",
  link: "https://h5.onfilom.com/es/detail/movie/XfVMCeunk3oyGhAnX9eWe-The-Texas-Chainsaw-Massacre"
},
  {
  id: "0016",
  nombre: "Masacre en Texas: herencia maldita",
  año: 2013,
  categoria: "Horror, Thriller",
  tipo: "Serie",
  portada: "https://img.onfilom.com/cover/20250612/1749720730871_f4c532ea730b8e2c7bbc6272012b8a887.webp",
  link: "https://h5.onfilom.com/es/detail/movie/AgIwttURYwnx1XVnqOyA8-Texas-Chainsaw-3D"
},
  {
  id: "0017",
  nombre: "Culpa Tuya",
  año: 2025,
  categoria: "Drama, Romance",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20241119/1731993395066_ac56c8f6c65e9bf3d8c0a94685824bba6kYDG8Imfhph2duBYZeYksHgx7L.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/70350-Your-Fault"
},
  {
  id: "0018",
  nombre: "Kraven el cazador (⚠️Grabada)",
  año: 2024,
  categoria: "Acción, Suspense, Grabada en cines",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20241217/1734402993750_3ac90622e71b62469fc34f8c1144ed741GvBhRxY6MELDfxFrete6BNhBB5.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.qbplayer.com/es/detail/movie/plwCwH5iV6cZ72Xy3JgeX-Kraven-the-Hunter"
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
  nombre: "Mufasa: El rey Leon",
  año: 2025,
  categoria: "Aventura, Animación, Drama, Fantasía, Musicales",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20241220/1734684128836_681de0709f561769d63d8fa2c9350a73%E6%9C%A8%E6%B3%95%E6%B2%991.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/6NWOpffnr4vgdi7dqQcF9-Mufasa-The-Lion-King"
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
},
  {
  id: "0032",
  nombre: "Jurassic World: El Renacer",
  año: 2025,
  categoria: "Acción, Aventura, Ciencia ficción, Thriller",
  tipo: "Película",
  portada: "https://pics.filmaffinity.com/Jurassic_World_El_renacer-254962281-large.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/t68TM94R4F31JdsST5v1k-Jurassic-World-Rebirth"
},
  {
  id: "0033",
  nombre: "Olympo",
  año: 2025,
  categoria: "Drama, Deporte",
  tipo: "Serie",
  portada: "https://img.onfilom.com/cover/20250620/1750405790667_a02daa8bfe6d3fa83c7a14ea680975eb1701761378896_fb33f0b30233e4736261f67bc07324bato0HRDQTk7ZceEjehm6TS9dNHqf.png?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/drama/ZcOYJVoQEgTxCXqGwbD75-Olympo"
},
  {
  id: "0034",
  nombre: "Dandadan T2",
  año: 2025,
  categoria: "Acción, Animación, Drama",
  tipo: "Serie",
  portada: "https://img.onfilom.com/cover/20250527/1748339173769_503de20c16a70d6d04403fc17912c9bdqU12CrNOYdxwlx7wvrhpgo2q1XQ.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/drama/UKWSmBKaa5jnlaPR6GepC-DAN-DA-DAN-season-2"
},
  {
  id: "0035",
  nombre: "Cómo entrenar a tu dragón 2",
  año: 2014,
  categoria: "Aventura, Animación, Fantasía",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20211216/1639645649175_79ed6b766b1ba2ac55a597ebffbb4f4c1yC7mlAGPBCrMlnXpgqvWA8ObII.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/65337-How-to-Train-Your-Dragon-2"
},
  {
  id: "0036",
  nombre: "Cómo entrenar a tu dragón",
  año: 2010,
  categoria: "Aventura, Animación, Fantasía",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250107/1736217561430_b38a170eeaf861918fc4d17ef869229exoXFmWtnavKcGxUHy62Q97cbqS1.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/i2chBKJMZyRDnQQAICa3L-How-to-Train-Your-Dragon"
},
  {
  id: "0037",
  nombre: "Cómo entrenar a tu dragón 3",
  año: 2019,
  categoria: "Acción, Aventura, Animación, Comedia, Familiares, Fantasía",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20211216/1639645938524_eb0526191865191feaec54836f32995dxvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
  link: "https://h5.onfilom.com/es/detail/movie/anI03DTfTPE36YIhZKqdJ-How-to-Train-Your-Dragon-The-Hidden-World"
},
  {
  id: "0038",
  nombre: "Merlina",
  año: 2022,
  categoria: "Comedia, Crimen, Familiares, Fantasía, Suspense",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250212/1739349328257_44df55a4829d8999b033ad74b8ee7964wFvfqUNUSxjT3zDOKhryKiV9YEt.jpg",
  link: "https://h5.onfilom.com/es/detail/drama/j5LWeaJpNFW159I98DsqD-Wednesday"
},
  {
  id: "0039",
  nombre: "El juego del calamar T2",
  año: 2024,
  categoria: "Acción, Aventura, Drama, Suspense, Thriller",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20241202/1733128636190_d893f90d4cc039d7f787b96f8d8b0294EN-US_SG-S2_Primary_Main_RoundandRound-Safe_Vertical_27x40_RGB_PRE.jpg",
  link: "https://h5.onfilom.com/es/detail/drama/VXB0QqzLguMs9996bpRac-Squid-Game-Season-2"
},
  {
  id: "0040",
  nombre: "El juego del calamar T1",
  año: 2021,
  categoria: "Acción, Drama, Suspense, Thriller",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20221111/1668133991321_82cc8d204c5ae86269d2d9bb6e5e2e1b%E9%B1%BF%E9%B1%BC%20%E7%AB%96.jpg",
  link: "https://h5.onfilom.com/es/detail/drama/79n4BcdNCorpQEbNHcKwN-Squid-Game-Season-1"
},
  {
  id: "0041",
  nombre: "Jurassic World: Dominion",
  año: 2022,
  categoria: "Acción, Aventura, Ciencia, ficción, Thriller",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20220707/1657179404636_b8f6afb8816c3674f21f85bf574b9b06kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/movie/xJ1Z6jonxdtoi0zgKF4t2-Jurassic-World-Dominion"
},
  {
  id: "0042",
  nombre: "Jurassic World: El reino caído",
  año: 2018,
  categoria: "Acción, Aventura, Ciencia ficción",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250222/1740190661251_87687f6a2cf4333b25bbfb4e1770491cyHa2I7qxZvZUASLHrIR8vQLmZ4B.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/movie/c7HJ1bnzZqrVp31ifVZ1p-Jurassic-World-Fallen-Kingdom"
},
  {
  id: "0043",
  nombre: "Jurassic World",
  año: 2015,
  categoria: "Acción, Aventura, Ciencia ficción",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250225/1740465111803_489a24303bca6e93d4bb5729aa4da836lWhnr4ehIiRMudbF6YCEViatbaN.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/movie/8tLcWitl70PgubjrTCYi6-Jurassic-World"
},
  {
  id: "0044",
  nombre: "F1",
  año: 2025,
  categoria: "Acción, Drama, Deporte",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250630/1751275001354_1f4b2c67dab34986033611e3dcc86bfd1750830485823_5080f4b9d11653573bb7274c25c8b3a1vqBmyAj0Xm9LnS1xe1MSlMAJyHq.png?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/movie/97049-F1-The-Movie"
},
  {
  id: "0045",
  nombre: "M3GAN 2.0 (Grabada)",
  año: 2025,
  categoria: "Horror, Ciencia ficción, Thriller, Grabada en cines",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20250702/1751437772863_98fbf82be9664c32bf598d755772f1c4w8llBJfNIJoQY9UV8p1eOBTyEjP.webp?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/movie/97288-M3GAN-20"
},
  {
  id: "0046",
  nombre: "M3GAN",
  año: 2022,
  categoria: "Horror, Ciencia ficción, Thriller",
  tipo: "Película",
  portada: "https://img.onfilom.com/cover/20230113/1673578110499_ca8923a905c34dfc6a65de0d5f3f2af9%E6%A2%85%E6%A0%B9%20%E7%AB%96.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/movie/kr2JNn8tlqsKtACrjnLgj-M3GAN"
},
  {
  id: "0047",
  nombre: "La casa del papel T4",
  año: 2020,
  categoria: "Acción, Crimen, Suspense, Thriller",
  tipo: "Serie",
  portada: "https://img.onfilom.com/cover/20210914/1631601461145_e46ffd2a2a27c49614e5ab9714fad3dazd8mxIfGY8SlupYd9XvK3qJL91B.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/drama/A5OR7OLZnwq72UtefK8Ri-Money-Heist-Season-4/1"
},
  {
  id: "0048",
  nombre: "La casa del papel T3",
  año: 2019,
  categoria: "Acción, Crimen, Suspense, Thriller",
  tipo: "Serie",
  portada: "https://img.onfilom.com/cover/20211105/1636116489836_6954343edc9237911cdccdcf826500a9reEMJA1uzscCbkpeRJeTT2bjqUp.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/drama/l75BwWt0P9guKX5L2D8gl-Money-Heist-Season-3"
},
  {
  id: "0049",
  nombre: "La casa del papel T2",
  año: 2019,
  categoria: "Acción, Crimen, Suspense, Thriller",
  tipo: "Serie",
  portada: "https://img.onfilom.com/cover/20210831/o_1630396263895.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/drama/1aZPakk9er8LchU1S7e0S-Money-Heist-Season-2"
},
  {
  id: "0050",
  nombre: "La casa del papel T1",
  año: 2018,
  categoria: "Acción, Crimen, Suspense, Thriller",
  tipo: "Serie",
  portada: "https://img.onfilom.com/cover/20210831/o_1630396292934.jpg?imageView2/1/w/300/h/400/format/webp/interlace/1/ignore-error/1/q/90!",
  link: "https://h5.onfilom.com/es/detail/drama/Sfqu3ZBmffVwOm9Dv6YEe-Money-Heist-Season-1"
}
];

export { peliculas };
