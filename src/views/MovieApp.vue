<template>
  <div class="container">
            <h5>Bienvenido {{ user.name }} {{ user.lastName }}</h5>
            <SearchComp ref="searchComp" v-model="searchMovies"/>
            <div v-show="! Object.keys(searchMovies).length">
                <h1>Peliculas App </h1>
               <pre>{{ favMovies }}</pre>
                <div class="row">
                    <div class="col-12  col-md-6 col-lg-4 py-3" v-for="(movie, key) in movies" 
                    v-bind:key="key">
                        <MovieComp 
                        :id="movie.id" 
                        :title="movie.title" 
                        :synopsis="movie.overview" 
                        :cover="movie.poster_path"
                        :like="movie.like"
                        @toggleLike="onToggleLike"
                        />
                    </div>
                </div>

                <div class="row">
                    <button @click="setPage(n)" class="btn m-1" :class="{
                        'btn-light': n != page,
                        'btn-primary': n == page
                    }" v-for="(n, index) in total_pages" :key="index">
                        {{n}}
                        
                    </button>
                </div>
            </div>
            <div v-show="Object.keys(searchMovies).length">
                <h1>Resultados de busqueda</h1>
                <div class="row">
                    <div class="col-12  col-md-6 col-lg-4 py-3" v-for="(movie, key) in searchMovies.results" 
                    v-bind:key="key">
                        <MovieComp 
                        v-if="movie.poster_path"
                        :id="movie.id" 
                        :title="movie.title" 
                        :synopsis="movie.overview" 
                        :cover="movie.poster_path"
                        :like="movie.like"
                        @toggleLike="onToggleLike"
                        />
                    </div>
                </div>  
                <div class="row">
                    <button @click="$refs.searchComp.setPage(n)" class="btn m-1" :class="{
                        'btn-light': n != searchMovies.page,
                        'btn-primary': n == searchMovies.page
                    }" v-for="(n, index) in searchMovies.total_pages" :key="index">
                        {{n}}
                        
                    </button>
                </div> 
            </div>
            
            <MovieFav :show.sync="showFav"/>
        </div>
</template>

<script>
const APIKEY = '29ed1d64cc3508c30f08131eb1860d99'
const BASEURL = 'https://api.themoviedb.org/3/'
import Vuex from 'vuex'


import MovieComp from './MovieComp.vue'
import MovieFav from './MovieFav.vue'
import SearchComp from './SearchComp.vue'

export default {
    name: 'MovieApp',
    data () {
        return {
           
            add: 0,
            user: {
                name: 'Jesus',
                lastName: 'Lopez'
            },
            oldUser: null,
            movies: [
               
            ],
            searchMovies: {
                results:[

                ]
            },
            showFav: false,
            page: 1,
            total_pages: null
        }
    },
    computed:{
        ...Vuex.mapState(['favMovies','counter'])
    },
    watch: {
        page () {
            this.getPopularMovies()
        }
    },
    components: {
        MovieComp,
        MovieFav,
        SearchComp
    },
    methods: {
        
        onToggleLike (data) {
            let movieLike = this.movies.find(movie => movie.id == data.id)
            movieLike.like = data.like
            // this.$store.commit('toggleFavMovie', movieLike)
            this.storeFavorita(movieLike)
            this.showFav = data.like
        },
        getPopularMovies () {
            const URL = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${this.page}`
            fetch(URL)
                .then(response => response.json())
                .then(({results, page, total_pages}) => {
                    console.log(page, total_pages)
                    this.total_pages = total_pages
                    this.movies = results.map(m => {
                        m.like = false
                        return m
                    })
                })
                .catch(error=>{
                    console.log(error);
                })
        },
        setPage (page) {
            this.page = page
            this.getPopularMovies() 
        },
        ...Vuex.mapMutations({
            storeFavorita: 'toggleFavMovie'
        })
        // onHideFav (show) {
        //     this.showFav = show
        // }
    },
    mounted() {
        let locationURL = new URL(window.location.href)
        this.page = locationURL.searchParams.get('page') || 1
    
        this.getPopularMovies()
    },
}
</script>

<style>

</style>