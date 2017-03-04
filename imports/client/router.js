import { Router } from 'meteor/akryum:vue-router2';
import Toolbar from '/imports/client/views/templates/toolbar/Toolbar.vue';
import Navigation from '/imports/client/views/templates/navigation/Navigation.vue';
import Index from '/imports/client/views/public/Index.vue';
import Lists from '/imports/client/views/public/components/Lists.vue';
import SelectionControl from '/imports/client/views/public/components/SelectionControl.vue';
import Accordions from '/imports/client/views/public/components/Accordions.vue';
import ComponentCards from '/imports/client/views/public/components/Card.vue';
import ComponentButton from '/imports/client/views/public/components/Buttons.vue';
import ComponentTooltips from '/imports/client/views/public/components/Tooltips.vue';
import ComponentSnackbar from '/imports/client/views/public/components/Snackbar.vue';
import ComponentConfirmation from '/imports/client/views/public/components/Confirmation.vue';
import ComponentMenu from '/imports/client/views/public/components/Menu.vue';

Router.configure(router => {
    router.addRoutes([{
        path: "/",
        name: "Index",
        meta: { fixToolbar: true, pageTitle: "Dashboard" },
        components: {
            default: Index,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    }, {
        path: "/components/lists",
        name: "Lists",
        meta: { fixToolbar: true, pageTitle: "Lists" },
        components: {
            default: Lists,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    }, {
        path: "/components/selection-control",
        name: "SelectionCOntrol",
        meta: { fixToolbar: true, pageTitle: "Selection Control" },
        components: {
            default: SelectionControl,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    }, {
        path: "/components/accordion",
        name: "Accordions",
        meta: { fixToolbar: true, pageTitle: "Expansion Panels" },
        components: {
            default: Accordions,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    }, {
        path: "/components/cards",
        name: "Cards",
        meta: { fixToolbar: true, pageTitle: "Cards" },
        components: {
            default: ComponentCards,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    }, {
        path: "/components/buttons",
        name: "Buttons",
        meta: { fixToolbar: true, pageTitle: "Buttons" },
        components: {
            default: ComponentButton,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    }, {
        path: "/components/tooltips",
        name: "Tooltips",
        meta: { fixToolbar: true, pageTitle: "Tooltips" },
        components: {
            default: ComponentTooltips,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    },  {
        path: "/components/snackbar",
        name: "Snackbar",
        meta: { fixToolbar: true, pageTitle: "Snackbar" },
        components: {
            default: ComponentSnackbar,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    },{
        path: "/components/confirmation",
        name: "Confirmation",
        meta: { fixToolbar: true, pageTitle: "Confirmation" },
        components: {
            default: ComponentConfirmation,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    },{
        path: "/components/menu",
        name: "Menu",
        meta: { fixToolbar: true, pageTitle: "Menu" },
        components: {
            default: ComponentMenu,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    },]);
});