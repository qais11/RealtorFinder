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
          margin: 'auto'
        }
      ],
      zoom: 3.4,
      realtors: Data.Data,
      statesPositions: [
        {lat: 31.968599, lng:  -99.901810 },
        {lat: 27.664827, lng:  -81.515755 },
        {lat: 36.778259, lng:  -119.417931 },
      ],
      mapOptions: {
        disableDefaultUI : true,
        gestureHandling: 'greedy',
      },
      realtorsNumbers: [2,1,1]
    }  
  },
  mounted () {
    var self = this;
    this.$refs.Rmap.$mapPromise.then((map) => {
      map.mapTypeId = 'terrain';
      map.setOptions({ minZoom: 3.4, maxZoom: 8 });
      map.addListener('zoom_changed', function(){
        if(map.zoom >= 6) {
          self.zoomIn = 1;
        }else {
          self.zoomIn = 0;
        }
      });
      self.$on('stateClicked', function(){
        map.zoom = 5.9;
      });
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
  }
}