export default function(el, binding, vNode) {
    let $el = $(el);
    if (binding.value !== undefined && binding.value !== null) {
        $el.bind(this).removeClass('z-depth z-value-0 z-value-1 z-value-2 z-value-3 z-value-4 z-value-5');
        $el.bind(this).addClass('z-depth z-value-' + binding.value);
    }
};