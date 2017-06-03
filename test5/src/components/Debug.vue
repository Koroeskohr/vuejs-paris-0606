<template>
  <div v-if="displayed" id="debug-component">
    <h3>STATE</h3>
    <p v-for="{key, state} in stateItemsToWatch">
      <a @click.prevent="removeState(key)" href="#">&times; </a>
      {{key}} : <pre>{{ state }}</pre>
    </p>
    <input v-model="stateId" @keyup.enter="pushState">
    
    <h3>GETTERS</h3>
    <p v-for="{key, getter} in gettersToWatch">
      <a @click.prevent="removeGetter(key)" href="#">&times; </a>
      {{key}} : {{ getter }}
    </p>
    <input v-model="getterId" @keyup.enter="pushGetter">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Debug",
    data () {
      return {
        watchedGetters: [
          "textureCount"
        ],
        watchedState: [
          "assets.images"
        ],
        getterId: "",
        stateId: ""
      }
    },
    computed: {
      gettersToWatch () {
        return this.watchedGetters.map(k => Object.assign({}, { key: k, getter: this.getterAt(k) }))
      },
      stateItemsToWatch () {
        return this.watchedState.map(k => Object.assign({}, { key: k, state: this.stateAt(k) }))
      },
      displayed () {
        return this.$store.state.displayDebug
      }
    },
    methods: {
      stateAccessor(acc, key)  {
        let path = key.split(".")
        if (path.length == 1) return acc[path[0]]
        if (!acc.hasOwnProperty(path[0])) {
          return null
        }

        return this.stateAccessor(acc[path[0]], path.slice(1).join("."))
      },
      getterAt(key) {
        return this.$store.getters[key]
      },
      stateAt(key) {
        let state = this.stateAccessor(this.$store.state, key)
        if (state == null)
          throw "State doesnt exist !"
        return state
      },
      pushGetter() {
        if (!this.$store.getters.hasOwnProperty(this.getterId)) 
          return
        
        this.watchedGetters.push(this.getterId)
        this.getterId = ""
      },
      pushState() {
        if (this.stateAccessor(this.$store.state, this.stateId) == null) 
          return
        
        this.watchedState.push(this.stateId)
        this.stateId = ""
      },
      removeGetter(key) {
        let index = this.watchedGetters.indexOf(key)
        this.watchedGetters.splice(index, 1)
      },      
      removeState(key) {
        let index = this.watchedState.indexOf(key)
        this.watchedState.splice(index, 1)
      }
    }
  }
</script>

<style type="scss">
  #debug-component {
    width: 400px;
    height: 400px;
    background-color: white;
    position: fixed;
    top: 50px;
    left: 50px;
    opacity: 0.8;
    color: #555;
    z-index: 10;
    padding: 10px;
    overflow-y: scroll;

    p {
      margin: 0 0 10px 0;
    }

    a {
      cursor: pointer;
    }
  }
</style>