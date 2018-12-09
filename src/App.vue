<template>
  <div id="app">
    <Nav/>
    <side-bar v-on:openSideBar="openSideBar()"></side-bar>
    <Map/>
    <div ref="popUp"> 
      <Info/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/nav/nav.vue'
import SideBar from './components/sideBar/sideBar.vue'
import Map from './components/map/map.vue'
import Info from './components/infoPopUp/info.vue'
import Footer from './components/Footer/Footer.vue'


export default {
  name: 'app',
  components: {
    Nav,
    SideBar,
    Map,
    Info,
    Footer
  },
  data() {
    return {
    }
  },
  created() {
    var self = this;
    this.$root.$on('continueAsGuest', function(canceled){
      if(canceled) {
        self.$refs["popUp"].classList.add('close')
      } else {
        self.$refs["popUp"].classList.add('fadeout')
        setTimeout(() => {
          self.$refs["popUp"].classList.add('close')
        }, 2000);
      }
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script');
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}

.fadeout {
  transition: 2s;
  opacity: 0;
}
.close {
  display: none;
}
a {
  text-decoration: none;
  color: #0383d1
}
a:hover {
  text-decoration: underline;
  cursor: pointer;
}

*::placeholder { 
    opacity: 1;
    color: #c5c4c4;
    font-weight: 100
}

*:-ms-input-placeholder { 
    color: #c5c4c4;
    font-weight: 100
}

*::-ms-input-placeholder { 
    color: #c5c4c4;
    font-weight: 100
}
</style>
