<template>
  <v-ons-row>
    <v-ons-col width="100%">
      <GmapMap
        :zoom="14"
        :center="center"
        style="width: 100%; height: calc(100vh - (320px));">
        <GmapMarker
          :key="0"
          :position="center"
          :draggable="true" />
      </GmapMap>
    </v-ons-col>
  </v-ons-row>
</template>

<script>
export default {
  name: 'HotelMap',
  data() {
    return {
      center: {
        lat: 1.384936,
        lng: 103.804860,
      },
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.center.lat = pos.lat;
        this.center.lng = pos.lng;
      }.bind(this));
    }
  },
};
</script>
