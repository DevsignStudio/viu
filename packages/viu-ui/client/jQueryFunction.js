$.propHooks.checked = {
    set: function(elem, value, name) {
        var ret = (elem[name] = value);
        $(elem).trigger("change");
        return ret;
    }
};

$.fn.isOnScreen = function() {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$.fn.waitForImages = function(callback) {
    var $img = $('img', $(this)),
        totalImg = $img.length;

    var waitImgLoad = function() {
        totalImg--;
        if (!totalImg) {
            callback();
        }
    };

    if (totalImg > 0) {
        $img.load(waitImgLoad)
            .error(waitImgLoad);
    } else {
        callback();
    }
};