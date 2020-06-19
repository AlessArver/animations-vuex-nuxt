<template>
  <div class='main-wrapper'>
    <Card className='main-card'>
      <template>
        <div class='card-content'>
          <div class='main-card-text'>
            {{text}}
          </div>
          <a-form @submit.prevent='setMainFormText' ref='form'>
            <a-form-item>
              <a-input placeholder='Enter any text' class='input main-input' v-model='myText'/>
            </a-form-item>
            <a-form-item>
              <Button
                className='main-btn'
                type='primary'
                htmlType='submit'
                text='Submit'/>
            </a-form-item>
          </a-form>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import Card from '~/components/Card/Card'
  import Button from '~/components/Button/Button'

  export default {
    components: { Card, Button },
    data: () => ({
      myText: ''
    }),
    computed: {
      ...mapState('MainForm', { textFromStore: 'text' }),
      text: {
        get() {
          return this.textFromStore
        },
        set(newText) {
          return newText
        }
      }
    },
    methods: {
      ...mapActions('MainForm', ['setText']),
      ...mapActions('Toast', ['setMessage', 'setType']),
      async setMainFormText() {
        await this.setText(this.myText)
        this.$message.success(this.myText)
        console.log(this.$store.state.MainForm.text)
      }
    }
  }
</script>
