export default (el, binding) => {
    if (!binding.value) {
        binding.value = 100;
    }
    let $el = $(el);
    el.style.height = (window.innerHeight * binding.value / 100) + 'px';

    $(window).on("resize", function() {
        el.style.height = (window.innerHeight * binding.value / 100) + 'px';
    })
};