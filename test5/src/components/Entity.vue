<template>
  <a-entity v-bind="$vnode.data.attrs">
    <slot></slot>
  </a-entity>
</template>

<script>
  export default {
    name: "Entity"
  }
</script>