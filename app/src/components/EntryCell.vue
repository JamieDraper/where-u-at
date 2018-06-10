<template>
  <div class="" v-if="this.name">
  
    {{ this.name }}

    <img v-bind:src="'assets/home-icon.png' + '?v=2'" />
    
  </div>
</template>

<script>

export default {
  name: 'EntryCell',
  props: {
    name: String,
    location: String
  },
  data: function(){
    return {
      property: true,
      homeIconUrl: '/../assets/home-icon.png',
      officeIconUrl: String
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
