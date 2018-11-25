<template>
  <div
    v-if="device === 1"
    class="desktop">
    <modal
      :class="{visible: !closeModal}"
      @closeModal="closeModal = $event"/>
    <Header
      :class="{hidden: !closeModal, subscribed: subscribed}"
      :followButton="headerFollowBtn"
      @openModal="closeModal = $event"/>
    <intro
      :class="{hidden: !closeModal, subscribed: subscribed}"
      :device="device"
      @scroll="headerFollowBtn = $event"/>
    <unified/>
    <transfers/>
    <cards/>
    <services/>
    <Footer/>
  </div>
  <div
    v-else-if="device === 2"
    class="mobile">
    <modal
      :class="{visible: !closeModal}"
      @closeModal="closeModal = $event"/>
    <Header
      :class="{hidden: !closeModal, subscribed: subscribed}"
      :followButton="headerFollowBtn"
      @openModal="closeModal = $event"/>
    <div class="container_mobile">
      <section
        class="screen screen__intro">
        <div
          class="screen__info screen__info_intro">
          <h1 class="h1">New paradigm digital bank</h1>
          <p class="text">
            Developing based on the Bank-as-a-Platform principle digital bank, designed to provide a free banking for everyone globally and revolutionise the access to financial products.
          </p>
        </div>
        <div class="phone-block">
          <img src="/img/section_1_image_1.png">
        </div>
        <Button
          v-show="subscribed"
          target="_blank" 
          class="btn btn_red">Learn more</Button>
        <form class="screen__form">
          <h3 class="h3">Follow updates and stay tuned</h3>
          <div class="input-box">
            <div
              v-show="subscribed"
              class="email">mail@email.com</div>
            <input
              v-show="!subscribed"
              v-model="email"
              class="input-box__input" 
              type="text" 
              name="email" 
              placeholder="E-mail">
          </div>
          <button
            v-show="!subscribed"
            class="btn btn_blue mobile-view"
            @click.prevent="">Get early access</button>
          <div
            v-show="subscribed"
            class="btn btn_blue btn_subscribed">You are subscribed!</div>
        </form>
      </section>

      <section class="screen screen__unified">
        <div class="container">
          <div class="screen__info screen__info_unified">
            <h2 class="h2">Revolutionary boarderless account</h2>
            <p class="text">
              Truly borderless Globex account allows customers to simply open and hold local current accounts in multiple countries Globex has a presence.
            </p>
          </div>
          <div class="screen__mockups">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="phone-block phone-block_min phone-block_ml">
                  <img
                    src="/img/section_2_image_1.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block">
                  <img
                    src="/img/section_2_image_2.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block phone-block_min">
                  <img
                    src="/img/section_2_image_3.png">
                </div>
              </swiper-slide>
              <div
                slot="pagination"
                class="swiper-pagination"/>
            </swiper>
          </div>
        </div>
      </section>

      <section class="screen screen__transfers">
        <div class="container">
          <div class="screen__info screen__info_transfers">
            <h2 class="h2">Free and instant money transfers across the globe</h2>
            <p class="text">
              Revolutionary free and instant multi-currency Globex money transfers at the best currency exchange rates. Globex combines social, banking and online payments within one solution, whilst saving your money on each transaction.
            </p>
          </div>
          <div class="screen__mockups">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="phone-block">
                  <img
                    src="/img/section_3_image_1.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block">
                  <img
                    src="/img/section_3_image_2.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block phone-block_min">
                  <img
                    src="/img/section_3_image_3.png">
                </div>
              </swiper-slide>
              <div
                slot="pagination"
                class="swiper-pagination"/>
            </swiper>
          </div>
        </div>
      </section>

      <section class="screen screen__cards">
        <div class="container">
          <div class="screen__info screen__info_cards">
            <h2 class="h2">Free spending and cashout globally</h2>
            <p class="text">
              Globex Cards are perfectly suitable for cost-free spending and cashout globally in more than 150 currencies and at the best real currency exchange rates.
            </p>
          </div>
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
        </div>
      </section>

      <section class="screen screen__services">
        <div class="container">
          <div class="screen__info screen__info_services">
            <h2 class="h2">Globex Marketplace</h2>
            <p class="text">
              Revolutionary approach to lending, savings, insurance and other financial products, provided by third-party financial institution, competing centralised for each customer.
            </p>
          </div>
          <div class="screen__mockups">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="phone-block phone-block_min phone-block_ml">
                  <img
                    src="/img/section_5_image_1.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block">
                  <img
                    src="/img/section_5_image_2.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block phone-block_min">
                  <img
                    src="/img/section_5_image_3.png">
                </div>
              </swiper-slide>
              <div
                slot="pagination"
                class="swiper-pagination"/>
            </swiper>
          </div>
        </div>
      </section>

      <div class="platform">
        <div
          class="block block_ios"/>
        <div
          class="block block_android"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Button from '~/components/Button.vue'
import Cards from '~/components/Sections/Cards.vue'
import Intro from '~/components/Sections/Intro.vue'
import Services from '~/components/Sections/Services.vue'
import Transfers from '~/components/Sections/Transfers.vue'
import Unified from '~/components/Sections/Unified.vue'
import Footer from '~/components/Footer.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Header,
    Button,
    Cards,
    Intro,
    Services,
    Transfers,
    Unified,
    Footer,
    Modal
  },
  data() {
    return {
      headerFollowBtn: false,
      subscribed: false,
      device: 0,
      closeModal: true,
      email: '',
      swiperOption: {
        autoplay: {
          delay: 3000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted() {
    window.innerWidth <= 1023 ? (this.device = 2) : (this.device = 1)

    window.addEventListener('resize', () => {
      window.innerWidth <= 1023 ? (this.device = 2) : (this.device = 1)
    })
  }
}
</script>

<style lang="sass">
.fade-enter-active,
.fade-leave-active
  animation: fade .5s ease-out

@keyframes fade
  from
    opacity: 1
  to
    opacity: 0

</style>
