<template>
  <HomeTemplate />
</template>

<script lang="ts">
  import Vue from 'vue'
  import { books } from '@/store'

  export default Vue.extend({
    layout: 'iBook',
    async asyncData() {
      await books.index()
    }
  })
</script>