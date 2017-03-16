import Toolbar from '/imports/client/views/templates/toolbar/Toolbar.vue';
import IndexNavigation from '/imports/client/views/templates/navigation/IndexNavigation.vue';
import XmiParser from "/imports/client/views/public/tools/XMIParser.vue";

let $root = "/tools";

export default [{
    path: `${$root}/xmi-parser`,
    name: "XMIParser",
    meta: { fixToolbar: true, pageTitle: "XMIParser" },
    components: {
        default: XmiParser,
        toolbar: Toolbar,
        navigation: IndexNavigation,
    }
},]
