<template>
    <Scatter v-if="data" :data="data" :options="options" />
</template>
  
<script>
import { Scatter } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        Scatter
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
        this.api.charts.getCharts('scatter-charts')
            .then((data) => {
                if (data) {
                    this.data = data
                }
            })
    },
}
</script>