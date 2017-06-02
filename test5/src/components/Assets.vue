<template>
  <a-assets>
    <img v-for="img in images" src="img" crossorigin="anonymous">
  </a-assets>
</template>

<script>
  import distantAssets from "../assets/distantAssets"

  export default {
    name: "Assets",
    data() {

    },
    computed: {
      images: function() {
        this.$store.assets.images
      }
    },
    methods: {
      getImageUrlFromDistantAssets: function(id) {
        if (!distantAssets.hasOwnProperty(id))
          throw "No image url for key ${id}"
          
        return distantAssets[id]
      }
    },
    mounted() {
      ["library"].map(key => 
        this.$store.dispatch('addImageAsset', getImageUrlFromDistantAssets(key))
      )
    }
  }
</script>