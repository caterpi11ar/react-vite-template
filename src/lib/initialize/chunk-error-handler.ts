import type { InitModule } from './types'

const initialize: InitModule = () => {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault()

    window.location.reload()
  })
}

export default initialize
