import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    movieApiURL: 'https://api.themoviedb.org/3/search/movie?api_key=0dc385eba6135d7c3c3b705bf115ef6a&query=',
    searchText: "",
    tvList: [],
    tvApiURL: 'https://api.themoviedb.org/3/search/tv?api_key=0dc385eba6135d7c3c3b705bf115ef6a&query=',
});