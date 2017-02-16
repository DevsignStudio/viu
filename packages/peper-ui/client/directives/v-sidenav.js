import { Vue } from 'meteor/akryum:vue';
import {Router} from 'meteor/akryum:vue-router2';

Vue.directive('sidenav', {
    bind: function(el, binding, vnode) {
        let exp = binding.value;
        let arg = binding.arg;
        let $el = $(el);

        if (exp === undefined) {
            exp = ".peper-side-navigation";
        }
        $(document).ready(function() {
            window.setTimeout(function(){
                let $sideOverlay = $(".peper-side-navigation-overlay");
                // let $overlay = $modalContainer.children('.modal-overlay');
                // let $form = $(exp).find("form");
                $sideOverlay.unbind("click.side-nav");
                Router.configure(router => {
                    router.beforeEach(function(transition) {
                        if (!$sideOverlay.hasClass("active")) {
                            transition.next();
                            return;
                        }
                        $sideOverlay.removeClass('active');
                        var $exp = $(exp);
                        $exp.removeClass('active');
                        transition.next();
                        $exp.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                        });

                    })
                });

                $sideOverlay.unbind(arg+ ".side-nav");
                $el.on(arg + '.side-nav', function() {
                    var $exp = $(exp);

                    $sideOverlay.addClass('active');
                    $exp.addClass('active');
                });
                $sideOverlay.unbind("click.side-nav-overlay");
                $sideOverlay.on("click", function() {
                    var $exp = $(exp);
                    $sideOverlay.removeClass('active');
                    $exp.removeClass('active');
                })
            }, 500);
        });

    }
});
