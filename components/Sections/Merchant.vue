<template>
  <section class="screen screen__merchant">
    <div class="container">
      <div class="screen__image-wrap">
        <transition name="image">
          <img
            v-show="show"
            src="/img/section_6_image.png"
            alt="Image">
        </transition>
      </div>
      <transition name="text">
        <div v-show="show">
          <div class="screen__info screen__info_merchant">
            <h1 class="h1">Global merchant</h1>
            <p class="text">
              The unique merchant solution enables Globex Business users to accept online and offline payments from customers from around the world.
            </p>
          </div>
        </div>
      </transition>
      <transition name="footer">
        <Footer v-show="show"/>
      </transition>
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

<style scoped>
.text-enter-active,
.text-leave-active {
  animation: text 1.5s ease-in;
}
.image-enter-active,
.image-leave-active {
  animation: image 1s ease-out;
}
.footer-enter-active,
.footer-leave-active {
  animation: footer 1.5s ease-out;
}
@keyframes text {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes image {
  from {
    opacity: 0;
    transform: translate3d(0, 1500px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes footer {
  from,
  70% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
