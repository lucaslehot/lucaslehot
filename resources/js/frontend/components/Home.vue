<template>
  <div class="w-full h-full">
    <layout>
      <lightbulb></lightbulb>
      <lightswitch></lightswitch>
    </layout>
    <div class="bg-primary-dark bg-primary-light"></div>
  </div>
</template>
<script>
import Layout from "./layout/Layout.vue"
import Lightswitch from "./lights/Lightswitch.vue"
import Lightbulb from "./lights/Lightbulb.vue"

export default {
  components: { 
    Layout, 
    Lightswitch,
    Lightbulb,
  },

  data() {
    return {
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>