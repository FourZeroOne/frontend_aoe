<template>
    <div class="container">
        <div class="col-12">
            <h1 class="header">Mental Health & E-Sport</h1>
            <p class="text">
                Mental Health Probleme rücken immer mehr in den Fokus der Gesellschaft. Auch im E-Sport ist dieses Thema aktuell viel
                diskutiert. Hierbei sprechen viele sogar von einem der wichtigsten Aspekte im E-Sport. Im Zeichen des „Mental Health
                Awareness Month“ sprechen wir an, was es für Probleme bezüglich Mental Health im E-Sport gibt, wie man damit umgehen
                kann und wie diese Probleme verhindert werden können. Hierbei sprechen wir mit unseren Gästen über ihre Erfahrungen zu
                diesem Thema und tauchen tiefer in den E-Sport im Spiel League of Legends ein.
            </p>
            <h2 class="subheader" style="text-align: left;">Unser Stream zum Thema:</h2>
            <p class="text" style="margin-top: 25px;">
                Frauen im Gaming: 05.06.2021: - 19Uhr, Moderator: Raul "Edgefox" Mendieta Olivares
            </p>
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
    margin-top: 25px;
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
    margin-top: 50px;
    font-size: 18px;
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
