import { Router } from 'meteor/akryum:vue-router2';

const router = new Router({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior,
});

export default router;