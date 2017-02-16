import '/imports/client/router.js';
import { Vue } from 'meteor/akryum:vue';
import {Router, nativeScrollBehavior} from 'meteor/akryum:vue-router2';
import AppLayout from '/imports/client/views/AppLayout.vue';
import VueHead from 'vue-head';

Vue.use(VueHead);

const router = new Router({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior,
});
Meteor.startup(() => {
    new Vue({
        router: router.start(),
        render: h => h(AppLayout),
    }).$mount('app');
});
