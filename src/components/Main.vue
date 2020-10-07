<template>
  <div>
    <textarea name="offer" cols="30" rows="10">{{ spontan.offer }}</textarea>

    <p>
      <a :href="url">length={{ url.length }}</a>
    </p>
    <p>
      <a :href="urlBase64">length={{ urlBase64.length }}</a>
    </p>
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
  computed: {
    url() {
      return '#' + encodeURIComponent(this.spontan.offer)
    },
    urlBase64() {
      return '#' + encodeURIComponent(btoa(this.spontan.offer))
    },
  },
  methods: {},
  async mounted() {

  },
}
</script>

