<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built in Directives</h1>
        <p>{{text | toUppercase |to-lowercase}}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add Fruit</button>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div> -->

  <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | getCountt}}</p>
                <p>{{text }}</p>
               

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
  </div>
</template>

<script>
import List from './List.vue';
import {fruitMixin} from './fruitMixin'
import {getCount} from './taskMixin'
export default {
  
  data () {
      return{
          text: 'Hello there',
          fruits: ['Apple', 'Banana', 'Melon', 'Mango'],
          filterText: ''
      }
  },
  filters:{
    toUppercase (value){
        return value.toUpperCase();
    }
  },
  components:{
      appList: List
  },
  mixins: [fruitMixin, getCount]
};
</script>

<style>
</style>
