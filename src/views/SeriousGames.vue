<template>
    <div class="container">
        <div class="col-12">
            <h1 class="header">Serious Games</h1>
            <div class="iframe_container">
                <iframe src="https://www.youtube.com/embed/zm0ijcWXxkk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3 class="subheader-text">Erklärungstext</h3>
            <p class="text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
            </p>
            <h2 class="subheader">Stream-Interview mit Untertiteln</h2>
            <div class="iframe_container">
                <iframe src="https://www.youtube.com/embed/zm0ijcWXxkk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="text">
                Falls Du dich weiter über das Thema informieren möchtest findest Du hier eine Liste von Artikeln,
                wissenschaftlichen Texten und Organisationen, die wir für unsere Recherche genutzt haben oder besonders
                interessant finden:
            </p>
            <ul>
                <li>
                    <a class="info-link" href="http://www.link1.com/">Link 1</a>
                </li>
                <li>
                    <a class="info-link" href="http://www.link2.com/">Link 2</a>
                </li>
                <li>
                    <a class="info-link" href="http://www.link3.com/">Link 3</a>
                </li>
                <li>
                    <a class="info-link" href="http://www.link4.com/">Link 4</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
};
</script>
<style>
.iframe_container {
    position: relative;
    margin: 25px 0;
    padding-bottom: 56.25%;
    height: 100px;
    overflow: hidden;
}
.iframe_container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.header {
    text-align: center !important;
    font-size: 40px !important;
    color: #009260 !important;
    font-weight: 550 !important;
}
.subheader {
    text-align: center;
    font-size: 26px;
    color: #2E2E3A;
    padding-top: 50px;
    margin-bottom: 20px;
}
.subheader-text {
    font-size: 22px !important;
    padding-top: 25px;
    margin-bottom: 20px;
}
.text {
    text-align: justify;
    margin-bottom: 10px;
}
.container {
    padding-top: 15px;
    padding-bottom: 15px;
}
.info-link {
    color: #009260;
    transition: .3s;
}
.info-link:hover {
    color: black;
    text-decoration: none;;
}
</style>
