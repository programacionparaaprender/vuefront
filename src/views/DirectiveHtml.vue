<template>
    <div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
    </div>
</template>

<script>
export default {
    name:"DirectiveHtml",
    data () {
        return {
            title: 'Directiva v-html',
            message: '<b>Hola desde directive html</b>',
        }
    },
}
</script>

<style>

</style>