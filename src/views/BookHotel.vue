<template>
  <v-ons-page id="bookHotel">
    <div class="background"></div>

    <v-ons-toolbar>
      <div class="center" style="text-align: center;">{{ $store.getters.getHotels[id].name }}</div>
      <div class="left">
        <v-ons-toolbar-button>
          <v-ons-icon icon="fa-chevron-left" @click="$router.go(-1)"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <v-ons-row>
      <v-ons-col width="100%">
        <img v-bind:src="$store.getters.getHotels[id].image_url" style="width: 100%; height: 240px; object-fit: cover;">
        <div class="hotelWrapper">
          <div class="section">Description</div>
          <p class="description">{{ $store.getters.getHotels[id].description }}</p>
          <div class="section">Fees</div>
          <p>$ {{ $store.getters.getHotels[id].service_fee }} <b> SERVICE FEE</b></p>
          <p>$ {{ $store.getters.getHotels[id].hourly_rate }} <b> HOURLY RATE</b> | $ {{ $store.getters.getHotels[id].minute_rate }} <b>MINUTE RATE</b></p>
          <v-ons-button modifier="large" style="margin-top: 32px;" @click="showModal">BOOK NOW</v-ons-button>
        </div>
      </v-ons-col>
    </v-ons-row>

    <v-ons-modal :visible="modalVisible" @click="modalVisible = false">
      <p style="text-align: center">
        Please wait <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
      </p>
    </v-ons-modal>
  </v-ons-page>
</template>

<script>
import Header from '@/components/Header.vue';
import { clearTimeout, setTimeout } from 'timers';

export default {
  name: 'bookHotel',
  components: {
    Header,
  },
  props: ['id'],
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
        this.$router.replace('../stay');
      }, 2000);
    },
  },
};
</script>

<style>
  #bookHotel .background {
    background-color: white;
  }

  .hotelWrapper {
    padding: 16px 16px;
    text-align: left;
  }

  .section {
    font-weight: bold;
    font-size: 16px;
    color:cornflowerblue;
  }

  .description {
    font-size: 16px;
    white-space: pre-wrap;
  }
</style>
