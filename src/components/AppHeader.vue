<script >
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" style="color: rgb(218, 1, 1); font-size: 30px; font-weight: bolder;">Boolflix</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Cerca un titolo" v-model="store.searchText"
                        @keyup.enter="$emit('search')" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit" @click.prevent="$emit('search')">Search</button>
                </form>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>