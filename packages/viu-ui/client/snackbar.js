export default {
    run(message, callback = function() {}, buttonText = "OK", type = "success") {
        var $element = $('<div class="viu-snackbar"><div class="row middle-xs"><div class="col-xs"><div class="text-content"></div></div><div style="margin-left: auto;"><button class="flat-button" type="button" v-ripple></button></div></div></div>');
        var $textContent = $element.find(".text-content");
        var $button = $element.find("button");
        let self = this;
        $textContent.html(message);
        $button.html(buttonText);
        $button.addClass(type);

        this.addQueue({ el: $element, callback: callback });
    },
    addQueue(data) {
        this.queue.push(data);
        this.show();
    },
    queue: [],
    active: false,
    show() {
        let self = this;
        let timeout = null;
        if (this.queue.length !== 0 && !self.active) {
            $currentEl = this.queue[0].el;
            self.active = true;
            $("body").prepend($currentEl);
            window.setTimeout(function() {
                $currentEl.addClass("show");

                let removeFunction = () => {
                    $currentEl.removeClass("show");

                    self.active = false;
                    $currentEl.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                        $currentEl.remove();
                        self.queue.shift();
                        self.show();
                    });
                };
                timeout = window.setTimeout(function() {
                    removeFunction();
                }, 5000);

                $currentEl.find("button").one("click", function() {
                    clearTimeout(timeout);
                    self.queue[0].callback();
                    removeFunction();
                });

                $currentEl.on("mouseenter", function() {
                    clearTimeout(timeout);
                });

                $currentEl.on("mouseleave", function() {
                    timeout = window.setTimeout(function() {
                        removeFunction();
                    }, 5000);
                });
            }, 200);

        }

    }
};