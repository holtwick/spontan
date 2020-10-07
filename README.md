# spontan

**Avoid using servers for WebRTC as much as possible**

> Online Demo available at [spontan.holtwick.de](https://spontan.holtwick.de/)

Even though WebRTC is labelled peer-to-peer (P2P) it is mostly not, because just the data transfer itself goes 
from one client to the other without servers in the middle. Usually these servers are involved to establish the connection:

1. A **web server** hosting the actual web app that wants to connect
2. A **signaling server** that exchanges session descriptions (SDP) to establish a direct connection
3. A **STUN server** required to get you through your own NAT or firewall 
4. A **TURN server** that proxies all data in worst case when no direct connection can be established

The idea of this project is to eliminate most of them or at least find some viable alternatives. 

The motivation is to reduce the attacking points on communication in endangered societies or circumstances.

## Approaches

### Webserver

- [ ] Distribute as ZIP archive for self hosting (should have a checksum)
- [ ] Distribute as a browser extension

### Signaling

- [ ] Exchange of SDP e.g. text file
- [ ] Exchange of a link containing the SDP
- [ ] Exchange via QR codes
- [ ] Exchange via audio   

### STUN

This cannot be avoided, alternative strategies could be:

- [ ] Offer many STUN servers
- [ ] Enable clients to work as STUN servers 

### TURN 

If you need it you'll need it. This cannot be replaced by a client side solution. The goal should be to always be able to directly connect the clients.

## Notes

- Encrypting or securing the connections and data transfer is out of scope of this project. Although for a full solution this is an absolute requirement.

- Video and other data transfer details are also not handled by this project. They build on top of an established connection. 

## Testing

For camera access `https` is required. You may want to send your locally running instance out to the world by using one of the `x` scripts, like:

```shell script
npm run x:localhost
```

---

> "spontan" is German for "spontaneous"
