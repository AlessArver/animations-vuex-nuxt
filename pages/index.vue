<template>
  <div class="login__wrapper">
    <template>
      <div class="login__content">
        <div class="login__text">
          {{ newText }}
        </div>
        <form @submit.prevent="setMainFormText" ref="form" class="login__form">
          <div class="field">
            <vue-fake-input
              :length="10"
              :fontSize="50"
              :allowPaste="false"
              class="input login--input"
              v-model="newText"
            />
          </div>
          <div class="field">
            <vs-button button="submit" type="!newText && disabled">
              Login
            </vs-button>
          </div>
        </form>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Card from "~/components/Card";
import Input from "~/components/Input";
import Button from "~/components/Button";

export default {
  components: { Card, Input, Button },
  data: () => ({
    newText: ""
  }),
  computed: {
    ...mapGetters({ text: "modules/home/text" })
  },
  methods: {
    ...mapActions({ setText: "modules/home/setText" }),
    onChangeInput() {},
    setMainFormText() {
      console.log(this.text);
      console.log(this.newText);
      this.setText(this.newText);
      this.$vs.notify({
        text: this.text
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.login

  &__text
    margin-bottom: 40px
    font-size: 30px
    letter-spacing: 55px

  &__form
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  &--input
    margin-bottom: 100px
</style>
