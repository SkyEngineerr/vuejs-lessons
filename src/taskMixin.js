export const getCount = {

    computed: {
        getCountt() {
            return this.text.length
        }
    },
    created() {
        console.log('created');
    }
}