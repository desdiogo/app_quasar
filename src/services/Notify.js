import { Notify } from 'quasar'

export function notify (message) {
  Notify.create({
    color: 'accenture',
    textColor: 'white',
    message: message,
    position: 'bottom-right',
    actions: [
      { label: 'Ok', color: 'white', handler: () => { /* console.log('wooow') */ } }
    ],
    timeout: 5000
  })
}
