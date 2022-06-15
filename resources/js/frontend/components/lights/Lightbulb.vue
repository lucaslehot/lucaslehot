<template>
  <div class="h-4/6 flex items-center">
    <div 
      :class="[
        'rounded-full h-16 w-16 bg-primary-light transform flex items-center justify-center drop-shadow-lightbulb mt-16',
        lightOn ? 'animate-lightbulb' : 'opacity-0',
      ]"
    >
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('display', ['lightOn']),

  },

  methods: {
  }
}
</script>