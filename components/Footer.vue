<template>
  <footer 
    class="footer">
    <div class="container">
      <ul class="footer__links">
        <li>
          <a
            href="mailto:hello@galeo.one"
            class="footer__link">Contact us</a>
        </li>
        <li>
          <a
            href="/"
            class="footer__link">Terms of use</a>
        </li>
        <li>
          <nuxt-link
            to="/policy"
            class="footer__link"
            target="_blank">
            Cookie policy
          </nuxt-link>
        </li>
        <li>
          <a
            href="/"
            class="footer__link">Legal information</a>
        </li>
      </ul>
      <div class="footer__socials">
        <a
          :href="'https://twitter.com/GaleoBank'"
          target="_blank">
          <img
            src="/img/twitter.svg"
            alt="Twitter">
        </a>
        <a
          :href="'https://www.linkedin.com/company/GaleoBank'"
          target="_blank">
          <img
            src="/img/linkedin.svg"
            alt="Linkedin">
        </a>
        <a
          :href="'https://www.facebook.com/GaleoBank'"
          target="_blank">
          <img
            src="/img/facebook.svg"
            alt="Facebook">
        </a>
        <a
          :href="'https://www.instagram.com/GaleoBank'"
          target="_blank">
          <img
            src="/img/instagram.svg"
            alt="Instagram">
        </a>
        <a
          :href="'https://plus.google.com/b/107301910159201499701/'"
          target="_blank">
          <img
            src="/img/googleplus.svg"
            alt="Googleplus">
        </a>
        <Lang />
      </div>
    </div>
  </footer>
</template>

<script>
import Lang from '~/components/Lang.vue'
export default {
  name: 'Footer',
  components: { Lang }
}
</script>
<style scoped lang="sass">
  @import './footer'
</style>
