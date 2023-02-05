<template>
    <Doughnut v-if="data" :data="data" :options="options" />
</template>
  
<script>
import { Doughnut } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        Doughnut
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
        this.api.charts.getCharts('doughnut-charts')
            .then((data) => {
                if (data) {
                    this.data = data
                }
            })
    },
}
</script>