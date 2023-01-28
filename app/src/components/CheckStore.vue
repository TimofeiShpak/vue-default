<template>
  <div>from data {{ count }}</div>
  <button @click="increment">increment countStore by click</button>

  <div>from store {{ countData }}</div>
  <button @click="incrementByData">increment countData by click</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  setup() {

  },
  data() {
    return {
      countData: 0,
    }
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions(['increment']),
    incrementByData() {
      this.countData++;
    }
  },
  mounted() {
    
  }
}
</script>
<style scoped>

</style>
