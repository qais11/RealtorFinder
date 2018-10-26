<template>
  <div id="map">
    <GmapMap
      ref="Rmap"
      width="100%"
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      :style="styles"
      :options="mapOptions"
    >
    <gmap-custom-marker
    v-if="zoomIn === 1"
    v-for="(realtor, index) in realtors" 
    @click.native="openSideBar(realtor)"
    :marker="realtor.position"
    :center="center"
    :key="index" 
    >
      <realtor-photo height="30px" width="30px" :zIndex="index" :url="realtor.url"/>
    </gmap-custom-marker>

    <gmap-custom-marker
    v-else-if="zoomIn < 1"
    v-for="(realtorsNum, index) in statesPositions" 
    :marker="statesPositions[index]"
    :center="center"
    :key="index" 
    >
      <realtor-photo height="30px" width="30px" :num="realtorsNumbers[index]" url="https://www.colorhexa.com/2c3e50.png"/>
    </gmap-custom-marker>

    </GmapMap>
  </div>
</template>
<script src="./map.js"></script>
<style scoped src="./map.css"></style>

