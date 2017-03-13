import { RouterFactory } from 'meteor/akryum:vue-router2';

const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior,
});

export default routerFactory;
