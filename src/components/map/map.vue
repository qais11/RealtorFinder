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
    @click.native="zoomToState(num.position)" 
    v-for="(num, index) in realtorsNumInStates" 
    v-if="zoomIn < 1"
    :marker="num.position"
    :center="center"
    :key="num[index]" 
    >
      <realtor-photo height="30px" width="30px" :num="num.realtors" url="https://www.colorhexa.com/2c3e50.png"/>
    </gmap-custom-marker>

    <gmap-custom-marker
    v-else-if="zoomIn === 2"
    v-for="(realtor, index) in realtors" 
    @click.native="openSideBar(realtor)"
    :marker="realtor.position"
    :center="center"
    :key="realtor[index]" 
    >
        <realtor-photo height="30px" width="30px" :zIndex="realtor.id" :url="realtor.url"/>
    </gmap-custom-marker>

    <gmap-custom-marker
    @click.native="zoomToCity(num.position)" 
    v-for="(num, index) in realtorsNumInCities" 
    v-else-if="zoomIn === 1"
    :marker="num.position"
    :center="center"
    :key="num.id" 
    >
      <realtor-photo height="30px" width="30px" :num="num.realtors" url="http://www.safascorp.com/images/cc/bc/11.jpg"/>
    </gmap-custom-marker>

    </GmapMap>
  </div>
</template>
<script src="./map.js"></script>
<style scoped src="./map.css"></style>

