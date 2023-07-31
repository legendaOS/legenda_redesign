import preloaderComponent from "./components/preloaderComponent.js"
import headerComponent from "./components/headerComponent.js"
import bannerComponent from "./components/bannerComponent.js"
import infoBlockComponent from "./components/infoBlockComponent.js"
import pageHeadComponent from "./components/pageHeadComponent.js"


const rootComponent = {
    components:{
        preloaderComponent,
        headerComponent,
        bannerComponent,
        infoBlockComponent,
        pageHeadComponent
    }
}


const app = Vue.createApp(rootComponent)
app.mount('#main')