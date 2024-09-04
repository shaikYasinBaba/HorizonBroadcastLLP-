
const imageLinks = {
    Home: 'https://img.freepik.com/premium-vector/elegant-elegant-mortgage-logo-white-background-white-background_658271-5256.jpg?semt=ais_hybrid',
    Movies:
      'https://img.freepik.com/free-vector/cinema-background_24908-61015.jpg?semt=ais_hybrid',
    'TV Shows':
      'https://img.freepik.com/premium-photo/red-black-vintage-retro-style-show-show-time_1008415-88468.jpg?semt=ais_hybrid',
    Sports:
      'https://img.freepik.com/premium-vector/sport-logo-template-with-abstract-shapes_23-2148228932.jpg?semt=ais_hybrid',
    Live: 'https://img.freepik.com/free-vector/red-live-neon-sign-vector_53876-61394.jpg?semt=ais_hybrid',
  }
  
  const translations = {
    English: {
      Home: {title: 'Home', image: imageLinks.Home},
      Movies: {title: 'Movies', image: imageLinks.Movies},
      'TV Shows': {title: 'TV Shows', image: imageLinks['TV Shows']},
      Sports: {title: 'Sports', image: imageLinks.Sports},
      Live: {title: 'Live', image: imageLinks.Live},
    },
    French: {
      Home: {title: 'Accueil', image: imageLinks.Home},
      Movies: {title: 'Films', image: imageLinks.Movies},
      'TV Shows': {title: 'Émissions TV', image: imageLinks['TV Shows']},
      Sports: {title: 'Sports', image: imageLinks.Sports},
      Live: {title: 'En direct', image: imageLinks.Live},
    },
    German: {
      Home: {title: 'Startseite', image: imageLinks.Home},
      Movies: {title: 'Filme', image: imageLinks.Movies},
      'TV Shows': {title: 'Fernsehsendungen', image: imageLinks['TV Shows']},
      Sports: {title: 'Sport', image: imageLinks.Sports},
      Live: {title: 'Live', image: imageLinks.Live},
    },
    Russian: {
      Home: {title: 'Дом', image: imageLinks.Home},
      Movies: {title: 'Фильмы', image: imageLinks.Movies},
      'TV Shows': {title: 'Телешоу', image: imageLinks['TV Shows']},
      Sports: {title: 'Спорт', image: imageLinks.Sports},
      Live: {title: 'В эфире', image: imageLinks.Live},
    },
    Spanish: {
      Home: {title: 'Inicio', image: imageLinks.Home},
      Movies: {title: 'Películas', image: imageLinks.Movies},
      'TV Shows': {title: 'Programas de TV', image: imageLinks['TV Shows']},
      Sports: {title: 'Deportes', image: imageLinks.Sports},
      Live: {title: 'En vivo', image: imageLinks.Live},
    },
    Chinese: {
      Home: {title: '主页', image: imageLinks.Home},
      Movies: {title: '电影', image: imageLinks.Movies},
      'TV Shows': {title: '电视剧', image: imageLinks['TV Shows']},
      Sports: {title: '体育', image: imageLinks.Sports},
      Live: {title: '直播', image: imageLinks.Live},
    },
  }
  
  export default translations
  