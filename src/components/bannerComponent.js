const template = `
    <div class="banner header-text">
        <div class="owl-banner owl-carousel">
            <div class="banner-item" 
                v-for = "item in slides"
                :style = "{'background-image': 'url(' + item.url + ')'}"   
            >
                <div class="text-content">
                    <h4>{{item.subTitle}}</h4>
                    <h2>{{item.title}}</h2>
                </div>
            </div>
        </div>
    </div>
`

export default {
    template: template,
    data() {
        return {
            slides:[
                {
                    title: '1',
                    subTitle: '1',
                    url: '/assets/images/slide_01.jpg'
                },
                {
                    title: '2',
                    subTitle: '2',
                    url: '/assets/images/slide_02.jpg'
                },
                {
                    title: '3',
                    subTitle: '3',
                    url: '/assets/images/slide_03.jpg'
                }
            ]
        }
    },
}