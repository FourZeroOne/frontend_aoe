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
        component: ESport,
        meta: {
            title: 'Area of Education - Mental Health',
            metaTags: [
                {
                    name: 'description',
                    content: 'Erfahre mehr über Mental Health & E-Sport.'
                },
                {
                    property: 'og:description',
                    content: 'Erfahre mehr über Mental Health & E-Sport.'
                }
            ]
        }
    },
    {
        path: '/*',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Area of Education',
            metaTags: [
                {
                    name: 'description',
                    content: 'Gaming - wissenschaftlich aufbereitet.'
                },
                {
                    property: 'og:description',
                    content: 'Gaming - wissenschaftlich aufbereitet.'
                }
            ]
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
