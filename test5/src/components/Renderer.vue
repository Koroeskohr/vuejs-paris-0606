<template>
  <a-scene>
    <assets></assets>
  </a-scene>
</template>

<script>
  import Assets from 'components/assets'

  export default {
    name: "Renderer",
    components: Assets,
    data() {
      return {}
    }
  }
</script>