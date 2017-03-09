export default (el, binding) => {
    let $el = $(el);
    if (binding.value) {
        if (typeof binding.value === 'object') {
            $clamp(el, binding.value);
        } else {
            $clamp(el, { clamp: binding.value });
        }
    }
};