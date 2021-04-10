import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import BasicLayout from './layouts/Basic'



Vue.config.productionTip = false

Vue.component('basic-layout', BasicLayout)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
