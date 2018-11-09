<template>
<div v-on:click="closeSideBar()" class="nav-bar">
        <div class="icon">
            <key-value key-property="RealtorFinder"
                    key-size="32px" 
                    key-color= "#42b883"
                    no-value="false"
                    keyFont="'Kaushan Script', cursive"/>
        </div>
        <div class="dropdown-container">
            <p v-on:click="openList" class="dropdown">
                {{city}}
            </p>
        </div>
        <div v-show="listActive" class="dropdown-content">
            <button v-on:click="chooseState(city)" class="city" v-for="(city, index) in cities" :key="index"> 
                {{city}} 
            </button>
        </div>
</div>
</template>
<script src="./nav.js"></script>
<style scoped src="./nav.css"></style>