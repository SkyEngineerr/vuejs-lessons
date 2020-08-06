<template>
    <div>
        <button @click="increment(100)">Increment</button>
        <button @click="decrement(100)">Decrement</button>


    </div>
</template>


<script>
import {mapActions} from 'vuex';
export default {
    methods:{
     ...mapActions([
            'increment',
            'decrement'
        ]),
        
    }
}
</script>