import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ESport from '@/views/ESport.vue'
import Barrierefreiheit from '@/views/Barrierefreiheit.vue'
import FrauenGaming from '@/views/FrauenGaming.vue'
import Team from '@/views/Team.vue'
import Contact from '@/views/Contact.vue'
import Mission from '@/views/Mission.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/themen/barrierefreiheit',
        name: 'Barrierefreiheit',
        component: Barrierefreiheit
    },
    {
        path: '/themen/frauen-im-gaming',
        name: 'FrauenGaming',
        component: FrauenGaming
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
      path: '/mission',
      name: 'Mission',
      component: Mission
    },
    {
        path: '/kontakt',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/themen/esport',
        name: 'ESport',
        component: ESport
    },
    {
        path: '/*',
        name: 'Home',
        component: Home
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
