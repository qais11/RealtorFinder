<template>
<div v-on:click="closeSideBar()" class="nav-bar">
    <div class="icon">
         <key-value key-property="RealtorFinder"
                   key-size="32px" 
                   key-color= "#42b883"
                   no-value="false"
                   keyFont="'Kaushan Script', cursive"/>
    </div>
    <div class="search-bar-container">
        <input placeholder="search state, city, Realtor name .. etc" class="search-bar" type="text">
    </div>
</div>
</template>
<script src="./nav.js"></script>
<style scoped src="./nav.css"></style>