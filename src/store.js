import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotels: {
      1: {
        id: 1,
        name: 'J&J Hotel',
        service_fee: 30,
        hourly_rate: 40,
        minute_rate: 0.5,
        image_url: 'https://res.cloudinary.com/geboto/image/upload/v1540112510/thehotel/hotel1.jpg',
        description: 'The J&J Hotel is an ideal base to explore Singapore from, as its neighborhood offers many popular dining and entertainment choices.\n\nAll air-conditioned rooms are tastefully decorated with Baroque furnishings, floor-to-ceiling windows, a view of the city or river, and tea and coffee-making facilities.',
      },
    },
  },
  getters: {
    getHotels: state => state.hotels,
  },
  mutations: {
    updateHotel: (state, payload) => {
      state.hotels = payload;
    },
  },
  actions: {

  },
});
