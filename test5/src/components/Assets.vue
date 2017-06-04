<template>
  <a-assets>
    <img v-for="img in images" :src="require('assets/' + img.url)" :id="img.id" crossorigin="anonymous">
  </a-assets>
</template>

<script>
  import { assets } from "../assets"

  export default {
    name: "Assets",
    data () {
      return {
        assets: assets
      }
    },
    computed: {
      images: function() {
        return this.$store.state.assets.images
      }
    },
    methods: {
      getImageFromAssets: function(id) {
        if (!this.assets.hasOwnProperty(id))
          throw `No image url for key ${id}`
          
        return {id: id, url: this.assets[id]}
      }
    },
    mounted() {
      Object.keys(this.assets).map(key => 
        this.$store.dispatch('addImageAsset', this.getImageFromAssets(key))
      )
    }
  }
</script>