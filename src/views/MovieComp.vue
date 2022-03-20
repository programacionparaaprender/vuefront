<template>
    <div :id="id | formatId" class="card" :class="{'movie-like': isFav }">
        <img :src="imagenMostrar" class="card-img-top">
        <div class="card-body">
            <h2 class="card-title">{{ title | uppercase }}</h2>
            <p class="card-text">{{ synopsis | excertp }}</p>
            <button class="btn" :class="btnStatus" @click="toggleLike">
                <span v-text="isFav ? 'Favorita' : 'Agregar a Favoritas'"></span>
                <i class="far fa-heart " :class="{
                    'far': !isFav,
                    'fas': isFav
                }"></i>
            </button>
            <router-link :to="{ name: 'pelicula', params: { id }}" class="btn btn-primary">Detalle</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"MovieComp",
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            default: 'No posee Sinopsis'
        },
        cover: {
            type: String,
            required: true,
            default: require('./../assets/logo.png')
        },
        like: {
            type:Boolean,
            required: true,
            default () {
                return false
            }
        }
    },
    filters: {
        formatId (value) {
            return `movieCard-${value}`
        },
        uppercase (value) {
            return value.toUpperCase()
        },
        reverse (value) {
            let word = value.split('')
            return word.reverse().join('')
        },
        excertp (value) {
            return value.substring(0, 100) + '...'
        }
    },
    data () {
        return {
            imagenMostrar:"",
            default: require('./../assets/logo.png'),
            className: {
                'btn-like': true,
                'btn-light': false,
                myclass: true
            },
            user: 'Jesus Lopez'
           
        }
    },
    watch: {
        like (newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    computed: {
        btnStatus () {
            return this.isFav ? 'btn-like' : 'btn-ligth'
        },

        isFav () {
            let favMovies = this.$store.state.favMovies

            let index = favMovies.findIndex(movie => movie.id === this.id)

            return index >= 0
        }
    },
    async mounted(){
        try{
            console.log('Mounted de MovieComp')
            const response = await fetch(this.cover);
            this.imagenMostrar = this.cover;
            console.log(JSON.stringify(response));
        }catch(error){
            this.imagenMostrar = this.default;
            console.log(error);
        }
    },
    methods: {
        toggleLike () {
            // this.like = !this.like
            let data = {
                id: this.id,
                like: !this.like
            }
            this.$emit('toggleLike', data)
        }
    },
}
</script>

<style>

</style>