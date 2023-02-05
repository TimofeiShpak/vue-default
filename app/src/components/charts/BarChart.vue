<template>
    <Bar v-if="data" :data="data" :options="options" />
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
    name: 'App',
    components: {
        Bar
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
        this.api.charts.getCharts('bar-charts')
            .then((data) => {
                if (data) {
                    this.data = data
                }
            })
    },
}
</script>
