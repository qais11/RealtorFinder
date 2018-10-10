export default {
    name: 'Nav',
    props: {
      msg: String,
      flag: Boolean
    },
    methods: {
      openSideBar() {
        this.$root.$emit('openSideBar');
      }
    }
  }