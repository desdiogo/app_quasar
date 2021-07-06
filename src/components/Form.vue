<template>
    <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="nome"
        label="Nome"
      />

      <q-select
        filled
        v-model="marcaId"
        :options="options"
        label="Selecione a Marca"
      />

      <q-input
        filled
        type="number"
        v-model="ano"
        label="Ano"
      />

      <q-input
        filled
        type="number"
        v-model="modelo"
        label="Modelo"
      />

      <div>
        <q-btn
          label="Salvar"
          type="submit"
          color="primary"
          no-caps
        />
        <q-btn
          @click="setDialog(false)"
          label="Fechar"
          color="primary"
          flat class="q-ml-sm"
          no-caps
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  props: ['car'],

  data () {
    return {
      nome: null,
      marcaId: null,
      ano: null,
      modelo: null,
      options: []
    }
  },

  mounted () {
    if (typeof this.car.id !== 'undefined') {
      this.nome = this.car.nome
      this.marcaId = this.car.marca.nome
      this.ano = this.car.ano
      this.modelo = this.car.modelo
    }
    this.setOptions()
  },

  computed: {
    dialog: {
      get () {
        return this.$store.state.Cars.dialog
      },

      set (value) {
        this.$store.commit('Cars/setDialog', value)
      }
    },

    ...mapState('Cars', {
      brand: 'brand'
    })
  },

  methods: {
    ...mapActions('Cars', {
      newCar: 'newCar',
      editCar: 'editCar'
    }),

    ...mapMutations('Cars', {
      setDialog: 'setDialog'
    }),

    onSubmit () {
      const car = {
        nome: this.nome,
        marca_id: this.marcaId.value,
        ano: this.ano,
        modelo: this.modelo
      }
      if (typeof this.car.id !== 'undefined') {
        this.editCar(car)
      } else {
        this.newCar(car)
      }
    },

    setOptions () {
      this.brand.forEach((element) => {
        const option = {
          value: element.id,
          label: element.nome
        }
        this.options.push(option)
      })
    }

  }
}
</script>

<style>

</style>
