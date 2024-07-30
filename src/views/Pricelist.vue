<script>
import { Fancybox } from "@fancyapps/ui";
import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"]
        }
      }
});
    
    export default{

    }
</script>

<template>
    <div class="pricelist mt">
        <div class="container">
            <p class="title">Прайс лист</p>
            <div class="pricelist-items">
                <div class="pricelist-item">
                    <a href="/src/assets/images/pricelist/price1.png" data-fancybox data-caption="Прайс-лист">
                        <img src="../assets/images/pricelist/price1.png" />
                    </a>
                </div>
                
                <div class="pricelist-item">
                    <a href="/src/assets/images/pricelist/price2.png" data-fancybox data-caption="Прайс-лист">
                        <img src="../assets/images/pricelist/price2.png" />
                    </a>
                </div>
                
                <div class="pricelist-item">
                    <a href="/src/assets/images/pricelist/price3.png" data-fancybox data-caption="Прайс-лист">
                        <img src="../assets/images/pricelist/price3.png" />
                    </a>
                </div>
                
                <div class="pricelist-item">
                    <a href="/src/assets/images/pricelist/price4.png" data-fancybox data-caption="Прайс-лист">
                        <img src="../assets/images/pricelist/price4.png" />
                    </a>
                </div>
                
                <div class="pricelist-item">
                    <a href="/src/assets/images/pricelist/price5.png" data-fancybox data-caption="Прайс-лист">
                        <img src="../assets/images/pricelist/price5.png" />
                    </a>
                </div>
                
                <div class="pricelist-item">
                    <a href="/src/assets/images/pricelist/price6.png" data-fancybox data-caption="Прайс-лист">
                        <img src="../assets/images/pricelist/price6.png" />
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .pricelist-items{
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 80px;
        margin-bottom: 120px;
    }

    .pricelist-item img{
        width: 700px;
    }

    .pricelist-item img:hover{
        transform: scale(1.01);
    }

    .pricelist-item{
        position: relative;
    }

    .pricelist-item::after{
        content: "";
        position: absolute;
        left: 28%;
        bottom: -40px;
        width: 300px;
        height: 2px;
        background-color: black;
    }

    .pricelist-item:last-child::after{
        display: none;
    }

    @media screen and (max-width: 480px){
        .pricelist-items{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-bottom: 80px;
    }

    .pricelist-item img{
        width: 300px;
    }

    .pricelist-item::after{
        content: "";
        position: absolute;
        left: 28%;
        bottom: -20px;
        width: 150px;
        height: 2px;
        background-color: black;
    }

    }


</style>