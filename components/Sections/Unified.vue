<template>
  <section class="screen screen__unified">
    <div class="container">
      <div class="screen__mockups">
        <transition name="image1">
          <div class="phone-block phone-block_min phone-block_ml">
            <img
              v-show="show"
              src="/img/section_2_image_1.png">
          </div>
        </transition>
        <transition name="image2">
          <div class="phone-block">
            <img
              v-show="show"
              src="/img/section_2_image_2.png">
          </div>
        </transition>
        <transition name="image3">
          <div class="phone-block phone-block_min">
            <img
              v-show="show"
              src="/img/section_2_image_3.png">
          </div>
        </transition>  
      </div>
      <transition name="text">
        <div v-show="show">
          <div class="screen__info screen__info_unified">
            <h2 class="h2">Revolutionary boarderless account</h2>
            <p class="text">
              Truly borderless Globex account allows customers to simply open and hold local current accounts in multiple countries Globex has a presence.
            </p>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Unified',
  data() {
    return {
      show: true
    }
  },
  mounted() {
    this.show = true
  }
}
</script>

<style scoped>
.text-enter-active,
.text-leave-active {
  animation: text 1.5s ease-in;
}
.image1-enter-active,
.image1-leave-active {
  animation: image1 1s ease-out;
}
.image2-enter-active,
.image2-leave-active {
  animation: image2 1.3s ease-out;
}
.image3-enter-active,
.image3-leave-active {
  animation: image3 1.2s ease-out;
}
@keyframes text {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes image1 {
  from,
  10% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes image2 {
  from,
  30% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes image3 {
  from,
  20% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
