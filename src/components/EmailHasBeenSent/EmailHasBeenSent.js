export default {
    props: {
        realtorName: String
    },
    methods: {
        sendAnotherEmail() {
            this.$root.$emit('showEmailForm', true);
        }
    }
}