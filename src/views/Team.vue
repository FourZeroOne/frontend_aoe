<template>
    <div class="container">
        <div class="col-12">
            <h1 class="header">Das sind wir</h1>
            <div class="row profile">
                <div class="col-md-3">
                    <div class="container_image">
                        <div class="profile_image" id="img_raul"></div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="profile-name">
                        Raul Mendieta Olivares: Frauen im Gaming
                    </div>
                    <div class="profile-text">
                        Hi, ich bin Raul, 25 Jahre alt und studiere Medienwissenschaft und Medienpraxis an der Uni Bayreuth.
                        Nerdige Hobbys habe ich zuhauf, aber Videospiele sind eigentlich schon mein ganzes Leben mit dabei.
                        An Genres spiele ich da fast alles sehr gern. Am meisten Spaß machen mir aber Character Action Games á la
                        Devil May Cry oder Fighting Games wie Street Fighter. Ab und zu schreibe ich auch für das Dispositiv, den
                        Medienwissenschafts-Blog der Uni Bayreuth.<br/>
                        Das Thema Frauen im Gaming habe ich mir ausgesucht, da ich aus einer männlichen Perspektive die Entwicklung
                        näher kennen lernen will und so sicher auch neue Erfahrungen sammeln kann.
                    </div>
                </div>
            </div>
            <div class="row profile">
                <div class="col-md-3">
                    <div class="container_image">
                        <div class="profile_image" style="background-image: url('https://esport.uni-bayreuth.de/wp-content/uploads/2020/06/2Nils-150x150.png';"></div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="profile-name">
                        Nils Braxmeier: Mental Health im E-Sport
                    </div>
                    <div class="profile-text">
                        Hola, ich bin Nils, bin 22 Jahre alt und studiere Medienwissenschaft an der Uni Bayreuth,
                        komme ursprünglich aus dem Vogtland und liebe Games. <br/>
                        Vor allem Esporttitel sind bei mir hoch angesehen, dazu gehören zum Beispiel League of Legends, CSGO oder
                        Valorant aber auch viele andere. Die meiste Zeit findet man mich bei LoL,
                        ich spielte dort seit dem Beginn meines Studiums in der Uniliga, wechselte zwischendurch auch
                        zum Coaching. Jetzt spiele ich wieder Uniliga und bin in der Orga des Esport UBT beteiligt.
                    </div>
                </div>
            </div>
            <div class="row profile">
                <div class="col-md-3">
                    <div class="container_image">
                        <div class="profile_image" style="background-image: url('https://esport.uni-bayreuth.de/wp-content/uploads/2021/03/Bewerbungsfoto_2020_Mai-1-150x150.png';"></div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="profile-name">
                        Kha Anh Thai: Barrierefreiheit im Gaming
                    </div>
                    <div class="profile-text">
                        Hi, ich bin Kha Anh, 22 Jahre alt und studiere Medienwissenschaft und Medienpraxis an der Universität Bayreuth.
                        In meiner Freizeit findet man mich unter den IGN "smol" meistens bei Valorant. Mein Thema "Barrierefreiheit
                        im Gaming" liegt mir besonders am Herzen, da Videospiele generell eine große Rolle in meinem Leben darstellen
                        und ich finde, dass jede*r die Möglichkeit haben sollte an dieser wundervollen Gaming-Welt teilhaben zu können!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>
<style>
#img_raul {
    background-image: url('../assets/raul.jpg');
    background-size: cover;
}
.profile {
    margin-bottom: 75px;
}
.header {
    margin-bottom: 50px;
}
.profile-name {
    font-weight: 550;
    margin-bottom: 15px;
    font-size: 22px;
}
.container_image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.profile_image {
    width: 150px;
    height: 150px;
    background-size: contain;
    border-radius: 50%;
    margin-bottom: 15px;
}
</style>
