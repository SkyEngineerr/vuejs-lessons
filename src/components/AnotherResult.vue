<template>
    <div>
        <div>
            <p>Counter is: {{ doubleCounter }}</p>
            <p>Number of clicks: {{stringCounter}}</p>
        </div>
    </div>
</template>   


<script>
import {mapGetters} from 'vuex';
export default {
   computed:{
    ...mapGetters([
        'doubleCounter',
        'stringCounter'
    ])
    }
}
</script>