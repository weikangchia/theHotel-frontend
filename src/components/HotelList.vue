<template>
  <v-ons-row style="height: 340px; overflow-y: auto;">
    <v-ons-col width="100%">
      <v-ons-list>
        <v-ons-list-item class="hotelItem" v-for="(hotel, index) in hotels" :key="index" v-bind:id="hotel.id" @click.prevent="navigateTo(`bookHotel/${hotel.id}`)">
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
export default {
  name: 'HoteList',
  data() {
    return {
      hotels: [
        {
          id: 1,
          name: 'J&J Hotel',
          service_fee: 30,
          hourly_rate: 40,
          minute_rate: 0.5,
          image_url: 'https://res.cloudinary.com/geboto/image/upload/v1540112510/thehotel/hotel1.jpg',
        },
        {
          id: 2,
          name: 'Beta Hotel',
          service_fee: 25,
          hourly_rate: 30,
          minute_rate: 0.5,
          image_url: 'https://res.cloudinary.com/geboto/image/upload/v1540112510/thehotel/hotel2.jpg',
        },
      ],
    };
  },
  methods: {
    navigateTo: function (nav, id) {
      this.$router.push({
        path: nav,
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
