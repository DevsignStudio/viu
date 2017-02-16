Vue.directive('move-dom', {
    bind: function(el, binding) {
        var me = el;
        var container = binding.value !== true ? document.body : document.body.querySelector(binding.value);
        console.log(container);
        // make an anchor
        var anchor = Vue.util.createAnchor('v-move-dom');
        // put the anchor to container
        container.appendChild(anchor);

        // Initial new fragment
        var newFrag = new Vue.FragmentFactory(binding.vNode, el);
        // Create a new fragment and copy All data VM instance including event, ect.
        me.frag = newFrag.create(me._host, me._scope, me._frag);

        // before() functions from Vue Util dom which is included in fragment.js
        // to insert the fragment before the anchor
        me.frag.before(anchor);
    },

    unbind: function() {
        // Remove the fragment
        this.frag.remove();
    }

});