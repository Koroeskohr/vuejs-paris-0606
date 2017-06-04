<template>
  <a-entity>
    <a-sky material="src: #library;"></a-sky>
    <a-box position="2 0 -5" material="color: red;"> </a-box>
    <a-camera position="0 0 0">
      <a-box position="0 0 -5" material="color: blue;">
        <a-animation 
          attribute="rotation" 
          dur="4000"
          to="0 360 0"
          repeat="indefinite"
          easing="linear"
          ></a-animation>
          <a-animation 
            attribute="position" 
            dur="1000"
            from="0 -0.5 -5"
            to="0 0.5 -5"
            direction="alternate"
            repeat="indefinite"
            easing="ease-sine"
            ></a-animation>
      </a-box>
    </a-camera>
  </a-entity>
</template>

<script>
  export default {
    name: "SceneTest",
    data() {
      return {}
    }
  }
</script>