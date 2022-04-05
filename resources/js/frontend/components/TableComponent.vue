<template>
  <div>
    <div>
      <select 
        class="form-select mb-3" 
        aria-label="Résultats par page"
        @change="updatelimit"
        v-model="limitTemp"
      >
        <option selected value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            <div 
              class="custom-hover-button text-decoration-none text-light"
              @click="sortByTitle"
            >
              Titre {{ titleArrow }}
            </div>
          </th>
          <th scope="col">
            Prix
          </th>
          <th scope="col">
            Classement
          </th>
          <th scope="col">
            <div 
              class="custom-hover-button text-decoration-none text-light"
              @click="sortByGenre"
            >
              Genre {{ genreArrow }}
            </div>
          </th>
          <th scope="col">
            <div 
              class="custom-hover-button text-decoration-none text-light"
              @click="sortByRental"
            >
              Nombre de locations {{ rentalArrow }}
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
          <tr v-for="film in result" :key="film.title">
            <th scope="row">{{film.title}}</th>
            <td>{{film.rental_rate}}</td>
            <td>{{film.rating}}</td>
            <td>{{film.name}}</td>
            <td>{{film.count}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { SET_ORDER_BY, SET_LIMIT, SET_OFFSET } from '../store/films/mutationTypes';

export default {
  data() {
    return {
      limitTemp: 10,
    }
  },

  async created(){
    await this.getFilms();
    console.log(this.result);
  },

  computed: {
    ...mapState('films', ['orderBy', 'limit', 'offset', 'result']),

    titleArrow() {
      if(this.orderBy == 'query1.title asc') {
        return '▲';
      } else if (this.orderBy == 'query1.title desc') {
        return '▼';
      }
      return '';
    },

    genreArrow() {
      if(this.orderBy == 'query1.name asc') {
        return '▲';
      } else if (this.orderBy == 'query1.name desc') {
        return '▼';
      }
      return '';
    },

    rentalArrow() {
      if(this.orderBy == 'query2.count asc') {
        return '▲';
      } else if (this.orderBy == 'query2.count desc') {
        return '▼';
      }
      return '';
    },
  },

  methods: {
    ...mapMutations('films', [SET_ORDER_BY, SET_LIMIT, SET_OFFSET]),
    ...mapActions('films', ['getFilms']),

    sortByTitle(){
      this.orderBy == 'query1.title asc' ? 
        this[SET_ORDER_BY]('query1.title desc') :
        this[SET_ORDER_BY]('query1.title asc');

      this.getFilms();
    },

    sortByGenre(){
      this.orderBy == 'query1.name asc' ? 
        this[SET_ORDER_BY]('query1.name desc') :
        this[SET_ORDER_BY]('query1.name asc');

      this.getFilms();
    },

    sortByRental(){
      this.orderBy == 'query2.count asc' ? 
        this[SET_ORDER_BY]('query2.count desc') :
        this[SET_ORDER_BY]('query2.count asc');

      this.getFilms();
    },

    updatelimit(){
      this[SET_LIMIT](this.limitTemp);

      this.getFilms();
    },
  }
}
</script>
<style scoped>
.custom-hover-button {
  cursor: pointer;
  transition: color 0.2s ease;
}

.custom-hover-button:hover {
  color: #b7c0c8 !important;
}
</style>