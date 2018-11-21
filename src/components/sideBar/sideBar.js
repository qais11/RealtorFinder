
import RealtorPhoto from '../photo/photo.vue';
import KeyValue from '../keyValue/keyValue.vue';
import EmailForm from '../EmailForm/EmailForm.vue'
import EmailHasBeenSent from '../EmailHasBeenSent/EmailHasBeenSent.vue'

export default {
    name: 'SideBar',
    props: {
        msg: String,
    },
    components: {
        RealtorPhoto,
        KeyValue,
        EmailForm,
        EmailHasBeenSent
    },
    data: function(){
        return {
            showEmailForm: true,
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
            this.$root.$emit('ClearForm');
            this.$root.$emit('showEmailForm', true);
        }
    },
    mounted() {
        this.$root.$on("openSideBar", this.openSideBar);
        this.$root.$on("closeSideBar", this.closeSideBar);
        this.$root.$on('showEmailForm', payload => {
            this.showEmailForm = payload;
        });
    }

}