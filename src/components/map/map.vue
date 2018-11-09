<template>
  <div id="map">
    <button v-if="zoomIn > 0" class="reset-btn" v-on:click="resetZoom()">Reset Zoom</button>
    <GmapMap
      ref="Rmap"
      width="100%"
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      :style="styles"
      :options="mapOptions"
      @click.native="closeStatesList()"
    >
    <gmap-custom-marker
    v-if="zoomIn === 1"
    v-for="(realtor, index) in realtors" 
    @click.native="openSideBar(realtor)"
    :marker="realtor.position"
    :center="center"
    :key="index" 
    >
      <realtor-photo height="30px" width="30px" :zIndex="realtor.id" :url="realtor.url"/>
    </gmap-custom-marker>

    <gmap-custom-marker
    @click.native="zoomToState(num.position)" 
    v-else-if="zoomIn < 1"
    v-for="(num, index) in realtorsNumInStates" 
    :marker="num.position"
    :center="center"
    :key="num[index]" 
    >
      <realtor-photo height="30px" width="30px" :num="num.realtors" url="https://www.colorhexa.com/2c3e50.png"/>
    </gmap-custom-marker>

    </GmapMap>
  </div>
</template>
<script src="./map.js"></script>
<style scoped src="./map.css"></style>

