<template>
  <div>
    <div class="d-flex flex-row justify-content-between">
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
      
      <div class="d-flex flex-row mb-3">
        <div 
          role="button"
          class="mr-2 px-2 border border-dark rounded"
          @click="offsetDown"
        >
          Précédent
        </div>

        <div 
          role="button"
          class="px-2 border border-dark rounded"
          @click="offsetUp"
        >
          Suivant
        </div>
      </div>
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
            <td>${{film.rental_rate}}</td>
            <td>{{film.rating}}</td>
            <td>{{film.name}}</td>
            <td>{{film.count ? film.count : 0}}</td>
          </tr>
      </tbody>
    </table>
    
    <div class="d-flex justify-content-between">
      <div>
        Page {{currentPage}} / {{totalPages}}
      </div>
      <div>
        Résultats {{offset}} à {{offset+limit}} sur {{total}}
      </div>
    </div>

    <div class="d-flex flex-row justify-content-start">
      <div class="d-flex flex-row mt-3">
        <div 
          role="button"
          class="mr-2 px-2 border border-dark rounded"
          @click="offsetDown"
        >
          Précédent
        </div>

        <div 
          role="button"
          class="px-2 border border-dark rounded"
          @click="offsetUp"
        >
          Suivant
        </div>
      </div>
    </div>
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
  },

  computed: {
    ...mapState('films', ['orderBy', 'limit', 'offset', 'result', 'total']),

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

    currentPage() {
      return Math.ceil(this.offset / this.limit) + 1;
    },

    totalPages() {
      return Math.ceil(this.total / this.limit);
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
      this[SET_LIMIT](parseInt(this.limitTemp));
      this[SET_OFFSET](0);

      this.getFilms();
    },

    offsetUp(){
      if(this.offset + this.limit < this.total) {
        this[SET_OFFSET](this.offset + this.limit);

        this.getFilms();
      }
    },

    offsetDown(){
      if (this.offset - this.limit >= 0) {
        this[SET_OFFSET](this.offset - this.limit);

        this.getFilms();
      }
      else {
        this[SET_OFFSET](0);

        this.getFilms();
      }
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