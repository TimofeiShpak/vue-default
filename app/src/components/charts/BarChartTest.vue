<template>
    <div>БЕЗ ОТПРАВКИ ЗАПРОСА, ПРОВЕРКА ИНТЕГРАЦИЙ ФРОНТОВСКИХ БИБЛИОТЕК</div>
    <Line v-if="data" :data="data" :options="options" />
</template>

<script>
import { Line } from 'vue-chartjs'
import { barConfig } from '@/common/barChartTest'

export default {
    name: 'App',
    components: {
        Line
    },
    data() {
        return {
            data: barConfig.data,
            options: barConfig.options
        }
    },
    mounted() {

    },
}
</script>
