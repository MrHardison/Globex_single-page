<template>
  <section class="screen screen__cards">
    <div class="container">
      <div class="screen__cards-wrap">
        <div
          class="card-block card-block_1">
          <img
            src="/img/card_1.png"
            alt="Card1">
        </div>
        <div
          class="card-block card-block_2">
          <img
            src="/img/card_2.png"
            alt="Card2">
        </div>
      </div>
      <div class="screen__info screen__info_cards">
        <h2 class="h2">Low-rate Credit Cards</h2>
        <p class="text">
          A number of credit card options sutiable for customers with differing credit history level. Cards support global chashback and reward porgrammes and free spending abroad.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cards',
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
