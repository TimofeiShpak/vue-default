<template>
  <Bar v-if="data" :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
    // this.$preloader(true)
    this.api.charts.getCharts()
      .then((data) => {
        if (data) {
          this.data = data
        }
      })
  },
}
</script>
