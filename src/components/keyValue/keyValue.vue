<template>
<div class="key-value-container">
  <p class="key" :style="{fontSize:keySize, color:keyColor}"> {{keyProperty}}:</p>
  <p class="value" :style="{fontSize:valueSize, color:valueColor}"> {{value}} </p>
</div>
</template>
<script src="./keyValue.js"></script>
<style scoped src="./keyValue.css"></style>