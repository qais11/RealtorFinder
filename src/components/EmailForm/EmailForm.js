
import axios from 'axios';

export default {
    props: {
        sendTo: String,
        realtorName: String
    },
    data() {
        return {
            isLoading: false,
            error: null,
            email: null,
            phone: null,
            message: null,
        }
    },
    methods: {
        submit() {
            if (this.validateFormAndShowHideErrors()) {
                this.isLoading = true;
                this.sendEmail();
            }
        },
        validateFormAndShowHideErrors () {
            this.error = null;
            if (this.phone && (this.phone.length < 10 || this.phone.length > 13)) {
                this.error = '*please enter a valid US phone number'
            } else if (this.email || this.phone) {
                return true;
            } else {
                this.error = '*please enter eather your phone number or your email address';
            }
        },
        async sendEmail() {
            try {
                await axios.post(`/sendEmail`, this.buildEmailObject());
                this.isLoading = false;
                this.$root.$emit('showEmailForm', false);
                this.message = null;
            } catch (e) {
                /* eslint-disable */
                this.isLoading = false;
                this.error = '*Sorry, we are facing technical difficulties, there was an error sending the email';
                console.log(e)
            }
        },
        buildEmailObject() {
            return {
                to: this.sendTo,
                realtorName: this.realtorName,
                message: this.message,
                userPhone: this.phone,
                userEmail: this.email,
            }
        }
    },
    mounted() {
        this.$root.$on('ClearForm', () => {
            this.message = null;
            this.error = null;
        });;
    }
}