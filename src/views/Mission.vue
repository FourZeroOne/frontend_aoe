<template>
    <div class="container">
        <div class="col-12">
            <h1 class="header">Über uns</h1>
            <p class="text-flow">
                Area of Education (kurz AoE) ist eine Reihe von LiveStreams auf Twitch, bei dem wir über
                Probleme und aktuelle Themen, in und um den Gaming-Bereich sprechen. Hierbei wollen wir -
                drei Studierende der Universität Bayreuth - nicht nur aufklärend und lehrreich, sondern
                auch unterhaltsam sein!
            </p>
            <p class="text-flow">
                Über drei Wochen verteilt wollen wir über folgende Themen berichten:
                <ul class="eventlist">
                    <li>
                        <span class="text-highlighted">Barrierefreiheit im Gaming</span> (29.05.2021, 19Uhr), Moderator: Alex Sühring
                    </li>
                    <li>
                        <span class="text-highlighted">Frauen im Gaming</span> (05.06.2021, 19Uhr), Moderator: Raul Mendieta Olivares
                    </li>
                    <li>
                        <span class="text-highlighted">Mental Health im E-Sport</span> (12.06.2021, 19Uhr): Nils Braxmeier
                    </li>
                </ul>
            </p>
            <p class="text-flow">
                Diese Themen haben wir gewählt, da sie in der Gaming-Welt dauerhaft angesprochen werden und darüber diskutiert wird. Jeder von uns hat sich mit mindestens einem der Themen schon intensiv auseinandergesetzt oder ist selbst davon betroffen. Deshalb ist es für uns auch eine Herzensangelegenheit, dieses Abschlussprojekt im Zuge unseres Studiums der Medienwissenschaft und Medienpraxis umzusetzen.
            </p>
        </div>
    </div>
</template>

<script>
export default {
};
</script>
<style>
.text-flow {
    text-align: start;
    font-size: 18px;
    margin-bottom: 35px;
}
.text-highlighted {
    font-weight: bold;
    color: #009260;
}
.eventlist li {
    font-size: 18px;
    margin-bottom: 10px;
}
.eventlist li:first-of-type {
    margin-top: 10px;
}
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
