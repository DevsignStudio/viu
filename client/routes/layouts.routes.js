import {ToolbarNoBackground, IndexNavigation} from "/imports/client/template";
import IntroSliders1 from '/imports/client/views/public/layouts/IntroSliders1';
import RegisterLogin from '/imports/client/views/public/layouts/RegisterLogin';
let routesParent = "/layouts"

export default [{
    path: `${routesParent}/intro-sliders-1`,
    name: "Slider",
    meta: { fixToolbar: true, pageTitle: "Slider" },
    components: {
        default: IntroSliders1,
        toolbar: ToolbarNoBackground,
        navigation: IndexNavigation,
    }
},{
    path: `${routesParent}/login`,
    name: "RegisterLogin",
    meta: { fixToolbar: true, pageTitle: "" },
    components: {
        default: RegisterLogin,
        toolbar: ToolbarNoBackground,
        navigation: IndexNavigation,
    }
}]