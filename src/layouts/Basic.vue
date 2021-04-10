<template>
    <div style="min-height: 100%; margin-bottom: -50px; padding-bottom: 50px;">
        <app-header></app-header>
        <slot></slot>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'basic-layout',
    data () {
        return {
        }
    },
    components: {
        'app-footer': Footer,
        'app-header': Header,
    }
}
</script>
