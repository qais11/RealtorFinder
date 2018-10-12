<template>
  <div id="app">
    <Nav/>
     <GmapMap
  :center="{lat:37.090240, lng:-95.712891}"
  :zoom="4"
  map-type-id="terrain"
  style="width: 800px; height: 800px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
    v-on:click="openSideBar()"
  />
</GmapMap>
    <side-bar v-on:openSideBar="openSideBar()"></side-bar>

  </div>
</template>

<script>
import Nav from './components/nav/nav.vue'
import SideBar from './components/sideBar/sideBar.vue'

export default {
  name: 'app',
  components: {
    Nav,
    SideBar
  },
  methods: {
       openSideBar() {
        this.$root.$emit('openSideBar');
      }
  },
  data() {
      return {
          center: {lat: 32.776665, lng: -96.796989},
          markers: [
            {position: {lat: 32.776665, lng: -96.796989}},
            {position: {lat: 32.776665, lng: -96.99991}},

            {position: {lat: 34.052235, lng: -118.243683}},
            {position: {lat: 37.338207, lng: -121.886330}},

            {position: {lat: 36.169941, lng: -115.139832}},
            {position: {lat: 27.664827, lng: -81.515755}},

            {position: {lat:  41.878113, lng: -87.629799}},
           
            ]
    }
  },
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
 
    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   map.panTo({lat: 1.38, lng: 103.80})
    // })
  },
  computed: {
    // google: gmapApi
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script');
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
