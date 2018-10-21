<template>
  <v-ons-page id="login">
    <v-ons-toolbar>
      <div class="center" style="text-align: center;">theHotel</div>
    </v-ons-toolbar>

    <v-ons-row class="section-text">
      <v-ons-col width="100%">
        <div class="title">WELCOME TO THE HOTEL</div>
        <hr />
        <div class="subtitle">the Hotel has a collection of nearby hotels that you can
           instantly book by minute.</div>
      </v-ons-col>

      <v-ons-col>
        <ons-button
          modifier="large"
          style="margin-bottom: 16px"
          @click="$auth.login()">LOGIN</ons-button>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
export default {
  name: 'login',
};
</script>

<style>
  #login .page__background {
    background-image: url('../assets/screen1.jpg');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center;
    background-position-y: -100px;
  }

  .section-text {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    padding-top: 16px;
  }

  .title {
    font-weight: bold;
    margin: 16px 8px;
    font-size: 16px;
  }

  .subtitle {
    margin: 16px 8px;
    font-size: 14px;
    margin-bottom: 42px;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 6px solid green;
    padding: 0;
    margin: 0 auto;
    text-align: center;
    width: 42px;
  }
</style>
