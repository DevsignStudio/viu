import { Vue } from 'meteor/akryum:vue';

Vue.directive('depth', function (el, binding) {
    let $el = $(el);
    if (binding.value) {
        $el.bind(this).addClass('z-depth z-value-'+ binding.value);
    }
});
