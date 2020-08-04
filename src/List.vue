<template>
  <div>
    
        <h1>Built in Directives</h1>

        <hr>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
        </ul>

  </div>
</template>

<script>
import {fruitMixin} from './fruitMixin';
export default {
 mixins: [fruitMixin],
 created(){
     console.log('Inside list created hook');
 }
};
</script>

<style>
</style>
