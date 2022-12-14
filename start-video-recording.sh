#! /usr/bin/bash

while true
do
 mkdir -p public/bird-videos
 mkdir -p public/bird-photos
 find public/bird-videos/ -name '*.*' -type f -mmin +1440 -delete
 find public/bird-photos/ -name '*.*' -type f -mmin +1440 -delete
 raspistill -o public/bird-photos/bird-photo-`date +%H%M`.jpg
 raspivid -o - -t 59000 | ffmpeg -r 8 -i - -y -vcodec copy public/bird-videos/bird-video-`date +%H%M`.mp4
done
