import './client/jQueryFunction';
import './client/plugins';

//directives
import ripple from './client/directives/v-ripple';
import depth from './client/directives/v-depth';
import wordClamp from './client/directives/v-word-clamp';
import reveal from './client/directives/v-reveal';
import unreveal from './client/directives/v-unreveal';
import open from './client/directives/v-open';
import wheight from './client/directives/v-wheight';
import Sugar from 'sugar';

//components
import Component from './client/components';
import snackbar from './client/snackbar';
import mixin from './client/PageLoadMixin';
import confirmation from './client/confirmation';

export const Snackbar = snackbar;
export const PageLoadMixin = mixin;
export const Confirmation = confirmation;

export default {
    install(vmVue) {
        Sugar.extend();
        Component.install(vmVue);
        vmVue.prototype.$snackbar = snackbar;
        vmVue.prototype.$confirmation = confirmation;
        vmVue.directive("depth", depth);
        vmVue.directive("open", open);
        vmVue.directive("reveal", reveal);
        vmVue.directive("ripple", ripple);
        vmVue.directive("unreveal", unreveal);
        vmVue.directive("wheight", wheight);
        vmVue.directive("word-clamp", wordClamp);

        // vmVue.mixin(mixin);
    }
};