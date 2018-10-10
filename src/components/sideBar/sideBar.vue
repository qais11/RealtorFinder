<template>
    <div class="container" v-bind:class="{'animate':open}">
        <div v-on:click="closeSideBar()" class="close-btn">
            X
        </div>
    </div>
</template>
<script src="./sideBar.js"></script>
<style  scopped src="./sideBar.css"></style>
