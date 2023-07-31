const template = `
    <ul class="social-icons" v-if = "seenLinks">
        <li v-for = "item in social">
            <a :href="item.link" >
                <i class="fa" >
                    <img :src = 'item.icon'>
                </i>
            </a>
        </li>
    </ul>
`

export default {
    template: template,
    props: ['seenLinks'],
    data() {
        return {
            social:[
                {
                    link: '',
                    icon: 'assets/images/tg-icon.png'
                },
                {
                    link: '',
                    icon: 'assets/images/vk-icon.png'
                },
                {
                    link: '',
                    icon: 'assets/images/ws-icon.png'
                },
                {
                    link: '',
                    icon: 'assets/images/mail-icon.png'
                }
            ]
        }
    }
}