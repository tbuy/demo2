import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Navtab from '../pages/Navtab.vue'
import Login from '../pages/Login.vue'
import NoteLogin from '../pages/NoteLogin.vue'




Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Home
        }, {
            path: '/navtab',
            component: Navtab
        },{
            path: '/login',
            component: Login
        }, {
            path: '/noteLogin',
            component: NoteLogin
        }


    ]
})
