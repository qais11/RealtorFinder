import axios from 'axios';

export default {
    name: 'Info',
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
            city: null,
            infoSubmitted: false
        }
    },
    methods: {
        continueAsGuest(canceled = false) {
            this.$root.$emit('continueAsGuest' , canceled);
        },

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
                this.infoSubmitted = true
                this.continueAsGuest();
                this.message = null;
            } catch (e) {
                /* eslint-disable */
                this.isLoading = false;
                this.error = '*Sorry, we are facing technical difficulties, there was an error sending your information';
                console.log(e)
            }
        },
        buildEmailObject() {
            return {
                to: 'info.realtor.finder@gmail.com',
                realtorName: 'RealtorFinder Team',
                message: `somone has submitted there information in ${this.city}`,
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