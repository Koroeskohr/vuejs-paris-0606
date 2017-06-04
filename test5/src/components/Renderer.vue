<template>
  <a-scene :debug="debug">
    <assets></assets>
    <component :is="currentScene"></component>
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
    computed: {
      currentScene() {
        return this.$store.state.currentScene
      },
      debug() {
        return this.$store.state.settings.debug
      }
    },
    data() {
      return {}
    }
  }
</script>