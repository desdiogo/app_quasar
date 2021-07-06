<template>
    <div class="q-pa-md">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <q-table v-show="visibleTable"
        title="Carros"
        :data="data"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn @click="editedCar(props)" color="grey" flat dense icon="edit"/>
            <q-btn @click="deleteConfirm(props)" color="red" flat dense icon="delete"/>
          </q-td>
        </template>
        <template v-slot:top-right>
          <q-btn
            color="blue"
            icon-right="add"
            label="Novo Carro"
            no-caps
            @click="newCar"
          />
        </template>
      </q-table>
    </transition>
    <q-inner-loading :showing="visible" class="q-pa-md fixed-center">
      <q-spinner-hourglass color="blue" size="100px"/>
    </q-inner-loading>
    <Dialog :car="car" @click="setDialog(true)" />
    <DialogDelete />
  </div>
</template>

<script>
import Dialog from 'src/components/Dialog.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import DialogDelete from 'src/components/DialogDelete.vue'

export default {
  components: { Dialog, DialogDelete },

  data () {
    return {
      columns: [
        { name: 'nome', label: 'Nome', field: 'nome', sortable: true, align: 'left' },
        { name: 'marca', label: 'Marca', field: row => row.marca.nome, sortable: true, align: 'left' },
        { name: 'modelo', label: 'Modelo', field: 'modelo', sortable: true, align: 'left' },
        { name: 'ano', label: 'Ano', field: 'ano', sortable: true, align: 'left' },
        { name: 'action', label: 'Ações', sortable: true, align: 'center' }
      ],
      car: {}
    }
  },

  computed: {
    ...mapState('Cars', {
      data: 'data',
      token: 'token',
      visibleTable: 'visibleTable',
      visible: 'visible'
    })

  },

  mounted () {
    this.setCars()
    this.getBrand()
  },

  methods: {
    ...mapActions('Cars', {
      setCars: 'setCars',
      getBrand: 'getBrand'
    }),

    ...mapMutations('Cars', {
      setDialog: 'setDialog',
      setCarId: 'setCarId',
      findById: 'findById',
      setConfirmDelete: 'setConfirmDelete'
    }),

    editedCar (car) {
      this.car = car.row
      this.setCarId(car)
      this.setDialog(true)
    },

    newCar () {
      this.car = {}
      this.setDialog(true)
    },

    deleteConfirm (payload) {
      this.setConfirmDelete(true)
      this.findById(payload)
    }
  }
}
</script>

<style>

</style>
