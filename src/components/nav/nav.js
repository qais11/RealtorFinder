import KeyValue from '../keyValue/keyValue.vue'

export default {
  name: "Nav",
  props: {
    msg: String,
  },
  data() {
    return {
      cities: ['texas', 'florida', 'california', 'new jersey'],
      city: 'States',
      listActive: null,
      continueAsGuest: false
    }
  },
  components: {
    KeyValue,
  },
  mounted() {
    var self = this;
    this.$root.$on('listInActive', function(){
      self.listActive = false;
    });
    this.$root.$on('continueAsGuest', function(){
      self.continueAsGuest = true;
    });
  },
  methods: {
    closeSideBar() {
      this.$root.$emit("closeSideBar");
    },
    openList() {
      this.listActive = true;
    },
    chooseState(state) {
      this.$root.$emit('chooseState', state);
      this.listActive = false;
    }
  }
};