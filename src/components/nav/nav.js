import KeyValue from '../keyValue/keyValue.vue'

export default {
  name: "Nav",
  props: {
    msg: String,
  },
  data() {
    return {
      cities: ['texas', 'florida', 'california', 'arkansas', 'chicago', 'arizona'],
      city: 'states',
      listActive: null,
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