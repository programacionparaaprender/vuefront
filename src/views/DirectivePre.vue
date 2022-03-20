<template>
  <div>
            <h2 v-text="title"></h2>
            <p v-pre>{{ title }}</p>
        </div>
</template>

<script>
export default {
    name:"DirectivePre",
    data () {
        return {
            title: 'Directiva v-pre',
        }
    },
}
</script>

<style>

</style>