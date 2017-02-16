export function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className +
            '(\\s|$)'));
}

export function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
}

export function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

export function toggleClass(el, className) {
    if (hasClass(el, className)) {
        removeClass(el, className);
    } else {
        addClass(el, className);
    }
}

export function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}


export function one(el, type, fn) {
    function handler(event) {
        el.removeEventListener(type, handler);
        fn(event);
    }
    el.addEventListener(type, handler);
}
export default {
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    findAncestor,
    one,
}
