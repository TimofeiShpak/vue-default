<template>
    <Radar v-if="data" :data="data" :options="options" />
</template>
  
<script>
import { Radar } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        Radar
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
        this.api.charts.getCharts('radar-charts')
            .then((data) => {
                if (data) {
                    this.data = data
                }
            })
    },
}
</script>