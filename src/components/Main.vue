<template>
  <div>
    <h1>{{ spontan.name }}</h1>
    <h3>Offer</h3>
    <p>
      <textarea cols="30" rows="10" spellcheck="false">{{ spontan.offer }}</textarea>
    </p>
    <h3>Answer</h3>
    <p>
      <textarea cols="30" rows="10" v-model="answer" spellcheck="false"></textarea>
      <button @click="doConnect">Connect</button>
    </p>
    <p>
      <a :href="url">length={{ url.length }}</a>
    </p>
    <p>
      <a :href="urlBase64">length={{ urlBase64.length }}</a>
    </p>
    <p class="qrcode" v-html="qrcode">QRCode</p>
    <p>
      <button @click="doQRCodeScan">Open QRCode Scanner</button>
      <video autoplay v-show="receiveQR"></video>
    </p>
  </div>
</template>

<style type="text/css">
.qrcode svg {
  width: 20rem;
}
video {
  position: fixed;
  border-radius: 1rem;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
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
      answer: 'Waiting',
      receiveQR: false
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
  methods: {
    doConnect() {

    },
    doQRCodeScan() {
      this.receiveQR = this

      //To check the device and add iOS support
      window.iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0
      window.isMediaStreamAPISupported = navigator && navigator.mediaDevices && 'enumerateDevices' in navigator.mediaDevices
      window.noCameraPermission = false

      QRReader.init()
      // setTimeout(() => {
      if (window.isMediaStreamAPISupported) {
        QRReader.scan(result => {
          console.log('Found QR Code:', result)
          this.answer = result
          // const frame = document.querySelector('#frame')
          // if (forSelectedPhotos && frame) frame.remove();
          this.receiveQR = false
        }, false)
      }
      // }, 1000)
    },
  },
  async mounted() {

  },
}
</script>

