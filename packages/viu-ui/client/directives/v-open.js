export default (el, binding) => {
    let $el = $(el);
    let event = "click.open";
    let $target;

    if (!binding.value) {
        $target = $('.viu-side-navigation');
    } else {
        $target = $(binding.value);
    }
    $el.unbind(event);
    $el.on(event, function() {
        $target = $($target.selector);
        $target.addClass("open");
    });
};