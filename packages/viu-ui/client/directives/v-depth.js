export default function(el, binding, vNode) {
    let $el = $(el);
    if (binding.value) {
        $el.bind(this).addClass('z-depth z-value-' + binding.value);
    }
};