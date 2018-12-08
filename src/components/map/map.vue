<template>
  <div id="map">
    <button v-show="zoom > 3" class="reset-btn" v-on:click="resetZoom()">Reset Zoom</button>
    <GmapMap ref="Rmap" width="100%" :center="center" :zoom="zoom" map-type-id="terrain" :style="styles" :options="mapOptions"
      @click.native="closeStatesList()">

      <gmap-custom-marker @click.native="zoomToState(state.position)" :key="'b-' + index" v-for="(state, index) in realtorsNumInStates"
        v-show="zoom <= 5" :marker="state.position">
        <realtor-photo height="30px" width="30px" bcolor="#040787" :num="state.realtors" url="" />
      </gmap-custom-marker>

      <gmap-custom-marker @click.native="zoomToCity(num.position)" :key="num[i]" v-for="(num, i) in realtorsNumInCities"
        v-show="zoom >= 6 && zoom <= 7" :marker="num.position">
        <!-- here -->
          <!-- <div class='pin'></div> -->
          <span class="beacon">
            <div class="realtors-city-count">{{num.realtors}}</div>
          </span>
        <!-- <div class="city-marker"> -->

          <!-- <realtor-photo height="30px" width="30px" bcolor="#001800" :num="num.realtors" url="" /> -->
        <!-- </div> -->
      </gmap-custom-marker>

      <gmap-custom-marker @click.native="openSideBar(realtor)" v-show="zoom >= 8" :key='realtor.cell' v-for="realtor in realtors"
        :marker="realtor.position">
        <realtor-photo height="30px" width="30px" :url="realtor.thumbnail" />
      </gmap-custom-marker>

    </GmapMap>
  </div>
</template>
<script src="./map.js"></script>
<style scoped src="./map.css"></style>