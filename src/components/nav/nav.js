import KeyValue from '../keyValue/keyValue.vue'

export default {
    name: 'Nav',
    props: {
      msg: String,
      flag: Boolean
    },
    components: {
      KeyValue,
    },
    methods: {
      // openSideBar() {
      //   this.$root.$emit('openSideBar');
      // }
    }
  }