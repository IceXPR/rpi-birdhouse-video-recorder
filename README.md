# rpi-birdhouse-video-recorder
A birdhouse that records the birds lifehood using RaspberryPI

## Install 

### Prepare the PI
```bash
apt update
apt install ffmpeg
apt install raspistill
apt install raspivid
```

### Install Code Dependencies
```bash
npm install
```

### Execute inside the RaspberryPII
```bash
./start-video-recording.sh &
npm start
```

### To run on boot
```bash
```


## References
- http://frozen.ca/streaming-raw-h-264-from-a-raspberry-pi/
```
raspivid -n -ih -t 0 -rot 0 -w 1280 -h 720 -fps 15 -b 1000000 -o - | nc -lkv4 5001
```

- https://fullstack.network/streaming-video-from-raspberrypi-to-the-network-using-node-js-33a5b6b78c3d

- https://linuxize.com/post/how-to-install-node-js-on-raspberry-pi/