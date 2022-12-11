#! /usr/bin/bash

while true
do
 mkdir -p public/bird-videos
 raspivid -o - -t 60000 | ffmpeg -r 8 -i - -y -vcodec copy public/bird-videos/bird-video-`date +%H%M`.mp4
done
