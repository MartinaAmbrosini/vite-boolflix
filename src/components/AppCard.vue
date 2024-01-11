<script >
export default {
    name: 'AppCard',
    props: {
        info: Object
    }

}


</script>

<template>
    <div class="card-cover">
        <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="cover">
    </div>
    <div class="title" v-if="info.title">titolo: {{ info.title }}</div>
    <div class="title" v-else>titolo: {{ info.name }}</div>
</template>

<style lang="scss" scoped></style>