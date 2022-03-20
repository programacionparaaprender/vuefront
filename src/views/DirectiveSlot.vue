<template>
  <div>
            <h2 v-text="title"></h2>
            <button-comp>
                <template #action>
                    Cerrar
                </template>
                <template #element>
                    Modal
                </template>
            </button-comp>
        </div>
</template>

<script>
import buttonComp from '../components/buttonComp.vue'

export default {
    name:"DirectiveSlot",
    data () {
        return {
            title: 'Directiva v-slot',
        }
    },
    components: {
        buttonComp,
    }
}
</script>

<style>

</style>