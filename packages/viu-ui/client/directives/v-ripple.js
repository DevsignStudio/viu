import { Vue } from 'meteor/akryum:vue';

Vue.directive("ripple", {
    bind: function(el, binding, vnode) {
        let background = null;
        if(binding.value && binding.value.background) {
            background = binding.value.background;
        }

        let $el = $(el);
        let computed = function() {
            let overflow = "";
            let square = $el.outerWidth();
            let height = $el.innerWidth();
            if (square < height) {
                square = height;
            }

            $el.addClass('peper-ripple');
            $el.unbind("mousedown.ripple mouseup.ripple mouseout.ripple");
            $el.on("mousedown.ripple", function(e){
                var offset = $el.offset(),
                offsetY = (e.pageY - offset.top),
                offsetX = (e.pageX - offset.left);
                var $rippleCircle = $('<span class="ripple-circle"></span>');

                $el.addClass('clicked').append(
                    $rippleCircle.css({
                        'top' : offsetY,
                        'left' : offsetX,
                        "width" : square,
                        "height" : square,
                        "margin-top" : -(square/2),
                        "margin-left" : -(square/2),
                    })
                );

                if (!background) {
                    background = $rippleCircle.css("background-color");
                }
                overflow = $el.css("overflow");
                $el.css({
                    overflow: "hidden"
                });
                $rippleCircle.css({
                    'background' : background,
                });
            }).on('mouseup.ripple mouseout.ripple', function(e){
                $el.removeClass('clicked')
                .children(".ripple-circle").fadeOut("slow", function(){
                    $(this).remove();
                    $el.css({
                        overflow: overflow,
                    });
                });
            });
        }

        $(document).ready(function() {
            window.setTimeout(function(){
                computed();
            }, 500);
        });
        $(window).on('popstate', function (e) {
            var state = e.originalEvent.state;
            if (state) {
                window.setTimeout(function(){
                    computed();
                }, 500);
            }
        });
    }
})
