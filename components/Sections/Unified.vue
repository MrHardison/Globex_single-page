<template>
  <section class="screen screen__unified">
    <div class="container">
      <div class="screen__mockups">
        <div class="phone-block phone-block_min phone-block_ml">
          <img
            src="/img/section_2_image_1.png">
        </div>
        <div class="phone-block">
          <img
            src="/img/section_2_image_2.png">
        </div>
        <div class="phone-block phone-block_min">
          <img
            src="/img/section_2_image_3.png">
        </div>
      </div>
      <div class="screen__info screen__info_unified">
        <h2 class="h2">Free multi-currency banking</h2>
        <p class="text">
          Omega provides free multi-currency borderless accounts with debit cards allow to spend and withdraw money gobally at the best currency exchnage rates.
        </p>
      </div>
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
