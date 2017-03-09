import Toolbar from '/imports/client/views/templates/toolbar/Toolbar.vue';
import ToolbarNoBackground from '/imports/client/views/templates/toolbar/ToolbarNoBackground.vue';
import IndexNavigation from '/imports/client/views/templates/navigation/IndexNavigation.vue';
import GlobalNavigation from '/imports/client/views/templates/navigation/GlobalNavigation.vue';
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
import IntroSliders1 from '/imports/client/views/public/layouts/IntroSliders1';

export default [{
    path: "/",
    name: "Index",
    meta: { fixToolbar: true, pageTitle: "Viu Doc" },
    components: {
        default: Index,
        toolbar: Toolbar,
        navigation: IndexNavigation,
    }
}, {
    path: "/components/lists",
    name: "Lists",
    meta: { fixToolbar: true, pageTitle: "Lists" },
    components: {
        default: Lists,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/components/selection-control",
    name: "SelectionCOntrol",
    meta: { fixToolbar: true, pageTitle: "Selection Control" },
    components: {
        default: SelectionControl,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/components/accordion",
    name: "Accordions",
    meta: { fixToolbar: true, pageTitle: "Expansion Panels" },
    components: {
        default: Accordions,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/components/cards",
    name: "Cards",
    meta: { fixToolbar: true, pageTitle: "Cards" },
    components: {
        default: ComponentCards,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/components/buttons",
    name: "Buttons",
    meta: { fixToolbar: true, pageTitle: "Buttons" },
    components: {
        default: ComponentButton,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/components/tooltips",
    name: "Tooltips",
    meta: { fixToolbar: true, pageTitle: "Tooltips" },
    components: {
        default: ComponentTooltips,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/components/snackbar",
    name: "Snackbar",
    meta: { fixToolbar: true, pageTitle: "Snackbar" },
    components: {
        default: ComponentSnackbar,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/components/confirmation",
    name: "Confirmation",
    meta: { fixToolbar: true, pageTitle: "Confirmation" },
    components: {
        default: ComponentConfirmation,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/components/menu",
    name: "Menu",
    meta: { fixToolbar: true, pageTitle: "Menu" },
    components: {
        default: ComponentMenu,
        toolbar: Toolbar,
        navigation: GlobalNavigation,
    }
}, {
    path: "/layouts/intro-sliders-1",
    name: "Slider",
    meta: { fixToolbar: true, pageTitle: "Slider" },
    components: {
        default: IntroSliders1,
        toolbar: ToolbarNoBackground,
        navigation: IndexNavigation,
    }
}, ];