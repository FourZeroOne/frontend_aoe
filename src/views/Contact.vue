<template>
    <div class="container" style="padding-top: 50px;">
        <div class="col-12">
            <div class="row">
                <div class="col-md-6">

                </div>
                <div class="col-md-6">
                    <h2>Kontakt</h2>
                    <p>Email-Adresse: <a class="info-link" href="mailto:info@website.com">info@website.com</a></p>
                    <form>
                        <div class="form-group">
                            <label for="inputName">Namen eingeben</label>
                            <input type="text" class="form-control" id="inputName">
                        </div>
                        <div class="form-group">
                            <label for="inputMail">E-Mail-Adresse eingeben</label>
                            <input type="email" class="form-control" id="inputMail">
                        </div>
                        <div class="form-group">
                            <label for="inputSubject">Betreff eingeben</label>
                            <input type="text" class="form-control" id="inputSubject">
                        </div>
                        <div class="form-group">
                            <label for="inputMessage">Betreff eingeben</label>
                            <textarea type="text" class="form-control" id="inputSubject" rows="4"></textarea>
                        </div>
                    </form>
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
input:focus, textarea:focus {
    border-color:#009260 !important;
    box-shadow: none !important;
}
form {
    margin-top: 50px;
}
.text-wrapper {
    width: 100%;
}
.profile_info {
    width: 100%;
    height: 100%;
    background-color: rgba(125, 125, 125, 0.7);
    opacity: 0;
    transition: ease-in-out .5s;
    display: flex;
    align-items: center;
    border-radius: 50%;
}
.profile_content {
    font-size: 34px;
}
.profile_name {
    font-size: 44px;
    text-transform: uppercase;
    font-weight: 550;
}
.container_profile {
    margin-top: 25px;
}
.container_img {
    width: 300px;
    height: 300px;
    background-color:#009260;
    display: block;
    margin: 0 auto;
    transition: .3s;
    text-align: center;
    border-radius: 50%;
}
.container_img:hover {
    cursor: pointer;
}
.container_img:hover .profile_info {
    opacity: 1;
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
