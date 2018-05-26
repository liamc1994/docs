---
title: "SHOUTcast FAQ"

---
[block:api-header]
{
  "title": "My server says it needs an update"
}
[/block]
SHOUTcast 2.5 has a bug in it's core that causes buffering issues along with some API issues. To maintain stream quality we decided to stay with 2.4.7 till a new release comes out that we have tested not to have this issue.
[block:api-header]
{
  "type": "basic",
  "title": "Why is my stream private?"
}
[/block]
Private on SHOUTcast doesn't mean nobody can tune in. Private means the server is not listed on SHOUTcast.com. If you wish to change that see [How can I get listed on the SHOUTcast directory?](https://docs.shoutca.st/docs/shoutcast-faq#how-can-i-get-listed-on-the-shoutcast-directory)
[block:api-header]
{
  "type": "basic",
  "title": "Can I access my SHOUTcast server's Administrator Summary?"
}
[/block]
Of course! To access your SHOUTcast server’s admin section, please log in into Centova Cast, click on ‘Admin’ in the left navigation bar. If you don't directly get a login prompt press on "Server Admin".
[block:callout]
{
  "type": "danger",
  "body": "When prompted, please log in as ‘admin’ with your administrator password (which is defined in Centova Cast)."
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "My stream title/url/genre does not change"
}
[/block]
The stream title not changing is a common heard issue. This is because SHOUTcast uses the info in their database instead of the one you provide once you set it to public. It is easy to fix in two steps:

1) Check your mount point configuration. Under the "AutoDJ" tab there often still is the old title.
2) Check your Authhash: when SHOUTcast v2 is set to public the stream title is frozen unless changed in the Administrator part. Just log in and press "Update Authhash". There you can edit the name and save it.
![Schermafbeelding 2015-05-09 om 12.45.59.png](https://i.imgur.com/wJ2ec4K.png)
[block:api-header]
{
  "type": "basic",
  "title": "How can I get listed on the SHOUTcast.com directory?"
}
[/block]
First of all we need to go to the admin interface of SHOUTcast itself. To do this go to Centova Cast and in the side bar you can find "Admin". 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fef0d8e-Schermafbeelding_2016-07-27_om_12.03.24.png",
        "Schermafbeelding 2016-07-27 om 12.03.24.png",
        450,
        202,
        "#e2e2e2"
      ],
      "caption": "Server section with the \"Admin\" button"
    }
  ]
}
[/block]
Now we're at the SHOUTcast DNAS status page. Up in the menu you can find "Server Login", make sure not to go to "Stream Login".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aa5f15b-Schermafbeelding_2016-07-27_om_12.04.34.png",
        "Schermafbeelding 2016-07-27 om 12.04.34.png",
        1046,
        148,
        "#474f59"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
You'll be prompted for the username and password. The username is "admin" and the password is the account of your Centova Cast account.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1d7e79-Schermafbeelding_2016-07-27_om_12.05.48.png",
        "Schermafbeelding 2016-07-27 om 12.05.48.png",
        844,
        422,
        "#eaeaea"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Now you get an overview of your streams. With each one there is an option to create an Authhash. This is what you need.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6d9db96-Schermafbeelding_2016-07-27_om_12.09.41.png",
        "Schermafbeelding 2016-07-27 om 12.09.41.png",
        1672,
        1112,
        "#ededec"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "At time of writing this screenshot has been outdated, this has changed in SHOUTcast 2.5. But it currently is not deployed on the SHOUTca.st network due many known issues."
}
[/block]
Create the Authhash and we're set!

Keep in mind, the AutoDJ or a live DJ can still tell the server not to be listed. This can be overwritten in the settings.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7ec2315-Schermafbeelding_2016-07-27_om_12.11.33.png",
        "Schermafbeelding 2016-07-27 om 12.11.33.png",
        2198,
        1076,
        "#ebebeb"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0cc3859-Schermafbeelding_2016-07-27_om_12.06.32.png",
        "Schermafbeelding 2016-07-27 om 12.06.32.png",
        1220,
        552,
        "#dcdad6"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "How to relay a stream?"
}
[/block]
A relay is a function in the SHOUTcast server that tunes in to another (SHOUTcast/Icecast/Cast) stream and sends out the same stream again on the server. Relays simply repeat the stream and are not able to change the content or bitrate of a stream.

To set one up:
1) Go to Settings in Centova Cast, then Mount Moints. 
2) Select your stream (/stream by default) then Relaying, make sure the AutoDJ is turned off in the AutoDJ tab or it will not allow you to set it up.
3) Enter the url to relay. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/JroErpTpRv2m1Jtb8eI1_Schermafbeelding%202015-10-17%20om%2018.33.15.png",
        "Schermafbeelding 2015-10-17 om 18.33.15.png",
        "2162",
        "994",
        "#924c0e",
        ""
      ]
    }
  ]
}
[/block]
This needs to be the full URL of the stream eg. http://hubble.shoutca.st:8411/stream/1 or http://hubble.shoutca.st:8411/;
For SHOUTcast these typically end on  /stream/x or ;, for Icecast they end with the name of te mount point (eg. /stream) and for cast they end in /streams/x (x is the bitrate/stream name)
4) Press update and restart the server.
[block:api-header]
{
  "type": "basic",
  "title": "Why does my server says SHOUTcast v1?"
}
[/block]
If you have ordered SHOUTcast v2 (v1 is not being sold anymore) and under Quick Links you see v1 you still have v2. The reason you see v1 thee is because most connections you connect to the AutoDJ so it can shut itself down when you are live. The AutoDJ doesn't support the SHOUTcast v2 protocol. That is why you will see v1 there.
[block:api-header]
{
  "type": "basic",
  "title": "What is my SID?"
}
[/block]
SID stands for Stream ID, it is the number of the stream (mount point) on the server. By default this is 1, however if you have added more I suggest checking it on the home page of your DNAS.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/pw499NjTsG4GOTrqsPAK_Schermafbeelding%202015-10-25%20om%2012.41.37.png",
        "Schermafbeelding 2015-10-25 om 12.41.37.png",
        "678",
        "388",
        "#2d69b1",
        ""
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Can I have SHOUTcast v1?"
}
[/block]
SHOUTcast v1 has not been updated for over 12 years and never will. Also there are many bugs and even serious security vulnerabilities know to be in there. Therefore we decided to not offer SHOUTcast v1 servers anymore. 
SHOUTcast.com also decided to stop supporting SHOUTcast v1 for their directory. Very soon these servers won't be listed anymore.

Existing SHOUTcast v1 clients are migrated over to SHOUTcast v2. (Centova will still indicate v1 as of a system limitation) More info see [https://status.shoutca.st/incident/597](https://status.shoutca.st/incident/597)
[block:callout]
{
  "type": "info",
  "title": "Resellers",
  "body": "~~**Some** resellers can still create SHOUTcast v1 servers.~~ As of January 2017 these will create SHOUTcast v2 servers instead."
}
[/block]