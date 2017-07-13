<template>
  <a-scene :debug="debug">
    <assets></assets>
    <component :is="currentScene" id="currentScene"></component>
  </a-scene>
</template>

<script>
  import Assets from 'components/Assets'
  import SceneTest from 'components/scenes/SceneTest'
  import SceneTestTwo from 'components/scenes/SceneTestTwo'
  import EntityTest from 'components/scenes/EntityTest'

  export default {
    name: "Renderer",
    components: {
      "assets": Assets,
      "scene-test": SceneTest,
      "scene-test-two": SceneTestTwo,
      "entity-test": EntityTest,
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