<template>
<div class="nav-bar">
    <div class="icon">
        <p class="name">RealtorFinder</p>
    </div>
    <div class="search-bar-container">
        <input placeholder="search state, city, Realtor name .. etc" class="search-bar" type="text">
    </div>
</div>
</template>
<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.nav-bar {
  width:100%;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  padding: 5px;
}
.search-bar-container {
 width: 50%;
 height: 100%;
}

.search-bar{
 width: 100%;
 height: 60%;
 border-radius: 50px;
 border: 1px solid black;
 padding: 0 5px;
 margin-top: 10px;
 margin-left: 30px;

}

.icon {
    width: 15%;
    height: 100%;
    display: table;
}

.name {
   display: table-cell;
   vertical-align: middle;
   font-size: 42px;
}

</style>