import {Toolbar, IndexNavigation} from "/imports/client/template";
import XmiParser from "/imports/client/views/public/tools/XMIParser.vue";

let routesParent = "/tools";

export default [{
    path: `${routesParent}/xmi-parser`,
    name: "XMIParser",
    meta: { fixToolbar: true, pageTitle: "XMIParser" },
    components: {
        default: XmiParser,
        toolbar: Toolbar,
        navigation: IndexNavigation,
    }
},]
