import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueMeta from 'vue-meta'

import BasicLayout from './layouts/Basic'

Vue.config.productionTip = false

Vue.use(VueMeta)

Vue.component('basic-layout', BasicLayout)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
