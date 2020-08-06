<template>
    <div>
        <button @click="asyncIncrement({by:50, duration:500})">Increment</button>
        <button @click="asyncDecrement({by:50, duration:500})">Decrement</button>


    </div>
</template>


<script>
import {mapActions} from 'vuex';
export default {
    methods:{
     ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
        ]),
        
    }
}
</script>