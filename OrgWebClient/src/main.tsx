import {createInertiaApp} from '@inertiajs/react'
import {createRoot} from 'react-dom/client'
import {StrictMode} from "react";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {InertiaProgress} from "@inertiajs/progress";
import Layout from "./components/shared/Layout.tsx";
import "@/site.css";

const appName = "InertiaApp";

createInertiaApp({
    title: (title) => title ? `${appName} - ${title}` : `${appName}`,

    resolve: async (name) => {
        const component: any = await resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob("./pages/**/*.tsx")
        );
        console.log("@component : ", component);
        component.default.layout = 
            component.default.layout || 
            ((page: any) => (<Layout children={page}/>))
        return component
    },

    setup: ({el, App, props}) => {
        const root = createRoot(el);
        // console.log("rendering on : ", root);
        // console.log("  - app : ", App);
        // console.log("  - props : ", props);
        root.render(
            <StrictMode>
                {/*<ThemeProvider>*/}
                <App {...props} />
                {/*</ThemeProvider>*/}
            </StrictMode>
        )
    },
}).then(() => {
    console.log("Inertia App Rendered!");
});


InertiaProgress.init({
    color: "#d92",
    delay: 50,
    includeCSS: true,
    showSpinner: true,
})

