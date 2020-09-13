import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home'
import Users from './views/Users'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', component: Home},
        {path: '/users', component: Users},
    ]
})
