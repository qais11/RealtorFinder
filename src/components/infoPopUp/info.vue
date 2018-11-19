<template>
    <form class="form">
        <h3>Help us serve you better and tell us about yourself</h3>
        <h4>note: This information are optional and not necessarily required,
        it helps Realtors to have a better idea about the realstate market.</h4>
        <div class="email-form-wrapper">
             <label>
                Name: <input type="text" placeholder="Your email address">
            </label>
            <label>
                Email: <input type="text" placeholder="Your email address">
            </label>
            <label>
                Phone #: <input type="text" placeholder="Your phone number">
            </label>
             <label>
                City State : <input type="text" placeholder="City or State">
            </label>
        </div>
        <button type="submit">Submit</button>
        <button type="button" class="continue-btn" v-on:click="continueAsGuest()">Continue as Guest</button>
    </form>
</template>
<script src="./info.js"></script>
<style scoped  lang="scss" src="./info.scss"></style>