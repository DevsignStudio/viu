import { Vue } from 'meteor/akryum:vue';
import { Router } from 'meteor/akryum:vue-router2';

Vue.directive('unreveal', function(el, binding) {
    let $el = $(el);
    let event = binding.arg + ".reveal";
    let $target = $(binding.value);

    $el.unbind(event);
    $el.on(event, function() {
        if (!binding.value) {
            $target = $el.parents(".reveal");
        }
        $target.removeClass("enable");
        $target.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
            if (!$target.hasClass("enable")) {
                $target.removeClass("front");
            }
        });
    });
});