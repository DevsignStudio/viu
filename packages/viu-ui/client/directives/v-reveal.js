export default (el, binding) => {
    let $el = $(el);
    let event = binding.arg + ".reveal";
    

    $el.unbind(event);
    console.log(binding);
    $el.on(event, function() {
        let $target = $(binding.value);
        console.log($target);
        $(".reveal.front").removeClass("enable");
        $(".reveal.front").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
            if (!$(this).hasClass("enable")) {
                $(this).removeClass("front");

            }
        });
        $target.addClass("front");
        $target.addClass("enable");
    });
};
