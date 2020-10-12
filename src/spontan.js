import Peer from 'simple-peer'
import { generateName } from './names.js'

const opts = {
  trickle: false,
  // iceTransportPolicy: 'all',
  iceServers: [{
    urls: 'stun:turn01.brie.fi:5349',
    // https://gist.github.com/mondain/b0ec1cf5f60ae726202e
  }],
}

export class Spontan {

  name = generateName()
  peers = []

  message

  constructor() {

  }

  startConnection(answer) {
    let peer = new Peer({
      ...opts,
      initiator: answer == null,
    })

    if (answer) {
      peer.signal(answer)
    }

    peer.on('signal', signal => {
      this.message = signal
      console.log('Offering signal', signal)
    })

    // setInterval(() => {
    //   this.ping()
    // }, 1000)
  }

  setOffer(offer) {
    this.peerOffering = null

    let peer = new Peer(opts)
    peer.signal({
      type: 'offer',
      sdp: offer,
    })
    this.peerOffering.on('signal', signal => {
      if (signal.type === 'offer') {
        this.offer = signal
      }
      console.log('Offering signal', this.offer)
    })

  }

  addPeer(peer) {
    this.peers.push(peer)
    peer.on('data', data => {
      console.log(data)
    })
  }

  ping() {
    for (let peer of this.peers) {
      peer.send(this.name)
    }
  }

}

export let spontan = new Spontan()

export default {
  spontan,
  Spontan,
}
