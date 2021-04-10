<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Sieh dir hier den aktuellsten Stream an:</h1>
                <div class="parent_twitch_stream">
                    <iframe
                        src="https://player.twitch.tv/?channel=bmkibler&parent=localhost"
                        allowfullscreen="true"
                    >
                    </iframe>
                </div>
                <h2>Der nächste Stream startet am XX.XX.XX um XX:XX</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 22px !important;
}
h2 {
    font-size: 18px !important;
    text-align: center;
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
