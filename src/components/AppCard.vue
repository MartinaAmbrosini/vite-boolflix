<script >
import { faTemperatureEmpty } from '@fortawesome/free-solid-svg-icons';
import { vShow } from 'vue';


export default {
    name: 'AppCard',
    props: {
        info: Object
    },
    data() {
        return {
            display: true,
            conthover: 0,
            contleave: 0,
            lang: ["it", "de", "en", "es", "fr", "us"],
        }
    },
    methods: {
        hover() {
            if (this.conthover == 0) {
                this.display = !this.display
                this.conthover++
                this.contleave = 0
            }
        },
        leave() {
            if (this.contleave == 0) {
                this.display = !this.display
                this.contleave++
                this.conthover = 0
            }
        },

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
    <div class="card-cover" @mouseover="hover" @mouseleave="leave">
        <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" class="card-img" v-show="display" alt="cover">
        <div class="card-img-overlay" v-show="!display">
            <div class="card-title mt-2" style="font-size:20px; font-weight: bolder;">{{ info.title }}</div>
            <div class="or-title mt-2" style="font-size: 14px;">{{ info.original_title }} </div>
            <div class="lang mt-2">
                <img :src="getImagePath(info.original_language)" alt="">
            </div>
            <div class="score mt-2">
                <i class="fa-solid fa-star" style="color: #FFD43B;" v-for="n in (Math.round(info.vote_average / 2))">{{
                    console.log(n) }}</i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"
                    v-for="n in (5 - Math.round(info.vote_average / 2)) "></i>
            </div>
            Trama
            <div class="trama mt-2" style="font-size: small; text-align: justify;">{{ info.overview }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.lang img {
    max-width: 30px;
}

.card-img-overlay {
    background-color: black;
    min-height: 448px;
    text-align: center;
}
</style>