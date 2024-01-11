<script >

export default {
    name: 'AppCard',
    props: {
        info: Object
    },
    data() {
        return {
            lang: ["it", "de", "en", "es", "fr", "us"],
        }
    },
    methods: {
        getImagePath: function (img) {
            console.log("../assets/${img}.png")
            if (this.lang.includes(img)) {
                return new URL("../assets/" + img + ".png", import.meta.url).href;
            } else {
                return new URL("../assets/zz.png", import.meta.url).href;
            }
        }
    }
};
</script>

<template>
    <div class="card-cover">
        <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="cover">
    </div>
    <div class="title">Titolo: {{ info.title }}</div>
    <div class="or-title">Titolo originale: {{ info.original_title }} </div>
    <div class="lang">
        <img :src="getImagePath(info.original_language)" alt="">
    </div>
    <div class="score">Voto: {{ info.vote_average }}</div>
</template>

<style lang="scss" scoped></style>