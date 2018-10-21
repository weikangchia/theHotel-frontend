<template>
  <v-ons-page id="home">
    <Header title="theHotel"/>

    <HotelMap />

    <HotelList />
  </v-ons-page>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import HotelList from '@/components/HotelList.vue';
import HotelMap from '@/components/HotelMap.vue';

export default {
  name: 'home',
  components: {
    Header,
    HotelList,
    HotelMap,
  },
};
</script>
