import preloaderComponent from "./components/preloaderComponent.js"

const rootComponent = {
    components:{
        preloaderComponent
    }
}


const app = Vue.createApp(rootComponent)
app.mount('#main')