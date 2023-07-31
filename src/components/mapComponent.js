const template = `
    <div class="find-us">
        <div class="container">
            <div class="row">
            <div class="col-md-12">
                <div class="section-heading">
                    <h2>{{header}}</h2>
                </div>
            </div>
            <div class="col-md-8">
                <div id="map">
                <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="330px" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-md-4">
                <div class="left-content">
                <h4>About our office</h4>
                <p class = 'hack_pre'></p>
                
                </div>
            </div>
            </div>
        </div>
    </div>
`

export default {
    template: template,
    props: ['header', ]
}