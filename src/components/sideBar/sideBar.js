
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
        realtor: {
            url:'',
            name:'',
            email:'',
            cell:'',
            phone:'',
            id:''
        }
        }
    },
    methods: {
        closeSideBar() {
            this.open = false;
        },
        openSideBar(realtor) {
            this.open ^= true;
            this.realtor = realtor;
            
        }
    },
    mounted() {
        this.$root.$on("openSideBar", this.openSideBar);
        this.$root.$on("closeSideBar", this.closeSideBar);
    }

}