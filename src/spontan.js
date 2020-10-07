import Peer from 'simple-peer'

export class Spontan {

  name = 'spontan'
  peers = []

  offer
  peerOffering

  constructor() {
    this.peerOffering = new Peer({
      initiator: true,
      trickle: false,
    })
    this.peerOffering.on('signal', signal => {
      if (signal.type === 'offer') {
        this.offer = signal
      }
      console.log('Offering signal', this.offer)
    })
  }

}

export let spontan = new Spontan()

export default {
  spontan,
  Spontan,
}
