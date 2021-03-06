import Vue from 'vue'
import App from 'src/App'

// Import favicon
import 'assets/images/favicon.png'

// Global vue stuffs
import 'locales/index'

// Routing
import router from 'src/router'

// Store
import store from 'src/store'

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
