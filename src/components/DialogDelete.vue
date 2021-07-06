<template>
  <q-dialog v-model="confirmDelete">
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Confirma a exclusão do registro.</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          @click="setConfirmDelete(true)"
          flat
          label="Cancelar"
          color="primary"
          no-caps
        />
        <q-btn
          @click="deleteCar"
          flat
          label="Confirmar"
          color="primary"
          no-caps
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    confirmDelete: {
      get () {
        return this.$store.state.Cars.confirmDelete
      },

      set (value) {
        this.$store.commit('Cars/setConfirmDelete', value)
      }
    }
  },

  methods: {
    ...mapActions('Cars', {
      deleteCar: 'deleteCar'
    }),

    ...mapMutations('Cars', {
      setConfirmDelete: 'setConfirmDelete'
    })
  }
}
</script>

<style></style>
