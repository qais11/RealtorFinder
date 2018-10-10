export default {
    name: 'SideBar',
    props: {
      msg: String,
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