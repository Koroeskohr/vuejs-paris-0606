<template>
  <a-scene>
    <assets></assets>
    <scene-test></scene-test>
    <scene-test-2></scene-test-2>
  </a-scene>
</template>

<script>
  import Assets from 'components/Assets'
  import SceneTest from 'components/scenes/SceneTest'

  export default {
    name: "Renderer",
    components: {
      "assets": Assets,
      "scene-test": SceneTest,
      "scene-test-2": SceneTest
    },
    data() {
      return {}
    }
  }
</script>