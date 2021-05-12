<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-main">
                    Wir wollen den Menschen neue Themen in und um den Gaming-Bereich nahebringen, mit denen sie sich normalerweise nicht beschäftigen und sie dadurch zum Nachdenken und Handeln anregen!
                </div>
                <h1>Sieh dir hier den aktuellsten Stream an:</h1>
                <div class="parent_twitch_stream">
                    <iframe
                        src="https://player.twitch.tv/?channel=areaofeducation&parent=areaofeducation.de"
                        allowfullscreen="true"
                    >
                    </iframe>
                </div>
                <h2>Der nächste Stream startet am 29.05.2021 um 19:00 Uhr</h2>
                <div class="text-info">
                    <span class="text-highlighted">Thema:</span> Barrierefreiheit im Gaming<br/>
                    <span class="text-highlighted">Moderator:</span> Alexander "Windy" Sühring
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.text-highlighted {
    color: #009260;
}
.text-info {
    font-size: 22px;
    margin-top: 25px;
    margin-bottom: 75px;
    color: black !important;
}
.text-main {
    margin: 50px 0;
    font-size: 26px;
    text-align: center;
}
h1, h2 {
    font-size: 24px !important;
}
.parent_twitch_stream {
    position: relative;
    margin: 10px;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}
.parent_twitch_stream iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.container {
    padding-top: 15px;
    padding-bottom: 15px;
}
</style>
