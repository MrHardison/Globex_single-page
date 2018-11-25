<template>
  <footer 
    class="footer">
    <div class="container">
      <ul class="footer__links">
        <li><a
          href="/"
          class="footer__link">Blog</a>
        </li>
        <li><a
          href="/"
          class="footer__link">Contact us</a>
        </li>
      </ul>
      <ul class="footer__links">
        <li><a
          href="/"
          class="footer__link">Terms of use</a></li>
        <li><a
          href="/"
          class="footer__link">Cookie policy </a></li>
        <li><a
          href="/"
          class="footer__link">Legal information</a></li>
      </ul>
      <div class="footer__socials">
        <a
          :href="'https://twitter.com/GlobexApp'"
          target="_blank">
          <img
            src="/img/twitter.svg"
            alt="Twitter">
        </a>
        <a
          :href="'https://www.linkedin.com/company/globexapp'"
          target="_blank">
          <img
            src="/img/linkedin.svg"
            alt="Linkedin">
        </a>
        <a
          :href="'https://www.facebook.com/GlobexApp'"
          target="_blank">
          <img
            src="/img/facebook.svg"
            alt="Facebook">
        </a>
        <a
          :href="'https://www.instagram.com/globexapp'"
          target="_blank">
          <img
            src="/img/instagram.svg"
            alt="Instagram">
        </a>
        <a
          :href="''"
          target="_blank">
          <img
            src="/img/youtube.svg"
            alt="Youtube">
        </a>
        <a
          :href="'https://plus.google.com/u/3/b/110802867324501050207/'"
          target="_blank">
          <img
            src="/img/googleplus.svg"
            alt="Googleplus">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {}
}
</script>
<style scoped lang="sass">
  @import './footer'
</style>
