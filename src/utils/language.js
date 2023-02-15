const language = {
  en: {
    tab1: "Home",
    tab2: "Search",
    tab3: "Favorites",
    tab4: "Settings",
    placeHolderSearch: "🔍 Search city",
    titleFav: "Favorites Cities",
    titleSettg: "Settings",
    errorLocate: "Turn on location and restart the app",
    wait: "Wait",
    alertDeleteFav: "Are you sure to remove this city from your favourites?",
    cancel: "cancel",
    remove: "remove",
  },
  es: {
    tab1: "Inicio",
    tab2: "Buscar",
    tab3: "Favoritos",
    tab4: "Ajustes",
    placeHolderSearch: "🔍 Buscar ciudad",
    titleFav: "Ciudades Favoritas",
    titleSettg: "Ajustes",
    errorLocate: "Active la ubicación y reinicie la aplicación",
    wait: "Espera",
    alertDeleteFav: "¿Estás seguro de eliminar esta ciudad de tus favoritos?",
    cancel: "cancelar",
    remove: "eliminar",
  },
};

const handlerLanguage = (type, lang) => {
  lang !== "es" || lang !== "en" ? (lang = "en") : lang;
  return language[lang][type];
};

export default handlerLanguage;
