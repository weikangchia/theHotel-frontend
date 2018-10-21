<template>
  <v-ons-row style="height: 340px; overflow-y: auto;">
    <v-ons-col width="100%">
      <v-ons-list>
        <v-ons-list-item class="hotelItem" v-for="(hotel, key) in $store.getters.getHotels" :key="key" v-bind:id="hotel.id" @click.prevent="navigateTo(`bookHotel/${hotel.id}`)">
          <img v-bind:src="hotel.image_url" alt="Onsen UI" style="width: 98%; height: 120px; object-fit: cover;">
          <div class="title1" style="float: left; width: 100%">
            {{ hotel.name }}
          </div>
          <div class="content" style="float: left">
            Service fee: ${{ hotel.service_fee }}<br />
            ${{ hotel.hourly_rate }}/HR (${{ hotel.minute_rate }}/min)
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </v-ons-col>
  </v-ons-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HoteList',
  created() {
    this.fetchData();
  },
  methods: {
    navigateTo: function (nav, id) {
      this.$router.push({
        path: nav,
      });
    },
    fetchData() {
      axios({
        method: 'get',
        url: `${process.env.VUE_APP_INTERNAL_API}hotels`,
        headers: {
          Authorization: this.$auth.token,
        },
      }).then((response) => {
        const data = response.data;

        const hotels = {};
        data.forEach((hotelData) => {
          hotels[hotelData.id] = hotelData;
        });

        this.$store.commit('updateHotel', hotels);
      });
    },
  },
};
</script>

<style>
  .title1 {
    font-weight: bold;
    margin: 16px 8px;
    font-size: 16px;
  }

  .content {
    margin-left: 8px;
    margin-right: 8px;
    font-size: 16px;
  }

  .hotelItem {
    border-bottom: 1px solid #EEE;
  }

  .hotelItem:last-child {
    margin-bottom: 24px;
    border-bottom: none;
  }
</style>
