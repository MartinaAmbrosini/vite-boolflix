<script>
// importo axios
import axios from 'axios';

// importo componenti
import AppHeader from './components/AppHeader.vue'
import ListItem from './components/ListItem.vue'
import AppSearch from './components/AppSearch.vue'
import AppResult from './components/AppResult.vue'

// importo store
import { store } from './store';


export default {
    components: {
        AppHeader,
        ListItem,
        AppSearch,
        AppResult
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
        }
    }
</script>

<template></template>

<style lang="scss" scoped></style>
