<script>
    export default{

    }
</script>

<template>
    <footer>
        <div class="container">
            <div class="footer-items">
                <div class="footer-map">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Accfee1fa2cd977353ca9343590ec70134ed21bb8d4be1f84600cd26f48787c01&amp;source=constructor" width="100%" height="628" frameborder="0"></iframe>
                </div>
                <div class="footer-item">
                    <RouterLink to="/" class="f-logo">CARGO 892</RouterLink>
                    <nav>
                        <RouterLink to="/about" class="link">О нас</RouterLink>
                        <RouterLink to="/price" class="link">Прайс-лист</RouterLink>
                        <RouterLink to="/#form" class="link">Оформить заявку</RouterLink>
                    </nav>
                    <p class="tinytext">Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        padding-top: 120px;
        background-color: #1E1E1E;
        padding-bottom: 140px;
    }

    iframe{
        border-radius: 60px;
    }

    .footer-items{
        position: relative;
    }

    .footer-item{
        padding: 50px;
        background-color: #363636;
        position: absolute;
        width: 100%;
        top: 300px;
        display: flex;
        flex-direction: column;
        gap: 60px;
        align-items: start;
        border-radius: 30px 30px 0px 0px;
    }

    .f-logo{
        font-size: 64px;
        font-weight: 900;
        color: white;
    }

    .f-logo:hover{
        color: #CA0100;
    }

    nav{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .link{
        font-size: 24px;
        font-weight: 500;
        color: white;
    }

    .link:hover{
        color: #CA0100;
    }

    .tinytext{
        font-size: 14px;
        font-weight: 400;
        color: #979696;
        max-width: 613px
    }



    @media screen and (max-width: 480px){
        iframe{
            height: 240px;
            display: none;
        }

        footer{
            padding-bottom: 0px;
        }

        .footer-item{
            top: 100px;
            gap: 30px;
            position: sticky;
        }

        .f-logo{
            font-size: 24px;
        }

        .link{
            font-size: 14px;
        }

        .tinytext{
            font-size: 8px;
        }

        nav{
            gap: 10px;
        }
    }
</style>