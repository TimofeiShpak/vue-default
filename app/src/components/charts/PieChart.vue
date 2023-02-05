<template>
    <Pie v-if="data" :data="data" :options="options" />
</template>
  
<script>
import { Pie } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        Pie
    },
    data() {
        return {
            data: null,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.api.charts.getCharts('pie-charts')
            .then((data) => {
                if (data) {
                    this.data = data
                }
            })
    },
}
</script>