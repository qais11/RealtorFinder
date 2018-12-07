<template>
    <div class="image-container" :style="{width:width, height: height, zIndex: zIndex, backgroundColor: bcolor ,'background-image': 'url(' + url + ')'}">
        <p class="number">{{num}}</p>
    </div>
</template>
<script src="./photo.js"></script>
<style scoped src="./photo.css"></style>