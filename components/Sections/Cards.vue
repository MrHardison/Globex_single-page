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
        <h2 class="h2">Free spending and cashout globally</h2>
        <p class="text">
          Galeo Cards are perfectly suitable for cost-free spending and cashout globally in more than 150 currencies and at the best real currency exchange rates.
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
