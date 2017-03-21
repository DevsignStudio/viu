import Vue from 'vue';
import routerFactory from '/imports/client/router.js';
import AppLayout from '/imports/client/views/AppLayout.vue';
import VueHead from 'vue-head';
import VueHighlightJS from 'vue-highlight.js';
import ViuUI from 'meteor/devsignstudio:viu-ui';
import 'highlight.js/styles/monokai.css';

Vue.use(VueHighlightJS);
Vue.use(VueHead);
Vue.use(ViuUI);
Vue.config.debug = true;
Vue.config.devtools = true;

Meteor.startup(() => {
    const router = routerFactory.create();
    new Vue({
        router,
        render: h => h(AppLayout),
    }).$mount('app');
});
