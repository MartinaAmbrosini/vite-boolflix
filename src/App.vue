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
            axios.get(store.movieApiURL + store.searchText)
                .then(res => {
                    store.movieList = res.data.results;
                    console.log(store.movieList);
                    console.log(store.searchText);
                })
                .catch(err => {
                    console.log(err);
                }),
                axios.get(store.tvApiURL + store.searchText)
                    .then(res => {
                        store.tvList = res.data.results;
                        console.log(store.tvList);
                    })
                    .catch(err => {
                        console.log(err);
                    })

            store.searchText = '';
        }
    },
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

