<template>
  <div class="home">
    <VueDirectives />
  </div>
</template>

<script>
//@keyup.enter="send"
import VueDirectives from './VueDirectives.vue';


export default {
  name: 'Home',
  components:{
        'VueDirectives': VueDirectives
  },
  data(){
    return{
      title: "Hola mundo desde vuejs",
      color:"warning",
            query:"",
            text: "Hola desde Laravelers",
            listaPost:[],
            message:"",
            chat:{
                message:[]
            }
    }
  },
  computed:{
      resultsVisibility(){
          return (this.query.length > 0) ? 'show':'hide';
      }
  },
  methods:{
      send(){
          if(this.message.length > 0){
              console.log(this.message);
              this.chat.message.push(this.message);
          }
      },
      search(){
          if(this.query.length > 1){
              this.axios.post('/304-livesearch/public/posts/search',{
                  q: this.query
              }).then(response=>{
                  console.log(response);
                  this.listaPost = response.data.posts;
              }).catch(error => {
                  console.log(error.response);
              });
          }
      }
  }
}
</script>
<style>

</style>
