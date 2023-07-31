const template = `
    <div class="page-heading about-heading header-text">
        <div class="container">
            <div class="row">
            <div class="col-md-12">
                <div class="text-content">
                    <h4>{{subTitle}}</h4>
                    <h2>{{title}}</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
`

export default {
    template: template,
    props: ['title', 'subTitle']
}