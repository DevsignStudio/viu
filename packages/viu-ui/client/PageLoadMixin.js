export default {
    data() {
        return {
            ShowPages: false,
        };
    },
    mounted() {
        let self = this;
        self.$nextTick(function() {
            $(self.$el).waitForImages(function() {
                let interval = Meteor.setInterval(function() {
                    if (DDP._allSubscriptionsReady()) {
                        window.setTimeout(function() {
                            self.ShowPages = DDP._allSubscriptionsReady();
                            Meteor.clearInterval(interval);
                        }, 500);
                    }
                }, 50);
            });
        });
    }
};