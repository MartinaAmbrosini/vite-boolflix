<script >
import AppCard from '../components/AppCard.vue'

// importo store
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template >
    <h2>FILM</h2>
    <div class="film d-flex flex-wrap justify-content-between p-5">
        <div class="card text-bg-dark" v-for="movie in store.movieList">
            <AppCard :info="movie" />
        </div>
    </div>


    <h2>SERIE TV</h2>
    <div class="tv d-flex flex-wrap justify-content-between p-5">
        <div class="card" v-for="series in store.tvList">
            <AppCard :info="series" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    margin: 20px 30px;
    font-weight: bolder;
}

.card {
    margin: 15px 30px 0;
    max-width: calc(100% / 6);
    min-width: calc(100% / 6);
    min-height: 448px;
}
</style>