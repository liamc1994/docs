---
title: "Streams"

---

> This page is a work in progress.

## What is a bit rate?

A bitrate is the how many bits are used per second to encode the song. The lower this is the lower the quality of the song. In MP3 the most used quality is 128kbps. MP3 can go up to 320kbps but this is not suggested. The best trained ears can't hear the difference between 256kbps and 320kbps. Most ears don't hear any difference starting at 196kbps. 
A higher bitrate gives better quality on the cost of bandwidth being used. The industry standard is 128kbps as it is the best compromise of bandwidth and quality.

## HTTP Live Streaming
HLS (HTTP Live Streaming) is a new [standard](https://tools.ietf.org/html/draft-pantos-http-live-streaming-18) for live streams over the internet. It was designed by [Apple](https://developer.apple.com/streaming/) but got widely adopted for live and on demand video streaming. But the standard also got support for MP3 and AAC streams. HLS is now availale as beta in Cast.

## MPEG DASH
DASH (Dynamic Adaptive Streaming over HTTP) looks a lot like DASH but has been made a standard (ISO/IEC 23009-1) by the MPEG workgroup. It also is available in Cast as a beta feature.

## Hide listener count
This has been an often heard request for our SHOUTcast and Icecast service. We've integrated this in Cast by a simple button. This option will hide the listener count to the public pages. All compatible APIs (like the SHOUTcast one) without the need to provide the API key will provide the value 0. This is also the value reported to the directories as faking a high listener count can get your station banned from these.

## Anti stream ripper
Stream ripping software is a common issue for radio stations. This software records the stream and thanks to the metadata is able to cut individual songs. We've been looking for a solution against these but it is not quite simple. Some companies just block the client they claim to be, but that is a fight quickly lost. One line of code can make these tools report that they just are Winamp or an iPhone. Blocking listeners who are listening for x hours can be a bad idea since they can be real, eg. a shop, a home stereo, somebody who likes to listen music while sleeping, etc.

We've came up with a simple solution to not ban this software but to fool it. If this option is enabled the metadata update will be delayed up to 10 seconds. This is not annoying for the user but will make the ripped songs be bad. Since every delay is random the only solution to work this around is to listen for a silence to cut songs which then can be fixed by sending crossfades.
