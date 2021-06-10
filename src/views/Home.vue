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
                <h2 class="countdown">Der nächste Stream startet in <span class="text-highlighted">{{ countdown_days }}</span> Tagen, <span class="text-highlighted">{{ countdown_hours }}</span> Stunden, <span class="text-highlighted">{{ countdown_minutes }}</span> Minuten und <span class="text-highlighted">{{ countdown_seconds }}</span> Sekunden
                </h2>
                <div class="text-info">
                    <span class="text-highlighted">Thema:</span> Mental Health & E-Sport<br/>
                    <span class="text-highlighted">Moderator:</span> Nils "Braxe" Braxmeier
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdown_date: new Date("June 12, 2021 19:00:00").getTime(),
            countdown_days: 0,
            countdown_hours: 0,
            countdown_minutes: 0,
            countdown_seconds: 0
        }
    },
    methods: {
        calc_countdown: function() {
            const self = this
            setInterval(function() {
                // Get today's date and time
                var now = new Date().getTime();
                // Find the distance between now and the count down date
                var distance = self.countdown_date - now;
                // Time calculations for days, hours, minutes and seconds
                self.countdown_days = Math.floor(distance / (1000 * 60 * 60 * 24));
                self.countdown_hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                self.countdown_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                self.countdown_seconds = Math.floor((distance % (1000 * 60)) / 1000);
            }, 1000);
        }
    },
    created() {
        this.calc_countdown();
    }
}
</script>

<style scoped>
.countdown {
    text-align: center !important;
    border: 1px solid #009260;
    border-radius: 5px;
    padding: 10px 0;
    background-color: #00925f10;
    margin: 25px 0px;
}
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
    margin: 10px 0px;
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
