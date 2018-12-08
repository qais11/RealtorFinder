import GmapCustomMarker from 'vue2-gmap-custom-marker';
import RealtorPhoto from '../photo/photo.vue'
import Data from './dm.js'

export default {
  name: 'Map',
  props: {},
  components: {
    'gmap-custom-marker': GmapCustomMarker,
    RealtorPhoto,
    Data
  },
  data() {
    return {
      zoom: 10,
      showInitalMarkers: true,
      center: {
        lat: 32.776665,
        lng: -96.796989
      },
      styles: [{
        width: '100%',
        height: 'calc(100vh - 78px)',
        margin: 'auto',
      }],
      realtors: Data.Data,
      realtorsNumInStates: Data.statesPositions,
      realtorsNumInCities: Data.citiesPositions,
      mapOptions: {
        disableDefaultUI: true,
        gestureHandling: 'greedy',
      },
    }
  },
  beforeMount() {
    for (var i = 0; i < this.realtors.length; i++) {
      for (var j = 0; j < this.realtorsNumInStates.length; j++) {
        if (this.realtors[i].state === this.realtorsNumInStates[j].name) {
          this.realtorsNumInStates[j].realtors += 1;
        }
      }
      for (var n = 0; n < this.realtorsNumInCities.length; n++) {
        if (this.realtors[i].city === this.realtorsNumInCities[n].name) {
          this.realtorsNumInCities[n].realtors += 1;
          this.realtorsNumInCities[n].position.lat = this.realtors[i].position.lat;
          this.realtorsNumInCities[n].position.lng = this.realtors[i].position.lng;
        }
      }
    }
  },

  mounted() {

    var self = this;
    this.$refs.Rmap.$mapPromise.then((map) => {
      map.mapTypeId = 'roadmap';
      map.setOptions({
        minZoom: 3.4,
        maxZoom: 9
      });

      map.addListener('zoom_changed', () => {
        this.zoom = map.zoom;
      });

      self.$root.$on('chooseState', function (city) {
        self.realtorsNumInStates.map((el) => {
          if (el.name === city) {
            self.zoomToState(el.position);
          }
        })
      })

    });

    setTimeout(() => {
      this.zoom = 6;
    }, 900);
    setTimeout(() => {
      this.zoom = 3.4;
    }, 1500);
  },

  methods: {
    openSideBar(id) {
      this.$root.$emit('openSideBar', id);
    },
    zoomToState(statePosition) {
      this.zoom = 5.9;
      this.center = statePosition;
    },
    zoomToCity(cityPosition) {
      this.zoom = 8.9;
      this.center = cityPosition;
    },
    resetZoom() {
      this.zoom = 3.4;
      this.center = {
        lat: 32.776665,
        lng: -96.796989
      };
    },
    closeStatesList() {
      this.$root.$emit('listInActive');
    }
  },
}