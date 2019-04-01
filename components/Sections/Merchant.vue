<template>
  <section class="screen screen__merchant">
    <div class="container">
      <div class="screen__image-wrap">
        <img
          v-show="show"
          src="/img/section_6_image.png"
          alt="Image">
      </div>
      <div class="screen__info screen__info_merchant">
        <h1 class="h1">Global merchant</h1>
        <p class="text">
          The unique merchant solution enables Galeo Business users to accept online and offline payments from customers from around the world.
        </p>
      </div>
      <Footer v-show="show"/>
    </div>
  </section>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  name: 'Merchant',
  components: {
    Footer
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}
</script>
