import {GlobalNavigation, Toolbar} from "/imports/client/template";

import Lists from '/imports/client/views/public/components/Lists.vue';
import SelectionControl from '/imports/client/views/public/components/SelectionControl.vue';
import Accordions from '/imports/client/views/public/components/Accordions.vue';
import ComponentCards from '/imports/client/views/public/components/Card.vue';
import ComponentButton from '/imports/client/views/public/components/Buttons.vue';
import ComponentTooltips from '/imports/client/views/public/components/Tooltips.vue';
import ComponentSnackbar from '/imports/client/views/public/components/Snackbar.vue';
import ComponentConfirmation from '/imports/client/views/public/components/Confirmation.vue';
import ComponentMenu from '/imports/client/views/public/components/Menu.vue';
import Sliders from '/imports/client/views/public/components/Sliders.vue';
import LoadImgs  from "/imports/client/views/public/components/LoadImgs.vue";
import Modals  from "/imports/client/views/public/components/Modals.vue";
import Appbar  from "/imports/client/views/public/components/Appbar.vue";

let routesParent = "/components"

export default [{
    path: `${routesParent}/lists`,
    name: "Lists",
    meta: { fixToolbar: true, pageTitle: "Lists" },
    components: {
        default: Lists,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/selection-control`,
    name: "SelectionControl",
    meta: { fixToolbar: true, pageTitle: "Selection Control" },
    components: {
        default: SelectionControl,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/accordion`,
    name: "Accordions",
    meta: { fixToolbar: true, pageTitle: "Expansion Panels" },
    components: {
        default: Accordions,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/cards`,
    name: "Cards",
    meta: { fixToolbar: true, pageTitle: "Cards" },
    components: {
        default: ComponentCards,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/buttons`,
    name: "Buttons",
    meta: { fixToolbar: true, pageTitle: "Buttons" },
    components: {
        default: ComponentButton,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/tooltips`,
    name: "Tooltips",
    meta: { fixToolbar: true, pageTitle: "Tooltips" },
    components: {
        default: ComponentTooltips,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/snackbar`,
    name: "Snackbar",
    meta: { fixToolbar: true, pageTitle: "Snackbar" },
    components: {
        default: ComponentSnackbar,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/confirmation`,
    name: "Confirmation",
    meta: { fixToolbar: true, pageTitle: "Confirmation" },
    components: {
        default: ComponentConfirmation,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/menu`,
    name: "Menu",
    meta: { fixToolbar: true, pageTitle: "Menu" },
    components: {
        default: ComponentMenu,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: `${routesParent}/slider`,
    name: "Sliders",
    meta: { fixToolbar: true, pageTitle: "Sliders" },
    components: {
        default: Sliders,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
},{
    path: `${routesParent}/load-img`,
    name: "Load Image",
    meta: { fixToolbar: true, pageTitle: "LazyLoad Image" },
    components: {
        default: LoadImgs,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
},{
    path: `${routesParent}/modals`,
    name: "Modals",
    meta: { fixToolbar: true, pageTitle: "Modal" },
    components: {
        default: Modals,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
},{
    path: `${routesParent}/appbar`,
    name: "Appbar",
    meta: { fixToolbar: true, pageTitle: "Appbar" },
    components: {
        default: Appbar,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}]