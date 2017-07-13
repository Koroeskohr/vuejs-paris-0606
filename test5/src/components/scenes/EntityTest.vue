<template>
  <a-entity>
    <Entity test="test" azeraze="azerazer">
      <Entity geometry="primitive: box;" material='color: blue;'></entity>
      <Entity geometry="primitive: box;" material='color: red;'></entity>
    </Entity>
  </a-entity>
</template>

<script>
import Entity from "../Entity"

  export default {
    name: "EntityTest",
    components: {
      Entity
    },
    data() {
      return {}
    }
  }
</script>