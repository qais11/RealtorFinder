export default {
    name: 'Info',
    props: {
      
    },
    methods: {
        continueAsGuest() {
            this.$root.$emit('continueAsGuest');
        }
    }
  }