<script setup>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import { RouterView } from 'vue-router';
    

</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
  <Footer></Footer>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    transition: .2s ease-in-out;
  }

  body{
    font-family: 'Roboto';
  }

  a{
    color: inherit;
  }

  .container{
    max-width: 1566px;
    margin: 0 auto;
  }

  .button{
    background-color: #CA0100;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .button:hover{
    background-color: #a30404;
  }

  .mt{
    margin-top: 120px;
  }

  .title{
    font-size: 40px;
    font-family: 'Inter';
    font-weight: 800;
    text-align: center;
  }


  @media screen and (max-width: 480px){
    .container{
      max-width: 300px;
    }

    .mt{
      margin-top: 80px;
    }

    .title{
      font-size: 28px;
    }
  }
</style>
