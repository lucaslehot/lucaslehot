
import Vue from 'vue';
import Vuex from 'vuex';

import films from './films';

Vue.use(Vuex);

export const modules = {
  films,
};

export const store = new Vuex.Store({ modules });