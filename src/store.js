import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    movieApiURL: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '0dc385eba6135d7c3c3b705bf115ef6a',
    searchText: "",
    tvList: [],
    tvApiURL: 'https://api.themoviedb.org/3/search/tv',
});