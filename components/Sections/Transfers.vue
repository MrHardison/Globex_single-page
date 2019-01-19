<template>
  <section class="screen screen__transfers">
    <div class="container">
      <div class="screen__info screen__info_transfers">
        <h2 class="h2">Free and instant money transfers across the globe</h2>
        <p class="text">
          Revolutionary free and instant multi-currency money transfers at the best currency exchange rates. Galeo seamlessly combines social, banking, and online payments within one solution, whilst saving your money on each transaction.
        </p>
      </div>
      <div class="screen__mockups">
        <div class="phone-block phone-block_min">
          <img
            src="/img/section_3_image_1.png">
        </div>
        <div class="phone-block">
          <img
            src="/img/section_3_image_2.png">
        </div>
        <div class="phone-block phone-block_min phone-block_mr">
          <img
            src="/img/section_3_image_3.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Transfers',
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
.image2-enter-active,
.image2-leave-active {
  animation: image1 1s ease-out;
}
.image3-enter-active,
.image3-leave-active {
  animation: image2 1.3s ease-out;
}
.image1-enter-active,
.image1-leave-active {
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
