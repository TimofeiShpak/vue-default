<template>
    <Line v-if="data" :data="data" :options="options" />
</template>
  
<script>
import { Line } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        Line
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
        this.api.charts.getCharts('line-charts')
            .then((data) => {
                if (data) {
                    this.data = data
                }
            })
    },
}
</script>