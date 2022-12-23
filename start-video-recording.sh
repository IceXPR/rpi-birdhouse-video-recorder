#! /usr/bin/bash

while true
do
 mkdir -p public/bird-videos
 mkdir -p public/bird-photos
 find public/bird-videos/ -name '*.*' -type f -mmin +1440 -delete
 find public/bird-photos/ -name '*.*' -type f -mmin +1440 -delete

 export snapshot=`date +%H%M`
 raspistill -w 640 -h 480 -q 100 -rot 180 -o public/bird-photos/bird-photo-$snapshot.jpg
 raspivid -o video.h264 -t 59000 -w 1280 -rot 180 -h 720 -rot 180
 MP4Box -add video.h264 public/bird-videos/bird-video-$snapshot.mp4
done
