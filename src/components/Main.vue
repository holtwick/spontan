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
    <p>
      <video autoplay></video>
    </p>
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
import QRReader from '../qrscan.js'

const qrCodeLimit = 10208

export default {
  name: 'Main',
  data() {
    return {
      spontan,
    }
  },
  computed: {
    sdp() {
      return this.spontan?.offer?.sdp || ''
    },
    url() {
      return '#' + encodeURIComponent(this.sdp)
    },
    urlBase64() {
      return '#' + encodeURIComponent(btoa(this.sdp))
    },
    qrcode() {
      let value = this.sdp
      const typeNumber = 0
      const errorCorrectionLevel = 'H'
      const qr = qrcode(typeNumber, errorCorrectionLevel)
      qr.addData(value)
      qr.make()
      return qr.createSvgTag({
        scalable: true,
      })
    },
  },
  methods: {},
  async mounted() {

    setTimeout(() => {
      //To check the device and add iOS support
      window.iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0
      window.isMediaStreamAPISupported = navigator && navigator.mediaDevices && 'enumerateDevices' in navigator.mediaDevices
      window.noCameraPermission = false

      QRReader.init()
      setTimeout(() => {
        if (window.isMediaStreamAPISupported) {
          scan()
        }
      }, 1000)

      //Scan
      function scan(forSelectedPhotos = false) {
        QRReader.scan(result => {
          console.log('Found QR Code:', result)
          // const frame = document.querySelector('#frame')
          // if (forSelectedPhotos && frame) frame.remove();
        }, forSelectedPhotos)
      }
    }, 1000)
  },
}
</script>

