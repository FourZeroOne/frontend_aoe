<template>
    <footer class="footer">
        <div class="container">
            <router-link to="/"><a>Universität Bayreuth - Area of Education</a></router-link>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
    .footer {
        height: 50px;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        background-color: #009260;
        box-shadow: 0px 0px 20px -2px gray;
    }
    a {
        margin: 15px;
        transition: ease-in-out .3s;
        font-weight: 550 !important;
        color: white !important;
        text-decoration: none !important;
    }
    a:hover {
        cursor: pointer;
        color: #2E2E3A !important;
    }
</style>
