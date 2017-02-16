import { Vue } from 'meteor/akryum:vue';
import { Router } from 'meteor/akryum:vue-router2';

Vue.directive('reveal', function(el, binding) {
    let $el = $(el);
    let event = binding.arg + ".reveal";
    let $target = $(binding.value);

    $el.unbind(event);
    $el.on(event, function() {
        $(".reveal.front").removeClass("enable");
        $(".reveal.front").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
            if (!$(this).hasClass("enable")) {
                $(this).removeClass("front");

            }
        });
        $target.addClass("front");
        $target.addClass("enable");
    });
});