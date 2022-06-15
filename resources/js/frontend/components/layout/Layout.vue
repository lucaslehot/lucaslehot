<template>
  <div :class="`w-full h-full bg-${backgroundColor} flex flex-col items-center justify-center`">
    <slot></slot>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('display', ['backgroundColor']),
  },
}
</script>
