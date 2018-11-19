import GmapCustomMarker from 'vue2-gmap-custom-marker';
import RealtorPhoto from '../photo/photo.vue'
import Data from './dm.js'

  export default {
    name: 'Map',
    props: {
    },
    components: {
      'gmap-custom-marker': GmapCustomMarker,
      RealtorPhoto,
      Data
    },
  data() {
    return {
      zoomIn: false,
      zoomOut: true,
      center: {lat: 32.776665, lng: -96.796989},
      styles: [
        {
          width: '100%',
          height: '800px', 
          margin: 'auto',
        }
      ],
      zoom: 3.4,
      realtors: Data.Data,
      realtorsNumInStates: Data.statesPositions,
      realtorsNumInCities: Data.citiesPositions,
      mapOptions: {
        disableDefaultUI : true,
        gestureHandling: 'greedy',
      },
    }  
  },
  beforeMount() {
    for (var i = 0; i < this.realtors.length ; i++) {
      for(var j = 0; j < this.realtorsNumInStates.length; j++) {
        if(this.realtors[i].state === this.realtorsNumInStates[j].name) {
          this.realtorsNumInStates[j].realtors += 1;
        }
      }
      for (var n = 0; n < this.realtorsNumInCities.length; n++) {
        if(this.realtors[i].city === this.realtorsNumInCities[n].name) {
          this.realtorsNumInCities[n].realtors += 1;
          this.realtorsNumInCities[n].position.lat = this.realtors[i].position.lat;
          this.realtorsNumInCities[n].position.lng = this.realtors[i].position.lng;
        }
      } 
    }
},

  mounted () {
    var self = this;
    this.$refs.Rmap.$mapPromise.then((map) => {
      map.mapTypeId = 'terrain';
      map.setOptions({ minZoom: 3.4, maxZoom: 9 });
      map.addListener('zoom_changed', function(){
      if(map.zoom >= 8) {
          self.zoomIn = 2;
        }else if (map.zoom >= 6 && map.zoom <= 7){
          self.zoomIn = 1;
        } else {
          self.zoomIn = 0;
        }
      });
      self.$on('cityClicked', function(){
        map.zoom = 8.9;
      });
      self.$on('stateClicked', function(){
        map.zoom = 5.9;
      });
      self.$on('resetZoom', function(){
        map.zoom = 3.4;
      });
      self.$root.$on('chooseState', function(city){
        self.realtorsNumInStates.map((el)=>{
          if(el.name === city) {
            self.zoomToState(el.position);
          }
        })
      })
    });
  },

   methods: {
    openSideBar(id) {
      this.$root.$emit('openSideBar', id);
    },
    zoomToState(statePosition) {
      this.$emit('stateClicked');
      this.center =  statePosition;
    },
    zoomToCity(cityPosition) {
      this.$emit('cityClicked');
      this.center =  cityPosition;
    },
    resetZoom() {
      this.$emit('resetZoom');
      this.center = {lat: 32.776665, lng: -96.796989};
    },
    closeStatesList() {
      this.$root.$emit('listInActive');
    }
  },
}