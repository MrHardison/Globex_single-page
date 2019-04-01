<template>
  <div 
    v-click-outside="hideLang"
    :class="{open: langPanel}"
    class="lang"
    @click="langPanel = !langPanel">

    <img
      src="/img/en.svg"
      alt="En">
  <!-- <ul class="lang-list">
      <li
        class="item lang__en"
        @click="changeLang">
        <img
          src="/img/en.svg"
          alt="En">
      </li>
      <li
        class="item lang__en"
        @click="changeLang">
        <img
          src="/img/en.svg"
          alt="En">
      </li>
      <li
        class="item lang__en"
        @click="changeLang">
        <img
          src="/img/en.svg"
          alt="En">
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Lang',
  data() {
    return {
      langPanel: false
    }
  },
  methods: {
    hideLang() {
      this.langPanel = false
    },
    changeLang() {
      console.log('changed!')
    }
  }
}
</script>
<style scoped lang="sass">
  @import './lang'
</style>
