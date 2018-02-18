import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    index: 0,
    sliderWidth: 0
  },
  getters: {
    index(state) {
      return state.index;
    },
    sliderWidth(state) {
      return state.sliderWidth;
    }
  },
  mutations: {
    indexInc(state) {
      state.index++;
    },
    indexDec(state) {
      state.index--;
    },
    setSliderWidth(state, width) {
      state.sliderWidth = width;
    }
    
  },
  strict: true
})