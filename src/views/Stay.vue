<template>
  <v-ons-page id="stay">
    <div class="background"></div>

    <v-ons-toolbar>
      <div class="center" style="text-align: center;">Your Stay</div>
      <div class="left">
        <v-ons-toolbar-button>
          <router-link to="/">
            <v-ons-icon icon="fa-chevron-left" />
          </router-link>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <v-ons-row>
      <v-ons-col width="100%">
        <div class="circle">
          <div class="circleInner">
            <div class="circleWrapper">
              <div class="circleContent">
                <span class="title">Digital Key</span>
                <br /><br />
                <span>Tap on your door to unlock your room</span>
                <br /><br />
                <span class="roomText">#01-33</span>
              </div>
            </div>
          </div>
        </div>
      </v-ons-col>

      <v-ons-col>
        <div class="stayWrapper">
          <div class="titleText">Hi {{ $auth.user.nickname }}, your stay started at:</div>
          <div class="titleTime">1:00 <span style="font-size: 16px;">PM</span></div>
          <hr />
          <p>Kick back, relax and enjoy your stay!</p>
          <p>When you're ready to leave, tap check-out below.</p>
          <v-ons-button modifier="large" style="margin-top: 32px;" @click="showModal">CHECK-OUT</v-ons-button>
        </div>
      </v-ons-col>
    </v-ons-row>

    <v-ons-modal :visible="modalVisible" @click="modalVisible = false">
      <p style="text-align: center; margin: 16px; 0px;">
        Hope you enjoy your stay and remember to take all your items! <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
      </p>
    </v-ons-modal>
  </v-ons-page>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'stay',
  components: {
    Header,
  },
  data() {
    return {
      modalVisible: false,
      timeoutID: 0,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => {
        this.modalVisible = false;
        this.$router.push('/');
      }, 2000);
    },
  },
};
</script>

<style>
  #stay .background {
    background-color: white;
  }

  .circle {
    position: relative;
    display: block;
    margin: 2em 0;
    background-color: transparent;
    color: #222;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
  }

  .circle:after {
    display: block;
    padding-bottom: 100%;
    width: 100%;
    height: 0;
    border-radius: 50%;
    background-color: rgb(255, 255, 169);
    content: "";
  }

  .circleInner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .circleWrapper {
    display: table;
    width: 100%;
    height: 100%;
  }

  .circleContent {
    display: table-cell;
    padding: 1em;
    vertical-align: middle;
  }

  .titleText {
    padding-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
  }

  .titleTime {
    padding-bottom: 16px;
    font-size: 36px;
    font-weight: 500;
  }

  .stayWrapper {
    padding: 16px 16px;
    text-align: left;
  }

  .roomText {
    font-size: 32px;
    font-weight: 500;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 6px solid green;
    padding: 0;
    margin: 0;
    width: 42px;
  }
</style>
