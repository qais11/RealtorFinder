import RealtorPhoto from '../photo/photo.vue'
import KeyValue from '../keyValue/keyValue.vue'

export default {
    name: 'SideBar',
    props: {
      msg: String,
    },
    components: {
        RealtorPhoto,
        KeyValue
      },
    data: function(){
        return {
          open:false,
        }
    },
    methods: {
        closeSideBar() {
            this.open = false;
        },
        openSideBar() {
            this.open ^= true;
        }
    },
    mounted() {
        this.$root.$on("openSideBar", this.openSideBar);
    }

  }