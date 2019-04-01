<template>
  <section class="screen screen__services">
    <div class="container">
      <div class="screen__info screen__info_services">
        <h2 class="h2">Omega Marketplace</h2>
        <p class="text">
          Revolutionary customer-centric approach to providing digital financial products, such as lending, savings, insurance, and other options through the centralised innovative digital marketplace.
        </p>
      </div>
      <div class="screen__mockups">
        <div class="phone-block phone-block_min">
          <img
            src="/img/section_5_image_1.png">
        </div>
        <div class="phone-block">
          <img
            src="/img/section_5_image_2.png">
        </div>
        <div class="phone-block phone-block_min phone-block_mr">
          <img
            src="/img/section_5_image_3.png">
        </div>
      </div>
    </div>
  </section> 
</template>

<script>
export default {
  name: 'Services',
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
