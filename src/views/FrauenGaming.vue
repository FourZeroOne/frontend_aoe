<template>
    <div class="container">
        <div class="col-12">
            <h1 class="header">Frauen in Gaming</h1>
            <p class="text">
                In der jüngsten Mediengeschichte spielt vorurteilsfreie Repräsentation eine immer größere Rolle. Auch im noch jungen
                Medium der Videospiele gibt es eine rasante Entwicklung in dieser Hinsicht. Die Darstellung von weiblichen Charakteren
                hat sich über die Jahrzehnte sehr verändert. <br/>
                In diesem AoE-Stream wird dabei ein Blick auf die vielleicht nicht offensichtlichsten Spiele geworfen, um zur
                Diskussion zu dem Thema anzuregen. Zudem wird auch die Rolle von Gamerinnen zum Beispiel im E-Sport mit einbezogen.
                Wird man als Frau (immer noch) anders behandelt? Was für Spiele wirken „empowering“ auf Gamerinnen? Oder was macht
                einen „guten“ weiblichen Charakter überhaupt aus? Diese und mehr Fragen sollen besprochen und diskutiert werden.
            </p>
            <h2 class="subheader" style="text-align: left;">Unser Stream zum Thema:</h2>
            <p class="text" style="margin-top: 25px;">
                Frauen im Gaming: 05.06.2021: - 19:00 Uhr, Moderator: Raul "Edgefox" Mendieta Olivares
            </p>
            <div class="iframe_container" style="display: none;">
                <iframe src="https://www.youtube.com/embed/zm0ijcWXxkk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="text">
                Falls Du dich weiter über das Thema informieren möchtest findest Du hier eine Liste von Artikeln,
                wissenschaftlichen Texten und Organisationen, die wir für unsere Recherche genutzt haben oder besonders
                interessant finden:
            </p>
            <ul>
                <li>
                    <a class="info-link" href="https://esportsinsider.com/2020/08/all-women-esports-teams/" target="_blank">https://esportsinsider.com/2020/08/all-women-esports-teams/</a>
                </li>
                <li>
                    <a class="info-link" href="https://thenextweb.com/news/why-is-it-so-rare-to-have-a-woman-leading-a-game" target="_blank">https://thenextweb.com/news/why-is-it-so-rare-to-have-a-woman-leading-a-game</a>
                </li>
                <li>
                    <a class="info-link" href="https://www.diva-portal.org/smash/get/diva2:720865/FULLTEXT01.pdf" target="_blank">https://www.diva-portal.org/smash/get/diva2:720865/FULLTEXT01.pdf</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            testData: 'ASDFTES',
        }
    },
    //insert the following code for vue-meta to work
    metaInfo() {
        return {
            title: `${this.testData} - Epiloge`,
            meta: [
                { name: 'description', content: 'DESCRIPTION'},
                { property: 'og:title', content: 'TITEL'},
                { property: 'og:site_name', content: 'Epiloge'},
                { property: 'og:description', content: 'DESCRIPTION2'},
                {property: 'og:type', content: 'profile'},
            ]
        }
    },
}
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
iframe {
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
