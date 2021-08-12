import { Notify } from 'quasar'

export function notify (message) {
  Notify.create({
    color: 'accenture',
    textColor: 'white',
    message: message,
    position: 'bottom-right',
    actions: [
      { icon: 'close', color: 'white', attrs: { 'aria-label': 'Dismiss' } }
    ],
    timeout: 5000
  })
}
