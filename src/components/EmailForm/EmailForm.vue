<template>
    <div>
        <form @submit.prevent="submit">
            <h4>Contact Me</h4>
            <div class="email-form-wrapper">
                <label>
                    From: <input v-model="email" type="email" placeholder="Your email address">
                </label>
                <label>
                    Phone #: <input v-model="phone" type="number" placeholder="Your phone number">
                </label>
                <textarea v-model="message" cols="30" rows="10" placeholder="Your message here ..." required></textarea>
                <div v-if="error">
                    <p class="form-error">{{ error }}</p>
                </div>
                <img v-show="isLoading" class="loading" src="../../img/loading.gif" alt="loading ..."> 
            </div>
            <button :disabled="isLoading" type="submit">Send Email</button>
        </form>  
    </div>
</template>
<style lang="scss" src="./EmailForm.scss" scoped></style>
<script src="./EmailForm.js"></script>



