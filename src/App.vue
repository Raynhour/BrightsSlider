<template lang="pug">
  main.main
    .wrapper
      button(@click='prev').button.button__prev назад
      .slider(:style='{width: summWidth}')
        app-single(
          v-for='im, index in img' 
          :currentIndex="index"
          :img='im'
          :imgSize='img.length' 
          :key='index'
          ref='sp'
          @mountedIndexSumm='mountedIndexSumm'
          @UpdateIndexSumm='updateIndexSumm'
          )
      button(@click='nexts').button.button__next Дальше
</template>


<script>

import AppSingle from './components/single.vue';

import {store} from 'vuex';

export default {
  name: 'app',
  components: {
    AppSingle
  },
  created() {
    // Генерация человечков
    let i = 0;
    while (i < 6) {
      this.img.push(Math.random() > 0.5 ? '../src/assets/happy-1.png' : '../src/assets/happy-2.png')
      i++;
    }
  },
  data () {
    return {
      img: [],
      arrIndex: [],
      summWidth: '0'
    }
  },
  methods: {
    nexts() {
      this.$store.commit('indexInc');
      this.arrIndex.forEach((element,index,array) => {
        let thisElement = this.$refs.sp[index].$el;
        switch(element) {
          case 0: 
            thisElement.classList = 'sp__slider animation-position-1 animation-next-2';
            break;
          case 1:
            thisElement.classList = 'sp__slider animation-position-2 animation-next-1';
            break;
          case 2:
            thisElement.classList = 'sp__slider animation-position-right animation-next-0';
            break;
          case array.length - 2:
            thisElement.classList = 'sp__slider animation-position-left';
            break;
          case array.length - 1:
            thisElement.classList = 'sp__slider animation-position-0 animation-next-3';
            break;
        }      
      })
    },
    prev() {
      this.$store.commit('indexDec');
      this.arrIndex.forEach((element,index,array) => {
      let thisElement = this.$refs.sp[index].$el;
        switch(element) {
          case 0: 
            thisElement.classList = 'sp__slider animation-position-left animation-prev-0';
            break;
          case 1:
            thisElement.classList = 'sp__slider animation-position-0 animation-prev-1';
            break;
          case 2:
            thisElement.classList = 'sp__slider animation-position-1 animation-prev-2';
            break;
          case array.length - 1:
            thisElement.classList = 'sp__slider animation-position-2 animation-prev-3';
            break;
          default:
            thisElement.classList = 'sp__slider animation-position-left';
        }      
      })
    },
    mountedIndexSumm(index) {
      this.arrIndex.push(index);
    },
    updateIndexSumm(updateIndex, arrayIndex) {
        this.arrIndex[arrayIndex] = updateIndex;
    }
  },
  mounted() {
    this.summWidth = this.$store.getters.sliderWidth * 3 + 60 + 'px';
  }

}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}

.button {
  outline: none;
  padding: 20px 40px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  background-color: #fff;
  color: #20b8b3;
}

.main {
  background: #20b8b3;
  height: 100vh;
}

.wrapper {
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}

.slider {
  position: relative;
  width: 500px;
  height: 138px;
  &__img {
    background-size: contain;
    background-position:center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    width: 142px;
    transition: all .5s;
    height:138px;
  }
}


@keyframes animation-prev-0 {
  0% {
    right: 328px;
    opacity: 1;
    transform: scale(1);
  }
  100% {
    right: 100vw;
    opacity: 0;
    transform: scale(2);
  }
}

@keyframes animation-prev-1 {
  0% {
    right: 164px;
  }
  100% {
    right: 328px;
  }
}


@keyframes animation-prev-2 {
  0% {
    right: 0;
  }
  100% {
    right: 164px;
  }
}

@keyframes animation-prev-3 {
  0% {
    right: -100vw;
  }
  100% {
    right: 0;
  }
}

@keyframes animation-next-0 {
  0% {
    right: 0;
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    right: -100vw;
    transform: scale(2);
  }
}

@keyframes animation-next-1 {
  0% {
    right: 164px;
  }
  100% {
    right: 0;
  }
}

@keyframes animation-next-2 {
  0% {
    right: 328px;
  }
  100% {
    right: 164px;
  }
}

@keyframes animation-next-3 {
  0% {
    right: 100vw;
  }
  100% {
    right: 328px;
  }
}


@mixin animation($name, $time) {
  -webkit-animation: $name $time; 
  -moz-animation:    $name $time; 
  -o-animation:      $name $time; 
  animation:         $name $time;   
};

.animation {
  &-prev {
    &-0 {
      @include animation(animation-prev-0, 2s);
    }
    &-1{
      @include animation(animation-prev-1, 2s);
    }
    &-2 {
      @include animation(animation-prev-2, 2s);
    }
    &-3 {
      @include animation(animation-prev-3, 2s);
    }
    &-4 {
      @include animation(animation-prev-4, 2s);
    }
  }
  &-next {
    &-0 {
      @include animation(animation-next-0, 2s);
    }
    &-1{
      @include animation(animation-next-1, 2s);
    }
    &-2 {
      @include animation(animation-next-2, 2s);
    }
    &-3 {
      @include animation(animation-next-3, 2s);
    }
    &-4 {
      @include animation(animation-next-4, 2s);
    }    
  }
  &-position {
    &-0 {
      right: 328px;
    }
    &-1 {
      right: 164px;
    }
    &-2 {
      right : 0;
    }
    &-left {
      right: 100vw;
    }
    &-right {
      right: -100vw;
    }
  }
}

</style>
