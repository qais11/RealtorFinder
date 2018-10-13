  export default {
    name: 'Map',
    props: {
      msg: String,
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
  },
   methods: {
       openSideBar() {
        this.$root.$emit('openSideBar');
      }
  },

}

