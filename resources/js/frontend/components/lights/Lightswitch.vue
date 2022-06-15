<template>
  <div 
    :class="[
      'rounded-md h-16 w-8 border-primary-light border-2 flex flex-col items-center py-1 cursor-pointer relative',
      this.lightOn && 'animate-lightSwitch',
    ]"
    @click="toggleLight"
  >
    <div 
      :class="[
        'absolute transition-opacity duration-500', 
        lightOn ? 'opacity-0' : 'opacity-100'
      ]"
    >
      <div 
        class="rounded-md h-16 w-8 border-2 -mt-1.5 animate-ping"
      ></div>
    </div>
    <div 
      :class="[
        'bg-primary-light h-6 w-5 rounded transition-all absolute',
        lightOn ? 'top-1' : 'top-8',
      ]"
    ></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { SET_LIGHT_ON, SET_BACKGROUND_COLOR} from '../../store/display/mutationTypes';

export default {
  computed: {
    ...mapState('display', ['lightOn']),

  },

  methods: {
    ...mapMutations('display', {
      setLightOn: SET_LIGHT_ON,
      setBackgroundColor: SET_BACKGROUND_COLOR,
    }),


    toggleLight() {
      this.setLightOn(true);
      setTimeout(() => {
        this.setBackgroundColor('primary-light');
      }, 4000);
    },
  }
}
</script>