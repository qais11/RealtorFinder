<template>
    <div class="container">
        <div class="form-container">
            <p>Help us serve you better</p>
            <p>Please tell us about your self</p>
            <input class="input" type="text" placeholder="email"> <span>Optional</span>
            <input class="input" type="text" placeholder="phone"> <span>Optional</span>
            <input class="input" type="text" placeholder="city"> <span>Optional</span>
            <div class="buttons">
                <input class="submit-btn" type="button" value="Submit">
                 <input class="continue-btn" v-on:click="close" type="button" value="Continue as a Guest">
            </div>
        </div>
    </div>
</template>
<script src="./info.js"></script>
<style scoped src="./info.css"></style>