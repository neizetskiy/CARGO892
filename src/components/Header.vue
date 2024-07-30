<script>
    export default{
        data(){
            return {
                isOpen: false
            }
        },
        methods: {
            toggleMenu() {
                this.isOpen = !this.isOpen
            }
        },
        
    }
</script>


<template>
    <div class="upheader">
        <div class="container">
            <div class="upheader-items">
                <a href="https://yandex.ru/maps/213/moscow/house/mkad_19_y_kilometr_vl20s1/Z04YcQ9jS00CQFtvfXpzcHRlZg==/?ll=37.783308%2C55.621933&z=17" target="_blank" class="uplinks">
                    <img src="../assets/images/header/point.png" alt="">
                    <p>Москва, «Южные ворота», МКАД, 19-ый километр, вл20с1</p>
                </a>
                <a href="https://yandex.ru/maps/213/moscow/house/mkad_19_y_kilometr_vl20s1/Z04YcQ9jS00CQFtvfXpzcHRlZg==/?ll=37.783308%2C55.621933&z=17" target="_blank" class="uplinks">
                    <img src="../assets/images/header/clock.png" alt="">
                    <p>Время работы: c 08:00 до 21:00</p>
                </a>
                <a href="https://t.me/@m1lrar" target="_blank" class="uplinks">
                    <img src="../assets/images/header/tg.png" alt="">
                    <p>Telegram</p>
                </a>
            </div>
        </div>
    </div>
    <header class="container">
        <div class="logo-items">
            <RouterLink to="/" class="logo"><img src="../assets/images/header/Logo.png" alt=""></RouterLink>
            <div class="line"></div>
            <p><span>10 лет</span>превосходим <br> ваши ожидания</p>
        </div>

        <nav>
            <RouterLink to="/about" class="link">О нас</RouterLink>
            <RouterLink to="/price" class="link">Прайс-лист</RouterLink>
            <RouterLink to="/#form" class="link">Оформить заявку</RouterLink>
        </nav>

        <nav>
            <a href="tel:+7(999)999-99-99" target="_blank" class="phone">
                <img src="../assets/images/header/phone.png" alt="">
                <p>+7 (999) 999-99-99</p>
            </a>
        </nav>

        <div class="burger-menu">
            <button @click="toggleMenu" class="burger-button">
                <span class="burger-icon" :class="{ 'open': isOpen }"></span>
            </button>
            <div class="menu-items" :class="{ 'open': isOpen }">
                <ul>
                    <li><RouterLink to="/about" @click="toggleMenu" class="blink">О нас</RouterLink></li>
                    <li><RouterLink to="/price" @click="toggleMenu" class="blink">Прайс-лист</RouterLink></li>
                    <li><RouterLink to="/#form" @click="toggleMenu" class="blink">Оформить заявку</RouterLink></li>
                    <li>
                        <a href="tel:+7(999)999-99-99" target="_blank" class="b-menu-link">
                            <img src="../assets/images/header/phone2.png" alt="">
                            <p>+7 (999) 999-99-99</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/@m1lrar" target="_blank" class="b-menu-link">
                            <img src="../assets/images/header/tg.png" alt="">
                            <p>Связаться с нами</p>
                        </a>
                    </li>
                    <li>
                        <div class="adress">
                            <a href="" target="_blank" class="b-menu-link">
                                <img src="../assets/images/header/point.png" alt="">
                                <p>Москва, «Южные ворота», МКАД, 19-ый километр, вл20с1</p>
                            </a>
                            <div class="b-menu-link">
                                <img src="../assets/images/header/clock.png" alt="">
                                <p>Время работы: c 08:00 до 21:00</p>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>



<style scoped>
    .upheader{
        padding: 15px 0px;
        background-color: #EFF0F0;
    
    }


    .upheader-items{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .uplinks{
        display: flex;
        gap: 7PX;
        align-items: center;
        color: #737373;
    }

    header{
        padding: 20px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav{
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .link{
        font-weight: 700;
        font-size: 18px;
    }

    .link:hover{
        color: #CA0100;
        transform: scale(1.05);
    }


    .logo img{
        width: 200px;
    }

    .logo img:hover{
        transform: scale(1.05);
    }

    .logo-items{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .logo-items p{
        font-weight: 700;
        line-height: 140%;
        color: #262626;
    }

    .logo-items span{
        background-color: #CA0100;
        color: white;
        border-radius: 22px;
        padding: 4px 8px;
        margin-right: 5px;
    }

    .line{
        width: 2px;
        height: 42px;
        background-color: #D9D9D9;
    }

    .phone{
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 20px;
        font-weight: 700;
    }

    .phone:hover{
        transform: scale(1.05);
    }

    .burger-menu{
        display: none;
        position: relative;
    }

        .burger-button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        .burger-icon {
            display: block;
            width: 25px;
            height: 4px;
            background-color: #333;
            position: relative;
            transition: background-color 0.3s ease;
            border-radius: 80px;
        }
    
        .burger-icon::before,
        .burger-icon::after {
            content: '';
            display: block;
            width: 25px;
            height: 4px;
            background-color: #333;
            position: absolute;
            transition: transform 0.3s ease, top 0.3s ease;
            border-radius: 80px;
        }
    
        .burger-icon::before {
            top: -8px;
        }
    
        .burger-icon::after {
            top: 8px;
        }
    
        .burger-icon.open {
            background-color: transparent;
        }
    
        .burger-icon.open::before {
            transform: translateY(8px) rotate(45deg);
        }
    
        .burger-icon.open::after {
            transform: translateY(-8px) rotate(-45deg);
        }
    
        .menu-items {
            position: absolute;
            top: 40px;
            right: 0vw;
            background-color: #fff;
            border: 1px solid #ccc;
            width: 300px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.3s ease;
            border-radius: 5px;
            font-weight: 700;
        }
    
        .menu-items.open {
            transform: scaleY(1);
        }
    
        .menu-items ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
    
        .menu-items li {
            padding: 20px;
            border-bottom: 1px solid #ccc;
        }
    
        .menu-items li:last-child {
            border-bottom: none;
        }
    
        .menu-items a {
            text-decoration: none;
            color: #333;
            transition: color 0.3s ease;
        }

        .b-menu-link{
            display: flex;
            align-items: center;
            gap: 10px;
        }

       .adress{
        display: flex;
        flex-direction: column;
        gap: 10px;
       }

       .blink{
        display: flex;
        padding: 5px 0px;
       }
    


    @media screen and (max-width: 480px){
        .upheader{
            display: none;
        }

        .logo img{
            width: 130px;
        }

        .logo-items p{
            display: none;
        }

        .line{
            display: none;
        }

        nav{
            display: none;
        }

        .burger-menu{
            display: block;
        }
    }
</style>