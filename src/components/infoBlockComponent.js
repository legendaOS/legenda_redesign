const template = `
    <div class="best-features about-features">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>{{head}}</h2>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="right-image">
                    <img :src="image" alt="">
                </div>
            </div>
            <div class="col-md-6">
                <div class="left-content">
                    <h4>
                        {{title}}
                    </h4>
                    <p class = 'hack_pre'>
                        {{text}}
                    </p>
                    
                    </linker-component>
                </div>
            </div>
        </div>
    </div>
        </div>
`

import linkerComponent from "./subComponents/linkerComponent.js"

export default{
    template: template,
    props:['title', 'text','head', 'image'],
    components: {
        linkerComponent
    }
}