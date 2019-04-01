<template>
  <div
    v-if="device === 1"
    class="desktop">
    <transition name="modal">
      <modal
        v-if="!closeModal"
        :message="responseMessage"
        :status="responseStatus"
        @closeModal="closeModal = $event"
        @subscribe="setEmail($event)"/>
    </transition>
    <!-- subscribed: subscribed для хедера -->
    <Header
      :class="{hidden: !closeModal}"
      :followButton="headerFollowBtn"
      @openModal="closeModal = $event"/>
    <Message
      v-if="policyMessage"
      @message="messageView"/>
    <intro
      :class="{hidden: !closeModal, subscribed: subscribed}"
      :device="device"
      :subscribed="subscribed"
      :message="responseMessage"
      :status="responseStatus"
      @scroll="headerFollowBtn = $event"
      @subscribe="setEmail($event)"/>
    <unified/>
    <transfers/>
    <cards/>
    <services/>
    <loyality/>
    <Footer/>
  </div>
  <div
    v-else-if="device === 2"
    class="mobile">
    <!-- subscribed: subscribed для хедера-->
    <Header
      :class="{hidden: !closeModal}"
      :followButton="headerFollowBtn"
      :subscribed="subscribed"
      @openModal="closeModal = $event"/>
    <div class="container_mobile">
      <section
        class="screen screen__intro">
        <div
          class="screen__info screen__info_intro">
          <h1 class="h1">New generation digital bank</h1>
          <p class="text">
            Galeo is a digital bank designed to provide a free banking service globally and democratise access to financial products and services by leveraging the Bank-as-a-Platform model.
          </p>
        </div>
        <div class="phone-block">
          <img src="/img/section_1_image_1.png">
        </div>
        <!-- v-show="subscribed" для красной кнопки -->
        <Button
          v-if="false"
          target="_blank"
          class="btn btn_red">Watch Video</Button>
        <form
          class="screen__form">
          <h3 class="h3">Follow updates and stay tuned</h3>
          <div
            v-if="responseStatus === null || responseStatus === 2"
            class="input-box">
            <input
              v-model="email"
              class="input-box__input"
              type="text"
              placeholder="E-mail"
              @input="checkEmail">
            <div
              :class="{error: responseStatus === 2}"
              class="message">{{ responseMessage }}</div>
          </div>
          <button
            v-if="responseStatus === null || responseStatus === 2"
            :class="{disabled: !markFollowBtn}"
            name="subscribe"
            class="btn btn_blue"
            @click.prevent="subscribe">Get early access</button>
          <p
            v-if="responseStatus === 1"
            class="text">Congratulations! You are on the waitlist now.<br>We will keep you updated on Galeo news!</p>
          <div
            v-if="responseStatus === 1"
            class="btn btn_blue btn_subscribed">You are subscribed!</div>
        </form>
      </section>

      <section class="screen screen__unified">
        <div class="container">
          <div class="screen__info screen__info_unified">
            <h2 class="h2">Revolutionary boarderless account</h2>
            <p class="text">
              Truly borderless Galeo account allows customers to simply open and hold local current accounts in multiple countries Galeo has a presence.
            </p>
          </div>
          <div class="screen__mockups">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="phone-block phone-block_min phone-block_ml">
                  <img
                    src="/img/mobile-slider-images/slider_1_image_1.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block phone-block_mobile-middle">
                  <img
                    src="/img/mobile-slider-images/slider_1_image_2.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block phone-block_min">
                  <img
                    src="/img/mobile-slider-images/slider_1_image_3.png">
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
              Revolutionary free and instant multi-currency money transfers at the best currency exchange rates. Galeo seamlessly combines social, banking, and online payments within one solution, whilst saving your money on each transaction.
            </p>
          </div>
          <div class="screen__mockups">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="phone-block">
                  <img
                    src="/img/mobile-slider-images/slider_2_image_1.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block">
                  <img
                    src="/img/mobile-slider-images/slider_2_image_2.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block phone-block_min">
                  <img
                    src="/img/mobile-slider-images/slider_2_image_3.png">
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
              Galeo Cards are perfectly suitable for cost-free spending and cashout globally in more than 150 currencies and at the best real currency exchange rates.
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
            <h2 class="h2">Galeo Marketplace</h2>
            <p class="text">
              Revolutionary customer-centric approach to providing financial products, such as credit cards, lending, savings, insurance, and other options through the centralised innovative digital marketplace.
            </p>
          </div>
          <div class="screen__mockups">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="phone-block phone-block_min phone-block_ml">
                  <img
                    src="/img/mobile-slider-images/slider_3_image_1.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block">
                  <img
                    src="/img/mobile-slider-images/slider_3_image_2.png">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="phone-block phone-block_min">
                  <img
                    src="/img/mobile-slider-images/slider_3_image_3.png">
                </div>
              </swiper-slide>
              <div
                slot="pagination"
                class="swiper-pagination"/>
            </swiper>
          </div>
        </div>
      </section>

      <section class="screen screen__loyality">
        <div class="container">
          <div class="screen__info screen__info_loyality">
            <h2 class="h2">A fair loyality programme. You are Premium Customer!</h2>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <div class="image__wrap">
              <img src="/img/section_6_image_1.png">
            </div>
          </div>
        </div>
      </section>

      <div
        v-if="policyMessage"
        class="container message">
        <Message
          @message="messageView"/>
      </div>

      <!-- <div class="platform">
        <div
          class="block block_ios"/>
        <div
          class="block block_android"/>
      </div> -->
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Button from '~/components/Button'
import Cards from '~/components/Sections/Cards'
import Intro from '~/components/Sections/Intro'
import Services from '~/components/Sections/Services'
import Transfers from '~/components/Sections/Transfers'
import Unified from '~/components/Sections/Unified'
import Loyality from '~/components/Sections/Loyality'
import Footer from '~/components/Footer.vue'
import Modal from '~/components/Modal.vue'
import Message from '~/components/Message.vue'

export default {
  components: {
    Header,
    Button,
    Cards,
    Intro,
    Services,
    Transfers,
    Unified,
    Loyality,
    Footer,
    Modal,
    Message
  },
  data() {
    return {
      subscribed: false,
      responseMessage: '',
      responseStatus: null,
      headerFollowBtn: false,
      device: 0,
      closeModal: true,
      policyMessage: true,
      email: null,
      markFollowBtn: false,
      emailPattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
    if (window.localStorage.getItem('message')) {
      this.policyMessage = false
    } else {
      this.policyMessage = true
    }
    window.innerWidth <= 1023 ? (this.device = 2) : (this.device = 1)

    window.addEventListener('resize', () => {
      window.innerWidth <= 1023 ? (this.device = 2) : (this.device = 1)
    })
  },
  methods: {
    messageView() {
      window.localStorage.setItem('message', true)
      this.policyMessage = false
    },
    subscribe() {
      this.responseMessage = ''
      if (this.markFollowBtn) {
        this.$axios
          .post('/subscribe', {
            email: this.email
          })
          .then(res => {
            if (res.data.statusCode && res.data.statusCode === 200) {
              this.responseMessage = 'Subscribed!'
              this.responseStatus = 1
            } else {
              this.responseMessage = res.data.title
              this.responseStatus = 2
            }
          })
          .catch(err => {})
      }
    },
    checkEmail() {
      this.markFollowBtn = this.emailPattern.test(this.email) ? true : false
    },
    setEmail(email) {
      this.email = email
      this.markFollowBtn = true
      this.subscribe()
    }
  }
}
</script>

<style lang="sass" scoped>
.modal-enter-active,
  animation: modal-enter .2s ease-in

.modal-leave-active
  animation: modal-leave .2s ease-in

@keyframes modal-enter
  from
    opacity: 0
  to
    opacity: 1

@keyframes modal-leave
  from
    opacity: 1
  to
    opacity: 0
</style>
