<template>

    <div class="info-popup__wrapper">
        <h1 class="infoSubmitted" v-if="infoSubmitted">Thank You!!</h1>
        <form v-if="!infoSubmitted" class="form" @submit.prevent="submit">
            <h3>Help us serve you better and tell us about yourself</h3>
            <h4>note: This information are optional and not necessarily required,
            it helps Realtors to have a better idea about the realstate market.</h4>
            <div class="email-form-wrapper">
                <label>
                    Name: <input type="text" placeholder="Your email address" required>
                </label>
                <label>
                    Email: <input v-model="email" type="email" placeholder="Your email address">
                </label>
                <label>
                    Phone #: <input v-model="phone" type="number" placeholder="Your phone number">
                </label>
                <label>
                    City, State : <input v-model="city" type="text" placeholder="City or State" required>
                </label>
                <div v-if="error">
                    <p class="form-error">{{ error }}</p>
                </div>
                <img v-show="isLoading" class="loading" src="../../img/loading.gif" alt="loading..."> 
            </div>
            <button type="submit">Submit</button>
            <button type="button" class="continue-btn" v-on:click="continueAsGuest(true)">Cancel</button>
        </form>
    </div>
</template>
<script src="./info.js"></script>
<style scoped  lang="scss" src="./info.scss"></style>