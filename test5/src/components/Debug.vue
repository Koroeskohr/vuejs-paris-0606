<template>
  <div v-if="displayed" id="debug-component">
    <h3>SCENE</h3>
    <input v-model="sceneId" @keyup.enter="$store.dispatch('loadScene', sceneId)" placeholder="Load scene...">
    
    <h3>STATE</h3>
    <p v-for="{key, state} in stateItemsToWatch">
      <a @click.prevent="removeState(key)" href="#">&times; </a>
      {{key}} : <pre>{{ state }}</pre>
    </p>
    <input v-model="stateId" @keyup.enter="pushState" placeholder="Add state...">
    
    <h3>GETTERS</h3>
    <p v-for="{key, getter} in gettersToWatch">
      <a @click.prevent="removeGetter(key)" href="#">&times; </a>
      {{key}} : {{ getter }}
    </p>
    <input v-model="getterId" @keyup.enter="pushGetter" placeholder="Add getter...">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { propertyAccessor } from 'utils'
  import { sortBy } from 'lodash'

  export default {
    name: "Debug",
    data () {
      return {
        watchedGetters: [
          "textureCount"
        ],
        watchedState: [
          "currentScene",
          "settings"
        ],
        getterId: "",
        stateId: "",
        sceneId: ""
      }
    },
    computed: {
      gettersToWatch () {
        let getters = this.watchedGetters.map(k => Object.assign({}, { key: k, getter: this.getterAt(k) }))
        return _.sortBy(getters, _.property("key"))
      },
      stateItemsToWatch () {
        let states = this.watchedState.map(k => Object.assign({}, { key: k, state: this.stateAt(k) }))
        return _.sortBy(states, _.property("key"))
      },
      displayed () {
        return this.$store.state.settings.debug
      }
    },
    methods: {
      getterAt(key) {
        return this.$store.getters[key]
      },
      stateAt(key) {
        let state = propertyAccessor(this.$store.state, key)
        if (state == null)
          throw "State doesnt exist !"
        return state
      },
      pushGetter() {
        if (!this.$store.getters.hasOwnProperty(this.getterId)) 
          return
        if (this.watchedGetters.includes(this.getterId))
          return
        
        this.watchedGetters.push(this.getterId)
        this.getterId = ""
      },
      pushState() {
        if (propertyAccessor(this.$store.state, this.stateId) == null) 
          return
        if (this.watchedState.includes(this.stateId))
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