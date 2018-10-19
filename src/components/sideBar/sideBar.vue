<template>
    <div class="container" v-bind:class="{'animate':open}">
        <div v-on:click="closeSideBar()" class="close-btn">
            X
        </div>
        <div class="image-container">
            <realtor-photo height="190px" width="190px" url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350"/>
        </div>
        <div class="info-container">
            <key-value key-property="Name"
                value="Mohammed Kadhim" 
                value-size="21px" 
                key-size="21px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"
                />

            <key-value key-property="Email"
                value="mohammed.realtor@gmail.com" 
                value-size="21px" 
                key-size="21px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"/>

            <key-value key-property="Cell"
                value="346.311.8824" 
                value-size="21px" 
                key-size="21px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"
                is-phone="true"/>

            <key-value key-property="Phone"
                value="214.731.3163" 
                value-size="21px" 
                key-size="21px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"
                is-phone="true"/>
                 <!-- #ff6403 -->
        </div>
    </div>
</template>
<script src="./sideBar.js"></script>
<style scoped src="./sideBar.css"></style>
