import { Vue } from 'meteor/akryum:vue';

export default (el, binding) => {
    let $el = $(el);
    let event = binding.arg + ".reveal";
    
    $el.unbind(event);
    $el.on(event, function() {
        let $target = $(binding.value);
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
}
