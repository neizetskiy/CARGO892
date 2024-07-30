<script>
    export default{
        
    }
</script>

<template>
    <div class="board">
        <div class="container">
            <div class="board-items">
                <img src="../assets/images/banner/cargo.png" alt="Банер">
                <h2>Доставка товаров из Китая в Россию</h2>
                <RouterLink to="/#form" class="button bannerbtn">ОСТАВИТЬ ЗАЯВКУ</RouterLink>
            </div>
        </div>
    </div>


    <div class="shipping mt">
        <div class="container">
            <p class="title">Способы доставки</p>
            <div class="shipping-items">
                <div class="shipping-item">
                    <img src="../assets/images/shipping/air.png" alt="Авиа-экспресс">
                    <h3>АВИА-ЭКСПРЕСС</h3>
                    <p>Самая быстрая и надежная доставка от 3 до 5 дней. <br> (Минимальный вес …)</p>
                    <RouterLink to="/#form" class="button shippingbtn">ОСТАВИТЬ ЗАЯВКУ</RouterLink>
                </div>
                <div class="shipping-item">
                    <img src="../assets/images/shipping/truck-express.png" alt="Авто-экспресс">
                    <h3>АВТО-ЭКСПРЕСС</h3>
                    <p>Оптимальная доставка с сроком от 10 до 15 дней. <br> (Минимальный вес …)</p>
                    <RouterLink to="/#form" class="button shippingbtn">ОСТАВИТЬ ЗАЯВКУ</RouterLink>
                </div>
                <div class="shipping-item">
                    <img src="../assets/images/shipping/truck.png" alt="Авто-доставка">
                    <h3>АВТО-ДОСТАВКА</h3>
                    <p>Стандартная доставка с сроком до 28 дней. <br> (Минимальный вес …)</p>
                    <RouterLink to="/#form" class="button shippingbtn">ОСТАВИТЬ ЗАЯВКУ</RouterLink>
                </div>
            </div>
        </div>
    </div>

    <div class="package mt">
        <div class="container">
            <p class="title">Упаковка</p>
            <div class="shipping-items">
                <div class="shipping-item">
                    <img src="../assets/images/package/default.png" alt="Авиа-экспресс">
                    <h3>СТАНДАРТНАЯ УПАКОВКА</h3>
                    <p>Самая стандартная упаковка, но все равно надежная!</p>
                    <RouterLink to="/#form" class="button shippingbtn">ОСТАВИТЬ ЗАЯВКУ</RouterLink>
                </div>
                <div class="shipping-item">
                    <img src="../assets/images/package/obreshetka.png" alt="Авто-экспресс">
                    <h3>ОБРЕШЕТКА</h3>
                    <p>Товар упаковывается дополнительно в защитный каркас.</p>
                    <RouterLink to="/#form" class="button shippingbtn">ОСТАВИТЬ ЗАЯВКУ</RouterLink>
                </div>
                <div class="shipping-item">
                    <img src="../assets/images/package/pallet.png" alt="Авто-доставка">
                    <h3>ПАЛЛЕТ</h3>
                    <p>Паллет обеспечит повышенную надежность упаковки товара</p>
                    <RouterLink to="/#form" class="button shippingbtn">ОСТАВИТЬ ЗАЯВКУ</RouterLink>
                </div>
            </div>
        </div>
    </div>

    <div class="benefits mt">
        <div class="container">
            <p class="title white">Преимущества компании</p>
            <div class="benefits-items">
                <div class="benefit-top">
                    <div class="benefit">
                        <img class="icon" src="../assets/images/benefits/guarante.png" alt="Гарантия">
                        <p>Гарантия доставки</p>
                    </div>
                </div>
                <div class="benefits-edge">
                    <div class="benefit">
                        <img class="icon" src="../assets/images/benefits/cart.png" alt="Помощь">
                        <p>Помощь с закупкой товаров <br> с самых известных <br> китайский сайтов </p>
                    </div>
                    <div class="benefit-rev">
                        <p>Проверим качество <br> товаров перед <br> отправкой</p>
                        <img class="icon" src="../assets/images/benefits/quality.png" alt="Качество">
                    </div>
                </div>
                <div class="benefits-middle">
                    <div class="benefit">
                        <img class="icon" src="../assets/images/benefits/percent.png" alt="Без комиссии">
                        <p>Без комиссий и % <br> за выкуп</p>
                    </div>
                    <img class="benefit-truck" src="../assets/images/benefits/benefit-truck.png" alt="Преимущества">
                    <div class="benefit-rev">
                        <p>Консультация и <br> сопровождение <br> сделки 24/7</p>
                        <img class="icon" src="../assets/images/benefits/chat.png" alt="Консультация">
                    </div>
                </div>
                <div class="benefits-edge">
                    <div class="benefit">
                        <img class="icon" src="../assets/images/benefits/blank.png" alt="Договор">
                        <p>Заключение договора <br> с компанией</p>
                    </div>
                    <div class="benefit-rev">
                        <p>Оплата наличными, <br> переводом и <br> безналичным расчетом </p>
                        <img class="icon" src="../assets/images/benefits/payment.png" alt="Оплата">
                    </div>
                </div>
               
            </div>
        </div>
    </div>

    <div class="request" id="form">
        <div class="container">
            <p class="title request-title">ОФОРМИ ЗАЯВКУ</p>

            <div class="request-items">
                <form action="" class="request-form" method="post">
                        <input type="text" id="name" name="name" placeholder="Имя" required>
                        <input v-mask="' +7 (###) ###-##-##'"  id="phone" name="phone" placeholder="Номер телефона" required>
                        <input type="text" id="weight" name="weight" placeholder="Вес товара" required>
                        <input type="text" id="size" name="size" placeholder="Объем товара" required>
                        <input type="text" id="category" name="category" placeholder="Категория товара" required>
                        <button type="submit" class="button formbtn">ОСТАВИТЬ ЗАЯВКУ</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .board{
        background: url(../assets/images/banner/image2.png) no-repeat;
        height: 800px;
    }

    .board-items{
        padding-top: 240px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: start;
        color: white;
    }

    .board-items img{
        width: 680px;
    }

    .board-items h2{
        font-weight: 500;
        font-size: 30px;
    }

    .bannerbtn{
        font-size: 25px;
        padding: 20px 40px;
    }

    .shipping-items{
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        row-gap: 40px;
    }

    .shipping-item{
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: start;
    }

    .shipping-item h3{
        font-weight: bold;
        font-size: 25px;
        position: relative;
    }

    .shipping-item h3::after{
        content: '';
        position: absolute;
        width: 189px;
        height: 3px;
        background-color: #CA0100;
        left: 0px;
        top: 40px;
    }

    .shipping-item p{
        max-width: 320px;
        max-height: 150px;
        font-weight: 500;
        font-size: 20px;
    }

    .shipping-items img{
        border-radius: 5px;
    }

    .shippingbtn{
        font-weight: 400;
        padding: 20px 30px;
        border-radius: 5px;
    }

    .benefits{
        height: 1100px;
        background-color: #1E1E1E;
        color: white;
    }

    .white{
        padding-top: 120px;
        color: white;
    }

    .benefits-items{
        padding-top: 100px;
        font-size: 20px;
        font-family: 'Inter';
        font-weight: 500;
    }

    .benefit-top{
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }

    .benefits-edge{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .benefits-middle{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .benefit{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .benefit-rev{
        display: flex;
        align-items: center;
        gap: 15px;
        text-align: right;
    }

    /* .icon{
        box-shadow: 0 30px 60px 10px rgba(125, 125, 125, 0.25);
    } */

    .request{
        height: 630px;
        background: url(../assets/images/form/form-bg.png) no-repeat;
    }

    .request-title{
        padding-top: 120px;
        text-align: left;
    }

    .request-items{
        padding-top: 60px;
    }

    .request-form{
        max-width: 1000px;
       display: grid;
       grid-template-columns: repeat(2, 1fr);
       row-gap: 20px;
    }

    .request-form input{
        width: 480px;
        height: 60px;
        padding: 20px;
        border: 1px solid #686868;
        border-radius: 5px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 16px;
        outline: none;
    }

    .request-form input:focus{
        border: 1px solid #CA0100;
    }

    .formbtn{
        width: 480px;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 20px;
    }

    @media screen and (max-width: 480px){
        .board-items{
            gap: 20px;
        }
        
        .board-items img{
            width: 250px;
        }

        .board-items h2{
            font-size: 18px;
        }

        .bannerbtn{
            font-size: 14px;
            padding: 16px 16px;
        }

        .shipping-items{
            margin-top: 40px;
        }

        .shipping-item{
            width: 300px;
            gap: 20px;
        }

        .shipping-item img{
            width: 300px;
        }

        .shipping-item h3{
            font-size: 20px;
        }

        .shipping-item h3::after{
            top: 30px;
            width: 140px;
        }

        .shippingbtn{
            font-size: 14px;
            padding: 16px;
        }

        .shipping-item p{
            font-size: 16px;
        }

        .benefit-truck{
            display: none;
        }

        .benefit-top{
            justify-content: start;
            padding-bottom: 0px;
        }

        .benefits-edge{
            flex-direction: column;
            gap: 30px;
        }

        .benefit-rev p{
            text-align: left;
        }

        .benefit-rev img{
            order: -1;
        }

        .benefits-middle{
            flex-direction: column;
            gap: 20px;
            align-items: start;
        }

        .benefits-items{
            padding-top: 60px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .request-form{
            grid-template-columns: repeat(1, 1fr);
        }

        .request-items{
            padding-top: 40px;
        }

        .request-title{
            padding-top: 80px;
        }

        .request-form input{
            width: 300px;
            height: 50px;
        }

        .formbtn{
            width: 300px;
        }

    }

</style>