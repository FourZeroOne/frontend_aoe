<template>
    <div class="container">
        <div class="col-12">
            <h1 class="header">Über uns</h1>
            <p class="text">
                Area of Education (kurz AoE) ist ein Educational Stream bei dem wir über Probleme, beziehungsweise aktuelle
                Themen, in und um den Gaming-Bereich sprechen. Hierbei wollen wir nicht nur aufklärend und lehrreich sein,
                sondern auch unterhaltsam. Über drei Wochen verteilt wollen wir über die Themen Mental Health im E-Sport, Frauen
                im Gaming und Barrierefreiheit im Gaming aufklären. Diese Themen haben wir gewählt, da sie in der Gaming-Welt
                dauerhaftangesprochen werden und darüber diskutiert wird. Jeder von uns hat sich mit mindestens einem der Themen
                schon intensiv auseinandergesetzt oder ist selbst davon betroffen. Deshalb ist es für uns auch eine
                Herzensangelegenheit, dieses Projekt umzusetzen. Falls Ihr mehr über die einzelnen Themen erfahren wollt, dann
                schaut doch gerne Mal auf den Pages der Website zu den einzelnen Themen vorbei!
            </p>
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
