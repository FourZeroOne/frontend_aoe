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

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

    next();
  });

export default router
