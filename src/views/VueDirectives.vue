<template>
    <div>
        <h1 v-text="title"></h1>
        <p v-cloak>{{ title }}</p>
        <p v-text="text"></p>
        <a :href="link.href" :title="link.title" v-text="link.text"></a>
        <PropsComp />
        <!--
<DirectiveHtml />
        <DirectiveShow />
        <DirectiveIf />
        <DirectiveFor />
        <DirectiveOn/> 
        <DirectiveModel />
        <DirectiveSlot />
        <DirectivePre/>
        <DirectiveOnce/>
        <SaludarComp/>
        <ComputedPropertiesGetSet />
        <Padre />
            -->
    </div>
</template>

<script>
import PropsComp from './PropsComp.vue';
/* import DirectiveHtml from './DirectiveHtml.vue';
import DirectiveShow from './DirectiveShow.vue'
import DirectiveIf from './DirectiveIf.vue'
import DirectiveFor from './DirectiveFor.vue'
import DirectiveOn from './DirectiveOn.vue'
import DirectiveModel from './DirectiveModel.vue'
import DirectiveSlot from './DirectiveSlot.vue'
import DirectivePre from './DirectivePre.vue'
import DirectiveOnce from './DirectiveOnce.vue'
import SaludarComp from './SaludarComp.vue'
import ComputedPropertiesGetSet from './ComputedPropertiesGetSet.vue'
import Padre from './Padre.vue' */


export default {
    components:{
        PropsComp
        /* DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
        DirectiveModel,
        DirectiveSlot,
        DirectivePre,
        DirectiveOnce,
        SaludarComp,
        ComputedPropertiesGetSet,
        Padre */
    },
    data () {
        return {
            title: 'Directivas de Vue.js',
            text: 'Texto de prueba v-text',
            link: {
                text: 'VueJS Home',
                href: 'https://vuejs.org/',
                title: 'Documentacion Vue JS'
            }
        }
    },
}
</script>

<style>
    [v-cloak] {
        display: none;
    }
</style>