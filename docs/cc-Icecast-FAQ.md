---
title: "Icecast FAQ"

---
[block:api-header]
{
  "type": "basic",
  "title": "What is my username?"
}
[/block]
On Icecast servers, the username for source connections is usually "source". Even though your Centova panel reads "(none)" under Username, make sure you are entering "source" if your encoder requires it to be filled in (most default to source if left blank).
[block:api-header]
{
  "type": "basic",
  "title": "Why does my Icecast look different than other Icecast?"
}
[/block]
In the past we made an Icecast fork with special improvements for our services and was meant to later on be what Cast is now. The last year we hit some limits causing us to decide to do a complete rewrite. One of the features this old platform had was an improved look. When reverting to use the Icecast name we could not let go of this design improvement and decided to keep it.
[block:api-header]
{
  "type": "basic",
  "title": "How to get listed on SHOUTcast.com"
}
[/block]
Of course SHOUTcast.com does not only support SHOUTcast servers but also Icecast servers so also Cast 0.x. But you'll have to make sure a few settings are correct.

If you use the AutoDJ make sure it is set to public, you can find this under "Mount Points" in the settings. Also make sure the Overrides has "Advertise in directory" set to "Always" or "Determinated by source".![Schermafbeelding 2015-05-15 om 17.03.59.png](https://i.imgur.com/YkffmFY.png)  ![Schermafbeelding 2015-05-15 om 17.04.07.png](https://i.imgur.com/q2kdQiG.png) 

The last step is to make sure that under Advanced "Directory listings URL" is set to *yp.shoutcast.com*
![Schermafbeelding 2015-05-15 om 17.05.34.png](https://i.imgur.com/nuX6VSl.png) 

Than just restart/reload your server and you're done.

[block:callout]
{
  "type": "info",
  "body": "Make sure you use a common genre, if not SHOUTcast.com will reject your listing."
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "How to relay a stream"
}
[/block]
Icecast has two relay modes a master and a mountpoint relay. The master relay will relay a whole Icecast server, since this is advanced and requires extra authentication we will not handle this.

To relay a single stream open settings then "Mountpoint Relaying".
Tn the example here we want to relay the Cast stream `http://opencast.radioca.st/streams/128kbps`.

1) Enter the stream server, this is the part between http:// and / or : 
2) Then enter the port, that is the part between : and / (in case there is no port given as Cast is it is 80)
3) Then the Stream mount point is the last part like /stream or /streams/128kbps as in the example (SHOUTcast usually accepts `;`)
4) Set the Local mount point to the one you want (by default /stream)
5) Make sure you relay metadata to show song info in your stream.
6) Leave the rest blank and save your settings
[block:image]
{
  "images": [
    {
      "image": [
        "https://images.shoutca.st/nsH19STmTbevwUi63EmA_Schermafbeelding%202015-11-25%20om%2011.06.06.png",
        "Schermafbeelding 2015-11-25 om 11.06.06.png",
        "1494",
        "1016",
        "#95490b",
        ""
      ]
    }
  ]
}
[/block]