# rpi-birdhouse-video-stream
A birdhouse for video streaming using RaspberryPI


## Reference
- http://frozen.ca/streaming-raw-h-264-from-a-raspberry-pi/
```
raspivid -n -ih -t 0 -rot 0 -w 1280 -h 720 -fps 15 -b 1000000 -o - | nc -lkv4 5001
```

- https://fullstack.network/streaming-video-from-raspberrypi-to-the-network-using-node-js-33a5b6b78c3d

- https://linuxize.com/post/how-to-install-node-js-on-raspberry-pi/