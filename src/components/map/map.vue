<template>
<div>
<GmapMap
  :center="{lat:37.090240, lng:-95.712891}"
  :zoom="4"
  map-type-id="terrain"
  style="width: 800px; height: 800px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
    v-on:click="openSideBar()"
  />
</GmapMap>
</div>
</template>
<script src="./map.js"></script>
<style scoped src="./map.css"></style>

