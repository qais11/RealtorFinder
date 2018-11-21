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
                value-size="16px" 
                key-size="16px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"
                />
            
            <key-value key-property="Email"
                :value="realtor.email" 
                value-size="16px" 
                key-size="16px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"/>

            <key-value v-if="realtor.website" key-property="Website"
                :value="realtor.website" 
                value-size="16px" 
                key-size="16px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-web="true"
                is-value="true"/>

            <key-value v-if="realtor.cell" key-property="Cell"
                :value="realtor.cell" 
                value-size="16px" 
                key-size="16px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"
                is-phone="true"/>

            <key-value v-if="realtor.phone" key-property="Phone"
                :value="realtor.phone" 
                value-size="16px" 
                key-size="16px" 
                value-color="#35495e"
                key-color= "#42b883"
                is-value="true"
                is-phone="true"/>
                 <!-- #ff6403 -->
        </div>
        <section v-show="showEmailForm" class="side-bar__email-form">
            <email-form :realtor-name="realtor.name" :send-to="realtor.email" />
        </section>
        <section v-show="!showEmailForm">
            <email-has-been-sent :realtor-name="realtor.name"></email-has-been-sent>
        </section>
    </div>
</template>
<script src="./sideBar.js"></script>
<style scoped src="./sideBar.css"></style>
