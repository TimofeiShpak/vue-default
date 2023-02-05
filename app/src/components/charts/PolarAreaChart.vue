<template>
    <PolarArea v-if="data" :data="data" :options="options" />
</template>
  
<script>
import { PolarArea } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        PolarArea
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
        this.api.charts.getCharts('polar-area-charts')
            .then((data) => {
                if (data) {
                    this.data = data
                }
            })
    },
}
</script>