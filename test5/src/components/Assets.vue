<template>
  <a-assets>
    <img v-for="img in images" :src="require('assets/' + img.url)" :id="img.id" crossorigin="anonymous">
  </a-assets>
</template>

<script>
  import { distantAssets } from "../assets/distantAssets"

  export default {
    name: "Assets",
    data () {
      return {
        distantAssets: distantAssets
      }
    },
    computed: {
      images: function() {
        return this.$store.state.assets.images
      }
    },
    methods: {
      requireAsset: function (url) { 
        return `../assets/${url}` 
      },
      getImageFromDistantAssets: function(id) {
        if (!this.distantAssets.hasOwnProperty(id))
          throw `No image url for key ${id}`
          
        return {id: id, url: this.distantAssets[id]}
      }
    },
    mounted() {
      ["library"].map(key => 
        this.$store.dispatch('addImageAsset', this.getImageFromDistantAssets(key))
      )
    }
  }
</script>