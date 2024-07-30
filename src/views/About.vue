<script>
    export default{

    }
</script>

<template>
    <div class="about">
        <div class="container">
            <p class="title mt">О нас</p>
            <div class="about-items">
                <div class="about-img">
                    <img src="../assets/images/about/about.png" alt="О нас">
                </div>
                <div class="about-text">
                    <p><span>CARGO 892</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ut consequatur quia, dicta adipisci aut rerum animi sit nam non magnam eaque temporibus. Ab obcaecati maxime nesciunt ratione nobis, et ex quibusdam id placeat totam dicta harum rerum eaque porro asperiores, ullam reiciendis ipsa inventore! Voluptates deleniti inventore quis possimus!</p>
                    <div class="about-contacts">
                        <a href="https://yandex.ru/maps/213/moscow/house/mkad_19_y_kilometr_vl20s1/Z04YcQ9jS00CQFtvfXpzcHRlZg==/?ll=37.783308%2C55.621933&z=17" target="_blank" class="about-contact-item">
                            <img src="../assets/images/about/pointicon.png" alt="">
                            <p>Москва, «Южные ворота», МКАД, 19-ый километр, вл20с1</p>
                        </a>
                        <a href="tel:+7(999)999-99-99" target="_blank" class="about-contact-item">
                            <img src="../assets/images/about/phoneicon.png" alt="">
                            <p>+7 (999) 999-99-99</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

    .about-items{
        margin-top: 60px;
        margin-bottom: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
    }

    .about-text{
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .about-text p{
        font-size: 20px;
        line-height: 180%;
    }

    span{
        font-size: 32px;
        font-weight: 700;
        position: relative;
    }

    span::after{
        content: "";
        position: absolute;
        left: 0;
        top: 35px;
        width: 170px;
        height: 4px;
        background-color: #CA0100;
    }

    .about-img img{
        width: 500px;
        border: 8px solid #CA0100;
    }

    .about-contacts{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .about-contact-item{
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
    }

    .about-contact-item img{
        width: 30px;
    }

    @media screen and (max-width: 480px){
        .about-items{
            margin-top: 40px;
            flex-direction: column;
            gap: 20px;
        }

        .about-img img{
            width: 300px;
        }

        span{
            font-size: 20px;
        }

        span::after{
            top: 23px;
            width: 105px;
            height: 6px;
        }

        .about-text p{
            font-size: 16px;
        }
    }
    
</style>