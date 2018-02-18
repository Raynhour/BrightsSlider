<template lang="pug">
  div(ref='i2' 
  ).sp__slider
    div(v-bind:style="{ backgroundImage: 'url(' + img + ')' }").slider__img
      //- img(:src='img' alt='Be happy').slider__img
    
</template>

<script>
import setStyles from '../styler.js';
import {store} from 'vuex';

export default {
  props: [
    'currentIndex',
    'img',
    'imgSize'
  ],
  data () {
    return {
      curIndex: this.currentIndex,
    }
  },
  computed: {
    // Значени элементов массива не должно быть больше общего количества массива, потому делю по модулю(в нашем случае от 0 до 5)
    currSumm: function() {
        if(this.$store.getters.index < 0) {
          return (this.currentIndex + (this.imgSize -1 - this.$store.getters.index)) % this.imgSize;
        }
        else
          return (this.currentIndex + this.$store.getters.index) % this.imgSize;
    }
  },
  watch: {
    // Отслеживание изменения элементов массива
    currSumm: function(newIndex) {
      this.$emit('UpdateIndexSumm', this.currSumm, this.currentIndex);
    }
  },
  mounted() {
    // Позиционированние слайдера при первой загрузке
    this.$store.commit('setSliderWidth', this.$refs.i2.offsetWidth);
    this.$emit('mountedIndexSumm', this.currSumm);
    switch(this.currSumm) {
          case 0: 
            this.$refs.i2.classList.add('animation-position-0');
            break;
          case 1:
            this.$refs.i2.classList.add('animation-position-1');
            break;
          case 2:
            this.$refs.i2.classList.add('animation-position-2');
            break;
          case this.imgSize - 1:
            this.$refs.i2.classList.add('animation-position-left');
            break;
          default: 
            this.$refs.i2.classList.add('animation-position-left');
    }
  }
}
</script>

<style lang="scss">
  .sp__slider {
    width: 138px;
    transform: translate3d(0, 0, 0);
    height: 138px;
    border-radius: 50%;
    position: absolute;
    border-width: 3px;
    margin: 0 25px;
    display: flex;
    justify-content: center;
    border-style: solid;
    border-color: rgba(255,255,255, .5);
    &:hover {
      transition: all .5s;
      border-color: #fff;
    }
    &:hover > .slider__img {
      height: 150px;
    }
  }
</style>

