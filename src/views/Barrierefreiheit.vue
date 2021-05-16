<template>
    <div class="container">
        <div class="col-12">
            <h1 class="header">Barrierefreiheit im Gaming</h1>
            <p class="text">
                Computer- und Videospiele sind heute ein wichtiger Bestandteil des soziokulturellen Lebens und gehören zum
                Alltag dazu. Die Wenigstens bedenken dabei, dass Menschen mit einer Behinderung in diesem Bereich an der Gesellschaft
                aufgrund fehlender Barrierefreiheit in Computerspielen oftmals nicht teilhaben können.<br/>
                In Deutschland allein leben über zehn Millionen Menschen mit anerkannten Behinderungen. Die oft hohen Anforderungen
                an die Fähigkeiten und Sinneswahrnehmungen bei Computerspielen können die Nutzung für viele Menschen erschweren oder
                unmöglich machen. Für Menschen mit einer visuellen, auditiven, kognitiven, motorischen und/oder sprachlichen
                Einschränkung sind die Hürden oft noch viel größer.<br/>
                Dieser Stream zum Thema Barrierefreiheit bei Computerspielen soll auf die genannten Aspekte aufmerksam machen und
                die Zuschauer durch Lösungsvorschläge und Aufklärung zum Handeln zu bewegen.
            </p>
            <h2 class="subheader" style="text-align: left;">Unser Stream zum Thema:</h2>
            <p class="text" style="margin-top: 25px;">
                Barrierefreiheit im Gaming: 29.05.2021 - 19:00 Uhr , Moderator: Alexander "Windy" Sühring
            </p>
            <p class="text">
                Falls Du dich weiter über das Thema informieren möchtest findest Du hier eine Liste von Artikeln,
                wissenschaftlichen Texten und Organisationen, die wir für unsere Recherche genutzt haben oder besonders
                interessant finden:
            </p>
            <ul>
                <li>
                    <a class="info-link" href="https://ablegamers.org/" target="_blank">https://ablegamers.org/</a>
                </li>
                <li>
                    <a class="info-link" href="http://gameaccessibilityguidelines.com/" target="_blank">http://gameaccessibilityguidelines.com/</a>
                </li>
                <li>
                    <a class="info-link" href="https://accessible.games/accessible-player-experiences/" target="_blank">https://accessible.games/accessible-player-experiences/</a>
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
    border: none !important
}
.iframe_container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: none !important
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
