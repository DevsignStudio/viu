import { Router } from 'meteor/akryum:vue-router2';
import Toolbar from '/imports/client/views/templates/toolbar/Toolbar.vue';
import Navigation from '/imports/client/views/templates/navigation/Navigation.vue';
import Index from '/imports/client/views/public/Index.vue';
import Lists from '/imports/client/views/public/components/Lists.vue';
import SelectionControl from '/imports/client/views/public/components/SelectionControl.vue';
import Accordions from '/imports/client/views/public/components/Accordions.vue';
import ComponentCards from '/imports/client/views/public/components/Card.vue';
import ComponentButton from '/imports/client/views/public/components/Buttons.vue';

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
    }, ]);
});