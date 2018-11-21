
export default {
    props: {
        sendTo: String
    },
    data() {
        return {
            error: null,
            email: null,
            phone: null,
            message: null
        }
    },
    methods: {
        submit() {
            if (this.checkForm()) {
                console.log(this.buildEmailObject());
                // fetch('/sendEmail', this.buildEmailObject() )
            }
        },
        checkForm: function () {
            this.error = null;
            if (this.phone && (this.phone.length < 10 || this.phone.length > 13)) {
                this.error = '*please enter a valid US phone number'
            } else if (this.email || this.phone) {
                return true;
            } else {
                this.error = '*please enter eather your phone number or your email address';
            }
        },
        buildEmailObject() {
            return {
                from: this.email,
                to: this.sendTo,
                phone: this.phone,
                message: this.message
            }
        }
    },
    mounted() {
        this.$root.$on('ClearForm', () => {
            this.message = null;
        });

    }
}