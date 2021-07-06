<template>
  <div class="q-pa-md fixed-center" style="width: 400px">
    <q-form
      @submit="setLogin"
      class="q-gutter-md"
    >
      <q-input
        filled
        type="email"
        v-model="email"
        label="E-mail"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Senha"
        autocomplete="on"
      />

      <div class="button-login">
        <q-btn
          label="Entrar"
          type="submit"
          color="primary"
          no-caps
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    ...mapActions('Login', {
      login: 'login'
    }),

    setLogin () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.login(payload)
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-login {
    display: flex;
    justify-content: flex-end;
  }
</style>
