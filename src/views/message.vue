<template>
  <div>
    <li class="list-group-item" :class="className">{{ mensaje }}</li>
    <small class="badge float-right" :class="BadgeClass">You</small>
  </div>
</template>

<script>
//class="badge-danger"
export default {
    name:"message",
    props: [
      'mensaje',
      'color'
    ],
    computed:{
      className(){
          return 'list-group-item-'+this.color;
      },
      BadgeClass(){
          return 'badge-'+this.color;
      }
    },
    mounted(){
        console.log('component mounted...');
    }
}
</script>

<style>

</style>