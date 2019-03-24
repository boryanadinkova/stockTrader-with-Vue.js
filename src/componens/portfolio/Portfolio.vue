<template>
    <div>
        <Stock v-for="stock in stocks" :stock = "stock"/>
    </div>    
</template>

<script>
import Stock from "./Stock"
import { mapGetters } from 'vuex';
export default {
components: {
    Stock
}, 
computed: {
    ...mapGetters({
        stocks: 'stockPortfolio'
    })
}
}
</script>

<style>

</style>
