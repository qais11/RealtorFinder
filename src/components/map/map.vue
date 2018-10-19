<template>
  <div id="map">
    <GmapMap
      width="100%"
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      :style="styles"
      v-on:click="openSideBar()"
    >
    <gmap-custom-marker
    :marker="positions[index]"
    :center="center"
    :key="index" 
    v-for="(link, index) in links" 
    >
    <realtor-photo height="30px" width="30px" :zIndex="index" :url="link"/>
    </gmap-custom-marker>

    </GmapMap>
  </div>
</template>
<script src="./map.js"></script>
<style scoped src="./map.css"></style>

  // <GmapMarker
  //     :key="index"
  //     v-for="(m, index) in markers"
  //     :position="m.position"
  //     :clickable="true"
  //     :draggable="false"
  //     @click="center=m.position"
  //     v-on:click="openSideBar()"
  //     :icon="m.icon"
  //   />