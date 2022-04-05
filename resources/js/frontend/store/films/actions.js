import axios from 'axios';
import {
  SET_RESULT,
} from './mutationTypes';

export default {
  async getFilms({ commit , state: { orderBy, limit, offset } }) {
    const { data } = await axios.get('/api/films', {
      params: {
        orderBy,
        limit,
        offset,
      },
    });

    commit(SET_RESULT, data);
  },
};