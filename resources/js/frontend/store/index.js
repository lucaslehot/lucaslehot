
import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import display from './display';

Vue.use(Vuex);

export const modules = {
  user,
  display,
};

export const store = new Vuex.Store({ modules });