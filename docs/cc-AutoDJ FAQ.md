---
title: "AutoDJ FAQ"

---

## Where can I change my bitrate/stream title/format?
You can change all those settings under Settings -> Mount Points -> (/stream) -> AutoDJ Settings

> A wrong sample rate can mess up your stream's quality. 44100Hz is always suggested unless you run a really low bitrate.
![Centova Cast settings page](https://images.shoutca.st/s7hmhzSScSgjhP3Ovxp6_Schermafbeelding 2015-10-14 om 21.46.28.png)

> If you are listed in the SHOUTcast directory you have to change the stream name in the DNAS too. For that see the [SHOUTcast FAQ](https://docs.shoutca.st/docs/shoutcast-faq#my-stream-titleurlgenre-does-not-change)"
[block:api-header]
{
  "type": "basic",
  "title": "Liquidsoap won't start"
}
[/block]
If you get an error that Liquidsoap won't start that probably means a setting went wrong.
First of all make sure that at least one mount point has the AutoDJ enabled or fully disable the AutoDJ under the AutoDJ tab in settings.
If that doesn't fix it make sure your encoding type is set to "Constant bitrate encoding (CBR)" and your sample rate is 44100 Hz (very low bitrates require a lower sample rate too).
[block:image]
{
  "images": [
    {
      "image": [
        "https://images.shoutca.st/imHzJOMfQReef0WC9IRK_Schermafbeelding%202015-10-25%20om%2012.37.18.png",
        "Schermafbeelding 2015-10-25 om 12.37.18.png",
        "1812",
        "668",
        "#4199f2",
        ""
      ]
    }
  ]
}
[/block]
Also make sure you have at least one rotation playlist active all day. Centova always wants this to fall back on.
[block:api-header]
{
  "type": "basic",
  "title": "What is a bit rate?"
}
[/block]
A bitrate is the how many bits are used per second to encode the song. The lower this is the lower the quality of the song. In MP3 the most used quality is 128kbps. MP3 can go up to 320kbps but this is not suggested. The best trained ears can't hear the difference between 256kbps and 320kbps. Most ears don't hear any difference starting at 196kbps. 
A higher bitrate gives better quality on the cost of bandwidth being used. The industry standard is 128kbps as it is the best compromise of bandwidth and quality.
[block:api-header]
{
  "type": "basic",
  "title": "Where to set the Crossfade?"
}
[/block]
You can set this under AutoDJ in settings. You will see 4 fields on this. The length is the total amount of seconds both songs are blended in each other. The fade in and fade out are the number of seconds the fading itself happens.
The last option you can chose a mode, the normal mode is a classic cross fade and the smart one cuts out silent parts of the music while fading but can be buggy sometimes. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://images.shoutca.st/lrIPihAWSwGp8A3aAXJU_Schermafbeelding%202015-11-15%20om%2013.15.08.png",
        "Schermafbeelding 2015-11-15 om 13.15.08.png",
        "2048",
        "964",
        "#4597e6",
        ""
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Can the AutoDJ change my stream title for a DJ?"
}
[/block]
Due limitations this is not possible as it would have to kick all listeners of the stream. To solve this the SHOUTcast team has a new song tag on their roadmap that will add the DJ name to the stream info. This feature will soon be available with the new SHOUTcast. (Cast already comes with the tag built in)
[block:api-header]
{
  "type": "basic",
  "title": "My stream's volume is low"
}
[/block]
You can try to turn of replay gain. This is made to let all tracks be at the same volume but in Centova's implementation this can go wrong sometimes. You can turn it off in Settings -> AutoDJ. Don't forget to restart the server afterwards.
[block:image]
{
  "images": [
    {
      "image": [
        "https://images.shoutca.st/BoV8vzCpQMeDGbXRwQNe_Schermafbeelding%202016-05-04%20om%2018.08.08.png",
        "Schermafbeelding 2016-05-04 om 18.08.08.png",
        "480",
        "104",
        "#3486e3",
        ""
      ]
    }
  ]
}
[/block]