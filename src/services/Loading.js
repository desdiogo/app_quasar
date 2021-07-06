import { Loading, QSpinnerHourglass } from 'quasar'

export const loading = {
  show: () => Loading.show({
    spinner: QSpinnerHourglass,
    spinnerColor: 'blue',
    spinnerSize: 100
  }),
  hide: () => Loading.hide()
}
