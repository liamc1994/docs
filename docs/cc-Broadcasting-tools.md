---
title: "Broadcasting tools"

---

## Broadcasting Live (using BUTT)


> This guide is contributed by Rob Hayes. Thank you very much!
For Broadcasting from a Live Source such as your DJ Mixer, you will first need the connection details of your service (these are available in your Centova Cast control panel under 'General' and then 'Live Source Connections'), make a note of these settings as you will need them soon.

Once you have your details, you will then need to download a Free Broadcasting App Called 'BUTT', which is available here :

http://butt.sourceforge.net/

butt (broadcast using this tool) is an easy to use, multi OS streaming tool.
It supports SHOUTcast and Icecast / Cast and runs on Linux, Mac OS X and Windows.
The main purpose of butt is to stream live audio data from your computers Mic or Line input
to an Shoutcast or Icecast / Cast server. Recording is also possible.

Once you have installed BUTT, you need to configure it to broadcast to your server.  To do this you need to click the 'settings' button, this expands the App and opens up the settings box for BUTT.

Under the 'main' tab, you will see a 'Server Settings' menu, here you need to click the 'ADD' button and fill in the details you got from your Centova Cast  'Live Source Connections' into the relevant info boxes.  (Please note that the Icecast 'Server Type' is also compatible with Cast).

Once you have filled this in, then select the 'Audio' tab from the 'butt settings' menu.

Select your LINE IN or Recording Device / Sound Card in the 'Audio Device' dropdown box, and set 'Channel' to 'Stereo' and 'Samplerate' to '44100'.

Select your Streaming Codec as required for your broadcasting needs, in most cases this is MP3. Also select your desired Bitrate for the broadcast (please not some restrictions may apply depending on your chosen streaming plan with ShoutCa.st, broadcasting over your set maximum bitrate allowed will result in your server being stopped and you will need to restart it in the Centova Cast panel if this happens.)

You may also set a recording codec and bitrate up in the recording panel, note that the higher the bitrate, the more disk space you will require for your audio file recording.

Next thing to set is the Stream Metadata (stream title) for your broadcast.  This is done by selecting 'Stream' tab under the 'butt settings' and typing a title for your stream in the 'Update song name manually' box, then click the 'ok' button.

Last thing to do is check your audio recording level in BUTT, good practice is to have the input source peaking around +1 / 3db mark max.  If you are broadcasting a DJ style set, it's probably best to set the peak value to around 0 while one track is playing (to allow headroom while mixing tracks together, which should usually push the volume up to around +1 / 3db mark during a mix transition).

When all set and ready to broadcast, click the 'Play' button to start broadcasting to the server.

If all is well, BUTT will Display 'Broadcasting' followed by a timer.

The latest version of BUTT is not compatible with Sourcefabric's Airtime (at the time of writing this guide).

Hope this helps !

## IDJC-Internet DJ Console


> This guide is contributed by NTROradio. Thank you very much!

Their own description
*Internet DJ Console is a project started in March 2005 to provide a powerful yet easy to use source-client for individuals interested in streaming live radio shows over the Internet using Shoutcast or Icecast servers.*
For Linux desktop users this app is the ultimate in broadcasting live. It supports shoutcast and icecast and runs extremely well when linked to Shoutca.st's Cast servers or Airtime. It allows you to bring in guests and callers on Skype/Voip or Mumble to handle multiple guests. You can communicate with the guests on Skype/Voip both on the air and off the air. It's players will handle nearly any media file you want to play during the broadcast. It handles jingles and can even post now playing info to an irc channel. It also automates ducking for talking over a songs intro or outro, compression, noisegate, 3 band eq or you can route the audio out to other apps for audio processing. Plus it can handle multiple streams with different encoding so you can broadcast in different sample rates or syndicate your show on different stations, plus it will even record your broadcast to be replayed at a later date or you can post it as a podcast.
How I use IDJC for NTROradio-
NTROradio is using AutoDJ most of the time on Centova Cast. I have IDJC installed on both my desktop computer and my laptop. On Sundays when I go live for my shows I just fire up IDJC on the desktop and hit connect and do my show, recording through IDJC as I do it. When the show is over I rename the file. add id3 tags and an image and upload it to post as a podcast. Since I am regional truck driver for the day job during the week I just find a place with free wifi and fire up IDJC on the laptop and I am streaming and recording. IJust like at home. 

IDJC does require the use of Jack, an app that runs on Mac and Linux to connect the sound card, IDJC and Skype/Voip together. If you are using Ubuntu or any of it's derivatives, Debian and Arch look for it in the repositories or software center, it will be there and it's free. 

For a somewhat in depth tutorial I refer you to The Penguin Producer (which I co-hosted the podcast for a short while). 

Those tutorials cover a lot of what IDJC can do but cant really hit all of it.

## How to broadcast via Winamp

In case you still got some llamas around Winamp can get you up in the air in seconds!

First of all make sure we have the DSP installed: you may want to download that off of the [official support forum](http://forums.winamp.com/showthread.php?t=378892). After installing Winamp should open with an extra window (you might also want to look under the main window as it likes to hide there).
![Schermafbeelding 2015-06-25 om 18.03.02.png](https://i.imgur.com/aVa2Mv9.png) 
You can set up to 5 outputs to broadcast! 
First of all let's get the details, [here is another guide on how to do that](https://community.shoutca.st/topic/24/first-aid-how-to-broadcast-live).
Let's enter the details into the login. If you use the AutoDJ make sure to check the SHOUTcast v1 mode to on. If you don't use the AutoDJ and have SHOUTcast v2 you may leave it off (Icecast is not supported by the SHOUTcast DSP when **not** using the AutoDJ). 
Leave the DJ/User ID empty (Stream ID by default is 1).
![Schermafbeelding 2015-06-25 om 18.05.54.png](https://i.imgur.com/qR8gco1.png) 
Next up is the Directory tab. Enter your station's name and URL and whether you want to get listed on SHOUTcast.com or not. If you use the AutoDJ these values will ignored but they are still required. (You may leave AOL, ICQ and IRC to the default values, they are so 90's)
![Schermafbeelding 2015-06-25 om 18.09.34.png](https://i.imgur.com/llCB3lx.png) 
Next up is the Encoder tab. If you use the AutoDJ make sure these are the same as in your settings, if you do not use it just chose the one you like. (we suggest MP3 on 128kbps)
![Schermafbeelding 2015-06-25 om 18.12.05.png](https://i.imgur.com/jOQNNEy.png) 
The rest of the tabs can be ignored, if you are interested feel free to take a look.
Press connect and there we go!
![Schermafbeelding 2015-06-25 om 18.19.07.png](https://i.imgur.com/xxRmTM8.png) 


PS: want to broadcast your input devices? Look under input!
![Schermafbeelding 2015-06-25 om 18.19.50.png](https://i.imgur.com/brjfRmP.png)
(https://i.imgur.com/xxRmTM8.png) 


PS: want to broadcast your input devices? Look under input!
![Schermafbeelding 2015-06-25 om 18.19.50.png](https://i.imgur.com/brjfRmP.png)
 input devices? Look under input!
![Schermafbeelding 2015-06-25 om 18.19.50.png](https://i.imgur.com/brjfRmP.png)
