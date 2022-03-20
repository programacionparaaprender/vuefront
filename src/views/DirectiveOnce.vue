<template>
    <div>
        <h2 v-text="title" v-once></h2>
    </div>
</template>

<script>
export default {
    name:"DirectiveOnce",
    data () {
        return {
            title: 'Directiva v-once',
        }
    },
}
</script>

<style>

</style>