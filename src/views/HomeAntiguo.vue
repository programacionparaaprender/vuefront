<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Bienvenido al curso de vuejs desde cero</p>
    <div>{{title}}</div>
    <div class="container">
        <div class="row">
            <div class="list-group offset-4 col-4">
                <li class="list-group-item active">Chat Room</li>
                <ul v-chat-scroll class="messages">
                    <message v-bind:key="x" :mensaje="x" v-for="x in chat.message"></message>
                </ul>   
                <!-- <ul class="list-group">
                    <message v-bind:key="x.index" :color="color" :mensaje="x" v-for="x in chat.message"></message>
                </ul>  --> 
                <input 
                        class="form-control" 
                        type="text" 
                        name="q" 
                        placeholder="Type your message here..."
                        v-model="message"
                        />
                <button 
                    class="btn btn-primary" 
                    type="button" 
                    @click="send" >Send</button>
            </div>
        </div> 
  </div>
    
  </div>
</template>

<script>
//@keyup.enter="send"
import message from './message.vue';


export default {
  name: 'Home',
  components:{
        'message': message
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
    .list-group{
        overflow-y: scroll;
        height: 200px;
    }
    body{
        font-family: sans-serif;
        font-style: italic;
    }

    ::-webkit-scrollbar{
        width: 1rem;
    }
    
    ::-webkit-scrollbar-track{
        background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb{
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover{
        background: #555;
    }
    .search-box{
        font-style: italic;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .search-input{
        width:35rem;
        height: 2rem;
        border-radius: 1rem;
        border: 0;
        background:#eeeeee;
        padding: 0.5rem 1rem;
        font-size: 18pt;
        outline: none;
    }
    .result-list.show{
        width:37rem;
        max-height: 12rem;
        overflow-y:auto;
        list-style: none;
        background: #fff;
        padding:0;
        top:3rem;
        border-radius: 1rem;
        box-shadow: 1px 2px 8px 0px #b5b5b5;
        margin: 7px 0px;
    }
    .result-list.hide{
        display:none;
    }
    .result-item{
        border-bottom: 1px solid #ececec;
    }
    .result-link{
        text-decoration:none;
        color: #333;
        display: block;
        padding: 0.5rem 1rem;
    }
    .result-link{
        background: #f9f9f9;
    }
    .result-title{
        font-size: 1rem;
        font-weight: 600;
    }
</style>
