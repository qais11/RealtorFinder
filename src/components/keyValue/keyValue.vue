<template>
<div class="key-value-container">
  <p class="key" :style="{fontSize:keySize, color:keyColor, fontFamily: keyFont}">{{keyProperty}}</p>
  <p class="key" v-show="isValue" :style="{fontSize:keySize, color:keyColor}">:</p> 
  <p class="value" v-show="isValue && !isPhone" :style="{fontSize:valueSize, color:valueColor, fontFamily: valueFont}"> {{value}} </p>
  <a v-show="isPhone" :href="'tel:'+ value ">{{value}}</a>
</div>
</template>
<script src="./keyValue.js"></script>
<style scoped src="./keyValue.css"></style>