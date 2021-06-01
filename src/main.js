import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import BasicLayout from './layouts/Basic'

import HelloWorldSimple from 'jep-package-test'



Vue.config.productionTip = false

Vue.component('basic-layout', BasicLayout)

Vue.use(HelloWorldSimple)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
