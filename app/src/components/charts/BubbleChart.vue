<template>
    <Bubble v-if="data" :data="data" :options="options" />
</template>
  
<script>
import { Bubble } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        Bubble
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
        this.api.charts.getCharts('bubbles-charts')
            .then((data) => {
                if (data) {
                    this.data = data
                }
            })
    },
}
</script>
  