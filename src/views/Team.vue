<template>
    <div class="container">
        <div class="col-12">
            <h1 class="header">Das sind wir</h1>
            <div class="row">
                <div class="col-md-6">
                    <div class="container_profile">
                        <div class="container_img">
                            <div class="profile_info">
                                <div class="text-wrapper">
                                    <div class="profile_name">
                                        Raul
                                    </div>
                                    <div class="profile_content">
                                        Frauen im Gaming
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="container_profile">
                        <div class="container_img">
                            <div class="profile_info">
                                <div class="text-wrapper">
                                    <div class="profile_name">
                                        Anna
                                    </div>
                                    <div class="profile_content">
                                        Serious Games
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="container_profile">
                        <div class="container_img">
                            <div class="profile_info">
                                <div class="text-wrapper">
                                    <div class="profile_name">
                                        Kha Anh
                                    </div>
                                    <div class="profile_content">
                                        Barrierefreiheit im Gaming
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="container_profile">
                        <div class="container_img">
                            <div class="profile_info">
                                <div class="text-wrapper">
                                    <div class="profile_name">
                                        Nils
                                    </div>
                                    <div class="profile_content">
                                        Mental-Health & E-Sport
                                    </div>
                                </div>
                            </div>
                        </div>
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
