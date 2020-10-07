<template>
  <div>
    <textarea name="offer" cols="30" rows="10">{{ spontan.offer }}</textarea>
    <p>
      <a :href="url">length={{ url.length }}</a>
    </p>
    <p>
      <a :href="urlBase64">length={{ urlBase64.length }}</a>
    </p>
    <p class="qrcode" v-html="qrcode">QRCode</p>
  </div>
</template>

<style type="text/css">
.qrcode svg {
  width: 20rem;
}
</style>

<script>
import { spontan } from '../spontan.js'
import { qrcode } from '../qrcode.js'

const qrCodeLimit = 10208

export default {
  name: 'Main',
  data() {
    return {
      spontan,
    }
  },
  computed: {
    url() {
      return '#' + encodeURIComponent(this.spontan.offer.sdp)
    },
    urlBase64() {
      return '#' + encodeURIComponent(btoa(this.spontan.offer.sdp))
    },
    qrcode() {
      let value = this.spontan.offer.sdp
      const typeNumber = 0
      const errorCorrectionLevel = 'H'
      const qr = qrcode(typeNumber, errorCorrectionLevel)
      qr.addData(value)
      qr.make()
      return qr.createSvgTag({
        scalable: true,
      })
    }
  },
  methods: {},
  async mounted() {

  },
}
</script>

