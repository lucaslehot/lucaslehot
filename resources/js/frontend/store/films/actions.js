import axios from 'axios';
import {
  SET_RESULT,
  SET_TOTAL,
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

    commit(SET_RESULT, data.films);
    commit(SET_TOTAL, data.totalResults[0].count);
  },
};