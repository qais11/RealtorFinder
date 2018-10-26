<template>
    <div class="container" v-bind:class="{'animate':open}">
        <div v-on:click="closeSideBar()" class="close-btn">
            X
        </div>
        <div class="image-container">
            <realtor-photo height="190px" width="190px" :url="realtor.url"/>
        </div>
        <div class="info-container">
            <key-value key-property="Name"
                :value="realtor.name" 
                value-size="21px" 
                key-size="21px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"
                />

            <key-value key-property="Email"
                :value="realtor.email" 
                value-size="21px" 
                key-size="21px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"/>

            <key-value key-property="Cell"
                :value="realtor.cell" 
                value-size="21px" 
                key-size="21px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"
                is-phone="true"/>

            <key-value key-property="Phone"
                :value="realtor.phone" 
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
