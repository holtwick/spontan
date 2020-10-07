<template>
  <div>
    {{ spontan }}
    <textarea name="offer" cols="30" rows="10"></textarea>
  </div>
</template>

<style>


</style>

<script>
import { spontan } from '../spontan.js'

export default {
  name: 'Main',
  data() {
    return {
      spontan,
    }
  },
  methods: {},
  async mounted() {

  },
}
</script>

