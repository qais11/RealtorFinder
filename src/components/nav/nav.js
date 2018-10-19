import KeyValue from '../keyValue/keyValue.vue'

export default {
  name: "Nav",
  props: {
    msg: String,
  },
  components: {
    KeyValue
  },
  methods: {
    closeSideBar() {
      this.$root.$emit("closeSideBar");
    }
  }
};