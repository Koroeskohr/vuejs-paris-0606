<template>
  <div id="main">
    <debug></debug>
    <renderer></renderer>
  </div>
</template>

<script>
  import Renderer from "components/Renderer"
  import Debug from "components/Debug"

  export default {
    name: "Main",
    components: {
      "renderer": Renderer,
      "debug": Debug
    }
  }
</script>