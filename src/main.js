import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps";
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCDKVMsEI5I6K6V4dJzRWBwk1ZA05CK2TE",
    // libraries: "places", // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    libraries: "places,drawing,visualization",
    // (as you require)

    //// If you want to set the version, you can do so:
    v: "3.26",
    // installComponents: false
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app')

