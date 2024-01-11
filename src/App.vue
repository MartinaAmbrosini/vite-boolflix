<script>
// importo axios
import axios from 'axios';

// importo componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

// importo store
import { store } from './store';


export default {
    components: {
        AppHeader,
        AppMain,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getMovie() {
            let movieURL = store.movieApiURL;

            if (store.searchText !== '') {
                movieURL += `?api_key=${store.apiKey}&query=${store.searchText}`;
            }

            axios
                .get(movieURL)
                .then((res => {
                    console.log(res.data.results);
                    store.filmList = res.data.results;
                }))
                .catch((err) => {
                    console.log("errori", err);
                })

            this.getTv();
        },
        getTv() {
            let tvURL = store.tvApiURL;

            if (store.searchText !== '') {
                tvURL += `?api_key=${store.apiKey}&query=${store.searchText}`;
            }

            axios
                .get(tvURL)
                .then((res => {
                    console.log(res.data.results);
                    store.tvList = res.data.results;
                }))
                .catch((err) => {
                    console.log("errori", err);
                })
        },
    },
    created() {
        this.getMovie();

    }
}
</script>

<template>
    <AppHeader @search="getMovie" />
    <AppMain />
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>

