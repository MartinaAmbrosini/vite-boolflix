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

<template>
    <h2>FILM</h2>
    <div class="card" v-for="movie in store.movieList">
        <AppCard :info="movie" />
    </div>

    <h2>SERIE TV</h2>
    <div class="card" v-for="series in store.tvList">
        <AppCard :info="series" />
    </div>
</template>

<style lang="scss" scoped>
h2 {
    margin: 20px 30px;
}

.card {
    margin: 30px;
}
</style>