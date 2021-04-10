<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <router-link to="/">
            <a class="navbar-brand" href="#">
                Area of <br/> Education
            </a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav justify-content-between w-100">
                <li class="nav-item active"><router-link to="/"><a class="nav-link" href="#">Start</a></router-link></li>
                <li class="nav-item dropdown hide-mobile">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Themen</a>
                    <ul class="dropdown-menu dropdown-desktop">
                        <li><router-link to="/themen/esport"><a class="dropdown-item" href="#">E-Sport & Mental-Health</a></router-link></li>
                        <li><router-link to="/themen/barrierefreiheit"><a class="dropdown-item" href="#">Barrierefreiheit im Gaming</a></router-link></li>
                        <li><router-link to="/themen/frauen-im-gaming"><a class="dropdown-item" href="#">Frauen im Gaming</a></router-link></li>
                        <li><router-link to="/themen/serious-games"><a class="dropdown-item" href="#">Serious Games</a></router-link></li>
                    </ul>
                </li>
                <li class="nav-item dropdown hide-mobile">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Über uns</a>
                    <ul class="dropdown-menu dropdown-desktop">
                        <li><router-link to="/mission"><a class="dropdown-item" href="#">Mission</a></router-link></li>
                        <li><router-link to="/team"><a class="dropdown-item" href="#">Team</a></router-link></li>
                    </ul>
                </li>
                <li class="nav-item dropdown hide-desktop">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Über uns
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link to="/mission"><a class="dropdown-item" href="#">Mission</a></router-link>
                        <router-link to="/team"><a class="dropdown-item" href="#">Team</a></router-link>
                    </div>
                </li>
                <li class="nav-item dropdown hide-desktop">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Themen
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link to="/themen/esport"><a class="dropdown-item" href="#">E-Sport & Mental-Health</a></router-link>
                        <router-link to="/themen/barrierefreiheit"><a class="dropdown-item" href="#">Barrierefreiheit im Gaming</a></router-link>
                        <router-link to="/themen/frauen-im-gaming"><a class="dropdown-item" href="#">Frauen im Gaming</a></router-link>
                        <router-link to="/themen/serious-games"><a class="dropdown-item" href="#">Serious Games</a></router-link>
                    </div>
                </li>
                <li class="nav-item active"><router-link to="/kontakt"><a class="nav-link" href="#">Kontakt</a></router-link></li>
            </ul>
        </div>
        <div class="form-inline my-2 my-lg-0 col-brand-icons">
            <a href="https://twitter.com/iNabber69/status/1379758396933541890/photo/1" target="blank" class="navbar-brand brand-icon"><i class="fab fa-twitch"></i></a>
            <a href="https://www.youtube.com/watch?v=zm0ijcWXxkk" target="blank" class="navbar-brand brand-icon"><i class="fab fa-youtube"></i></a>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
    a:hover {
        text-decoration: none !important;
    }
    @media all and (min-width: 992px) {
        .hide-mobile {
            display: inline-block;
        }
        .hide-desktop {
            display: none !important;
        }
        .navbar .hide-mobile .dropdown-desktop{ display: none; }
        .navbar .hide-mobile:hover .dropdown-desktop{ display: block; }
        .navbar .hide-mobile .dropdown-desktop{ margin-top:0; }
        .fa-twitch {
            margin-right: 40px;
            margin-top: 5px;
        }
        .navbar-nav {
            margin: 0 15%;
        }
        .nav-link {
            color: white !important;
            font-weight: bold;
            font-size: 24px;
        }
        .fab {
            font-size: 60px;
        }
        nav {
            width: 100%;
        }
        .navbar-brand {
            text-transform: uppercase;
            color: white;
            font-weight: 800;
            font-size: 48px;
            line-height: 60px;
        }
        a:hover {
            color: #2E2E3A !important;
        }
        .dropdown-menu {
            padding: 0 !important;
            border-radius: 0;
        }
        .dropdown-item {
            color: #009260;
            font-size: 20px !important;
            font-weight: 550;
            padding: 15px;
        }
        .dropdown-item:focus, .dropdown-item:hover {
            color: white !important;
            background-color: #009260 !important;
        }
        .dropdown-menu {
            animation: growDown 200ms ease-in-out forwards;
            transform-origin: top center;

        }
        @keyframes growDown {
            0% {
                transform: scaleY(0)
            }
            80% {
                transform: scaleY(1.1)
            }
            100% {
                transform: scaleY(1)
            }
        }
    }
    .bg-light {
        background-color: #009260 !important;
        color: white !important;
        box-shadow: 0 4px 4px -3px gray;
    }
    * {
        transition: .3s;
    }
    @media all and (max-width: 991px) {
        .dropdown-menu, .dropdown-toggle, .nav-link {
            background: transparent;
            border: none;
            color: white !important;
            margin: 0;
            font-size: 18px;
            font-weight: 550;
        }
        .dropdown-item:hover, .dropdown-item:active, .dropdown-item:focus {
            background-color: transparent !important;
            text-decoration: none;
        }
        .dropdown-item {
            color: white;
            font-weight: 550;
        }
        .hide-desktop {
            display: inline-block;
        }
        .hide-mobile {
            display: none;
        }
        .navbar-brand {
            text-transform: uppercase;
            color: white;
            font-weight: 800;
            font-size: 30px;
            line-height: 36px;
        }
        .col-brand-icons {
            width: 100%;
        }
        .brand-icon {
            width: 50%;
            display: inline-block;
            margin: 0 !important;
        }
        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
        }
        .navbar-light .navbar-toggler {
            border: none;
        }
        .fab {
            margin: 0 !important;
            text-align: center;
            display: block;
            position: relative;
        }
    }
</style>
