
import {
  SET_LIGHT_ON,
  SET_BACKGROUND_COLOR,
} from './mutationTypes';

export default {
  [SET_LIGHT_ON]: (state, value) => {
    state.lightOn = value;
  },
  
  [SET_BACKGROUND_COLOR]: (state, value) => {
    state.backgroundColor = value;
  }
};
