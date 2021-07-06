<template>
    <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nome"
      />

      <q-input
        filled
        type="number"
        v-model="brand"
        label="Marca"
      />

      <q-input
        filled
        type="number"
        v-model="year"
        label="Ano"
      />

      <q-input
        filled
        type="number"
        v-model="yearModel"
        label="Modelo"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      brand: null,
      year: null,
      yearModel: null
    }
  },

  mounted () {
  },

  methods: {
    onReset () {
      this.name = null
      this.brand = null
      this.year = null
      this.yearModel = null
    },

    onSubmit () {
      this.$api.post('/carros', {
        nome: this.name,
        marca_id: this.brand,
        modelo: this.yearModel,
        ano: this.year
      })
    }
  }
}
</script>

<style>

</style>
