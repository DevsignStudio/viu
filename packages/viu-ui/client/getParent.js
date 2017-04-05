import Helper from "./plugin/class.js";

let getParent = function(className, t = false) {
    let parent = this.$parent;
    if (t) {
        parent = t.$parent;
    }
    if (Helper.hasClass(parent.$el, className)) {
        this.val = parent;
        return;
    } 

    getParent(className, parent);
};
export default getParent;