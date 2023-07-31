// в шаблоне реализована логика подчеркивания ссылки на которой находится пользователем
// его выбор зависит от передаваемого атрибута active-page
// в links списке находятся все списки которые будут отрисованы


const template = `
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"><h2>МФСОО <em>Легенда</em></h2></a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarResponsive">
          
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-for = "(item , index) in links">
                    <a class="nav-link" 
                        :class = "{active: isActiveIndex(index)}" 
                        :href="item.src"
                    >
                        {{item.title}}
                    </a>
                </li> 
            </ul>
          </div>

        </div>
      </nav>
    </header>
`

export default {
    template: template,
    props: ['activePage'],
    data() {
        return {
            links:[
                {
                    src: '/index.html',
                    title: 'Главная'
                },
                {
                    src: '/products.html',
                    title: 'Занятия'
                },
                {
                    src: '/about.html',
                    title: 'Центры'
                },
                {
                    src: '/contact.html',
                    title: 'Статьи'
                },
                {
                    src: '/contact.html',
                    title: 'Контакты'
                }
            ]
        }
    },
    computed: {
        activeLinkIndex(){
            return this.links.findIndex(item => item.title == this.activePage)
        }
    },
    methods: {
        isActiveIndex(index){
            return index == this.activeLinkIndex
        }
    },
    
}