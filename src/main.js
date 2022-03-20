import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//sección de uso de axios
import axios from 'axios';
import VueAxios from 'vue-axios'; 
Vue.use(VueAxios, axios);


//sección de estilos bootstrap
//@import '../node_modules/bootstrap/scss/bootstrap.scss';
//import { Bootstrap } from 'bootstrap'
//Vue.use(Bootstrap)


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/scss/bootstrap.scss';
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false


import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll);


const APIKEY = '29ed1d64cc3508c30f08131eb1860d99'
const BASEURL = 'https://api.themoviedb.org/3/'

Vue.mixin({
    data () {
        return {
            apiConfig: `?api_key=${APIKEY}&language=es-MX`,
            apiBaseURL: BASEURL
        }
    },
    filters: {
        coverURL (str) {
            return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${str}`
        }
    } 
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
