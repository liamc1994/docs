---
title: "AutoDJ FAQ"

---

## Where can I change my bitrate/stream title/format?
You can change all those settings under Settings -> Mount Points -> (/stream) -> AutoDJ Settings

> A wrong sample rate can mess up your stream's quality. 44100Hz is always suggested unless you run a really low bitrate.

![](https://images.shoutca.st/s7hmhzSScSgjhP3Ovxp6_Schermafbeelding%202015-10-14%20om%2021.46.28.png)

> If you are listed in the SHOUTcast directory you have to change the stream name in the DNAS too. For that see the [SHOUTcast FAQ](/docs/cc-SHOUTcast-FAQ.html#my-stream-title-url-genre-does-not-change)


## Liquidsoap won't start

If you get an error that Liquidsoap won't start that probably means a setting went wrong.
First of all make sure that at least one mount point has the AutoDJ enabled or fully disable the AutoDJ under the AutoDJ tab in settings.
If that doesn't fix it make sure your encoding type is set to "Constant bitrate encoding (CBR)" and your sample rate is 44100 Hz (very low bitrates require a lower sample rate too).
![](https://images.shoutca.st/imHzJOMfQReef0WC9IRK_Schermafbeelding%202015-10-25%20om%2012.37.18.png)
Also make sure you have at least one rotation playlist active all day. Centova always wants this to fall back on.

## What is a bit rate?

A bitrate is the how many bits are used per second to encode the song. The lower this is the lower the quality of the song. In MP3 the most used quality is 128kbps. MP3 can go up to 320kbps but this is not suggested. The best trained ears can't hear the difference between 256kbps and 320kbps. Most ears don't hear any difference starting at 196kbps. 
A higher bitrate gives better quality on the cost of bandwidth being used. The industry standard is 128kbps as it is the best compromise of bandwidth and quality.

## What is a sample rate?

A sample rate is technically the number of audio samples taking per second. This can be seen as the amount of data put in one second of an audio file. In relation to thhe bit rate this is the amount of data that has to be compressed into the the bit rate amount. Usually this is 44.1KHz or 44100Hz. Higher bitrates could benefit of using 48KHz. However should you want to put 48KHz into a lower bitrate like 64kbps this will result into bad sound as it tries to compress too much data into a smaller amount of data. That's why we suggest to pick a lower sample rate on a lower bitrate.
While Centova Cast offers the ability to go as low as 8KHz or as high as 96KHz we strongly suggest not to do this as it might sound terrible or not even work at all. We suggest staying around the value of 44.1KHz.

## Where to set the Crossfade?

You can set this under AutoDJ in settings. You will see 4 fields on this. The length is the total amount of seconds both songs are blended in each other. The fade in and fade out are the number of seconds the fading itself happens.
The last option you can chose a mode, the normal mode is a classic cross fade and the smart one cuts out silent parts of the music while fading but can be buggy sometimes. 
![](https://images.shoutca.st/lrIPihAWSwGp8A3aAXJU_Schermafbeelding%202015-11-15%20om%2013.15.08.png)


## Can the AutoDJ change my stream title for a DJ?

Due to limitations this is not possible as it would have to kick all listeners of the stream. To solve this the SHOUTcast team has a new song tag on their roadmap that will add the DJ name to the stream info. This feature will soon be available with the new SHOUTcast. (Cast already comes with the tag built in)

## My stream's volume is low

You can try to turn off replay gain. This is made to let all tracks be at the same volume but in Centova's implementation this can go wrong sometimes. You can turn it off in Settings -> AutoDJ. Don't forget to restart the server afterwards.
![](https://images.shoutca.st/BoV8vzCpQMeDGbXRwQNe_Schermafbeelding%202016-05-04%20om%2018.08.08.png)

## I am seeing weird codes im the song titless

This means you have enabled "Song title codes" in the Centova Cast settings.
![song title code setting](https://images.shoutca.st/Screenshot%20from%202018-07-23%2009-25-43.png)

## Is there AAC+ support?
AAC+ is just a brand name of HE-AAC (High-Efficiency Advanced Audio Coding). While it may not be visible in the non-advanced settings it is the default when you select AAC in Centova Cast's AutoDJ. You can confirm this by opening the advanced settings page.
![Centova Cast advanced settings](https://images.shoutca.st/Screenshot%20from%202018-08-12%2010-43-19.png)

## liquidsoap exited immediately after startup
Most of the times when you see this error this means there is something wrong with your AutoDJ settings. You can check then in the settings under "Mount Points" then "AutoDJ Settings".
![example of too high sample rate](https://images.shoutca.st/Screenshot%20from%202018-09-09%2009-56-12.png)
What we often see is the issue of a too high or too low sample rate being used. We advise not to go higher than 48000Hz. The usual is 44100Hz. Should you broadcast on low bitrates like 64kbps we advice to go a little bit lower.
Should this still happen after these changes please contact our support.

