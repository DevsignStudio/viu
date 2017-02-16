import { Vue } from 'meteor/akryum:vue';

Vue.directive('word-clamp', function (el, binding) {
    let $el = $(el);
    if (binding.value) {
        if (typeof binding.value ==='object') {
            $clamp(el, binding.value);
        } else {
            $clamp(el, {clamp: binding.value});
        }
    }
})
