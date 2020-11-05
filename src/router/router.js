import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Catalog from "../components/Catalog.vue";
import Checkout from "../components/Checkout.vue";
import Categories from "../components/Categories.vue";
import Projects from "../components/Projects.vue";
import CustomerRates from "../components/Rates/RatesComponents/CustomerRates";
import ErrorPage from "../components/ErrorPage";
import Personal from "../components/Personal/Personal";
import PersonalFreelancer from "../components/Personal/PersonalFreelancer";
import Chat from "../components/Personal/PersonalComponents/Chat";
import Messages from "../components/Personal/PersonalComponents/Messages";
import PersonalProjects from "../components/Personal/PersonalComponents/Projects";
import Requests from "../components/Personal/PersonalComponents/Requests";
import CompletedProjects from "../components/Personal/PersonalComponents/CompletedProjects";
import Review from "../components/Personal/PersonalComponents/Review";
import Rates from "../components/Rates/Rates";
import CustomerRatesFreelancer from "../components/Rates/RatesComponents/FreelancerRates";
import ProfileManagement from "../components/Personal/PersonalComponents/ProfileManagement";
import Resume from "../components/Personal/PersonalComponents/Resume";
import Portfolio from "../components/Personal/PersonalComponents/Portfolio";
import Workspace from "../components/Workspace/Workspace";

Vue.use(VueRouter)

let url = '/';
if(location.hostname === 'frontend.topden.net') url = '/kli1/';

const routes = [
  { path: url, component: Home },
  {
    path: url + 'catalog',
    component: Catalog,
    meta: {
      breadcrumb: [
        {
          name: 'Categories',
          path: '/categories'
        },
      ]
    }
  },
  { path: url + 'categories', component: Categories },
  { path: url + 'projects', component: Projects },
  {
    path: url + 'rates', component: Rates,
    children: [
      {
        path: 'customer',
        component: CustomerRates,
        meta: {
          mobileSubTitle: '',
          breadcrumb: [
            {
              name: 'Projects',
              path: '/projects'
            },
          ]
        }
      },
      {
        path: 'freelancer',
        component: CustomerRatesFreelancer,
        meta: {
          breadcrumb: [
            {
              name: 'Projects',
              path: '/projects'
            },
          ]
        }
      },
    ],
  },
  { path: url + 'checkout', component: Checkout },

  {
    path: url + 'personal-customer', component: Personal,
    children: [
      {
        path: 'chat',
        component: Chat,
        meta: {
          // breadcrumb:  routeParams => `route params id: ${routeParams}`
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-customer/messages',
            },
            {
              name: 'Chat',
              path: '/personal-customer/chat'
            },
          ]
        }
      },
      {
        path: 'messages',
        component: Messages,
        meta: {
          mobileSubTitle: 'Messages',
          breadcrumb: [
            {
              name: 'My profile',
              path: '/personal-customer/messages'
            },
            {
              name: 'Messages',
              path: '/personal-customer/messages'
            },
          ]
        }
      },
      {
        path: 'projects',
        component: PersonalProjects,
        meta: {
          breadcrumb: [
            {
              name: 'My profile',
              path: '/personal-customer/messages'
            },
            {
              name: 'Projects in work',
              path: '/personal-customer/projects'
            },
          ]
        }
      },
      {
        path: 'requests',
        component: Requests,
        meta: {
          mobileSubTitle: 'Requests for execution',
          breadcrumb: [
            {
              name: 'My profile',
              path: '/personal-customer/messages'
            },
            {
              name: 'Requests for execution',
              path: '/personal-customer/requests'
            },
          ]
        }
      },
      {
        path: 'completed-projects',
        component: CompletedProjects,
        meta: {
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-customer/messages'
            },
            {
              name: 'Completed projects',
              path: '/personal-customer/completed-projects'
            },
          ]
        }
      },

      {
        path: 'management',
        component: ProfileManagement,
        meta: {
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-customer/messages'
            },
            {
              name: 'Profile management',
              path: '/personal-customer/management'
            },
          ]
        }
      },

    ]
  },

  {
    path: url + 'personal-freelancer', component: PersonalFreelancer,
    children: [
      {
        path: 'chat',
        component: Chat,
        meta: {
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Chat',
              path: '/personal-freelancer/chat'
            },
          ]
        }
      },
      {
        path: 'messages',
        component: Messages,
        meta: {
          mobileSubTitle: 'Messages',
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Messages',
              path: '/personal-freelancer/messages'
            },
          ]
        }
      },
      {
        path: 'projects',
        component: PersonalProjects,
        meta: {
          mobileSubTitle: 'Projects in work',
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Projects in work',
              path: '/personal-freelancer/projects'
            },
          ]
        }
      },
      {
        path: 'requests',
        component: Requests,
        meta: {
          mobileSubTitle: 'Requests for execution',
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Requests for execution',
              path: '/personal-freelancer/requests'
            },
          ]
        }
      },
      {
        path: 'completed-projects',
        component: CompletedProjects,
        meta: {
          mobileSubTitle: 'Completed projects',
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Completed projects',
              path: '/personal-freelancer/completed-projects'
            },
          ]
        }
      },
      {
        path: 'review',
        component: Review,
        meta: {
          mobileSubTitle: 'Review',
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Review',
              path: '/personal-freelancer/review'
            },
          ]
        }
      },
      {
        path: 'management',
        component: ProfileManagement,
        meta: {
          mobileSubTitle: 'Profile management',
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Profile management',
              path: '/personal-freelancer/management'
            },
          ]
        }
      },
      {
        path: 'resume',
        component: Resume,
        meta: {
          mobileSubTitle: 'Resume',
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Resume',
              path: '/personal-freelancer/resume'
            },
          ]
        }
      },
      {
        path: 'portfolio',
        component: Portfolio,
        meta: {
          mobileSubTitle: 'Portfolio',
          breadcrumb:  [
            {
              name: 'My profile',
              path: '/personal-freelancer/messages'
            },
            {
              name: 'Portfolio',
              path: '/personal-freelancer/portfolio'
            },
          ]
        }
      },
    ]
  },

  {
    path: url + "workspace",
    component: Workspace,
    meta: {
      breadcrumb:  [
      {
        name: 'Workspace',
        path: '/workspace'
      },
    ]}
  },
  { path: "*", component: ErrorPage }
  // { path: url + 'printing-business-cards-empty', component: CustomerRatesEmpty },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requires) {
    next()
  } else {
    next()
  }
})

export default router;
