<template>
  <q-dialog v-model="dialog">
    <q-card class="my-card card-form">
      <Form :car="car"/>
    </q-card>
  </q-dialog>
</template>

<script>
import Form from './Form'

export default {
  components: { Form },

  props: ['car'],

  computed: {
    dialog: {
      get () {
        return this.$store.state.Cars.dialog
      },

      set (value) {
        this.$store.commit('Cars/setDialog', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-form {
    width: 400px;
  }
</style>
