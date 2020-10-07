import Peer from 'simple-peer'
import { generateName } from './names.js'

export class Spontan {

  name = generateName()
  peers = []

  offer
  peerOffering

  constructor() {
    this.peerOffering = new Peer({
      initiator: true,
      trickle: false,
      // iceTransportPolicy: 'all',
      iceServers: [{
        urls: 'stun:turn01.brie.fi:5349',
        // https://gist.github.com/mondain/b0ec1cf5f60ae726202e
      }],
    })
    this.peerOffering.on('signal', signal => {
      if (signal.type === 'offer') {
        this.offer = signal
      }
      console.log('Offering signal', this.offer)
    })

    setInterval(() => {
      this.ping()
    }, 1000)
  }

  ping() {
    for (let peer of this.peers) {
      peer.send('')
    }
  }

}

export let spontan = new Spontan()

export default {
  spontan,
  Spontan,
}
