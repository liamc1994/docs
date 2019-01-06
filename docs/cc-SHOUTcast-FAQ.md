---
title: "SHOUTcast FAQ"

---

## My server says it needs an update

You may need to restart your server for the update to apply. All our servers now (july 2018) run on SHOUTcast 2.5. All new updates are tested by our team to assure your station stays up should there be a bug in the new release, that's why updates might be rolled out by some delay. In the past this proved to be helpful.

## Why is my stream private?

Private on SHOUTcast doesn't mean nobody can tune in. Private means the server is not listed on SHOUTcast.com. If you wish to change that see [How can I get listed on the SHOUTcast directory?](https://docs.shoutca.st/docs/shoutcast-faq#how-can-i-get-listed-on-the-shoutcast-directory)

## Can I access my SHOUTcast server's Administrator Summary?

Of course! To access your SHOUTcast server’s admin section, please log in into Centova Cast, click on ‘Admin’ in the left navigation bar. If you don't directly get a login prompt press on "Server Admin".
> When prompted, please log in as ‘admin’ with your administrator password (which is defined in Centova Cast).


## My stream title/url/genre does not change

The stream title not changing is a common heard issue. This is because SHOUTcast uses the info in their database instead of the one you provide once you set it to public. It is easy to fix in two steps:

1) Check your mount point configuration. Under the "AutoDJ" tab there often still is the old title.
2) Check your Authhash: when SHOUTcast v2 is set to public the stream title is frozen unless changed in the Administrator part. Just log in and press "Update Authhash". There you can edit the name and save it.
![Schermafbeelding 2015-05-09 om 12.45.59.png](https://i.imgur.com/wJ2ec4K.png)

## How can I get listed on the SHOUTcast.com directory?

> [IMPORTANT] SHOUTcast.com has stopped allowing new listings from older versions. Unfortunaly their latest version removes existing features and asks a monthly fee of 9 USD to add them back. We have decided to keep the older version since we do not want our clients to lose features they use and love.

> As alternative we have created [authhash.shoutca.st](https://authhash.shoutca.st/). This allows you to still create pre-2.6 authhashes.

First of all we need to go to the admin interface of SHOUTcast itself. To do this go to Centova Cast and in the side bar you can find "Admin". 
![](https://images.shoutca.st/fef0d8e-Schermafbeelding_2016-07-27_om_12.03.24.png)
Now we're at the SHOUTcast DNAS status page. Up in the menu you can find "Stream Login".


![](https://images.shoutca.st/aa5f15b-Schermafbeelding_2016-07-27_om_12.04.34.png)
You'll be prompted for the username and password. The username is `admin` and the password is the account of your Centova Cast account.

You might see a notice that you need to register your station, if not you can click "Authhash" in the top bar.
![register authhash noification](https://images.shoutca.st/Screenshot%20from%202018-08-27%2011-30-06.png)

SHOUTcast.com stopped offering pre-2.6 authhashes on their website to push the use of their new paid version. You can still get the old Authhashes via our tool [authhash.shoutca.st](https://authhash.shoutca.st/).

When you filled in all required details and saved the station you will get a screen with your Authhash. Copy this hash and go back to the DNAS admin and enter this code.
![Authhash text](https://images.shoutca.st/Screenshot%20from%202018-08-27%2011-34-39.png)
![Authhash field](https://images.shoutca.st/Screenshot%20from%202018-08-27%2011-48-48.png)

Keep in mind, the AutoDJ or a live DJ can still tell the server not to be listed. This can be overwritten in the settings.

![](https://images.shoutca.st/7ec2315-Schermafbeelding_2016-07-27_om_12.11.33.png)

![](https://images.shoutca.st/0cc3859-Schermafbeelding_2016-07-27_om_12.06.32.png)


## How to relay a stream?

A relay is a function in the SHOUTcast server that tunes in to another (SHOUTcast/Icecast/Cast) stream and sends out the same stream again on the server. Relays simply repeat the stream and are not able to change the content or bitrate of a stream.

To set one up:
1) Go to Settings in Centova Cast, then Mount Moints. 
2) Select your stream (/stream by default) then Relaying, make sure the AutoDJ is turned off in the AutoDJ tab or it will not allow you to set it up.
3) Enter the url to relay. 
![](https://images.shoutca.st/JroErpTpRv2m1Jtb8eI1_Schermafbeelding%202015-10-17%20om%2018.33.15.png)
This needs to be the full URL of the stream eg. http://hubble.shoutca.st:8411/stream/1 or http://hubble.shoutca.st:8411/;
For SHOUTcast these typically end on  /stream/x or ;, for Icecast they end with the name of te mount point (eg. /stream) and for cast they end in /streams/x (x is the bitrate/stream name)
4) Press update and restart the server.

## How to block an IP

To block an individual IP in SHOUTcast you need to log into [the DNAS as admin](https://docs.shoutca.st/docs/cc-SHOUTcast-FAQ.html#can-i-access-my-shoutcast-server-s-administrator-summary). In the top menu select "Ban List".
![SHOUTcast DNAS menu](https://images.shoutca.st/Screenshot%20from%202018-07-30%2015-13-08.png)

Here you can ban a single IP or a whole subnet.
![ban list page](https://images.shoutca.st/Screenshot%20from%202018-07-30%2015-13-31.png)

> Be careful not to ban the localhost or the server's own IP. This could result in Centova Cast breaking.

## Why does my server says SHOUTcast v1?

If you have ordered SHOUTcast v2 (v1 is not being sold anymore) and under Quick Links you see v1 you still have v2. The reason you see v1 thee is because most connections you connect to the AutoDJ so it can shut itself down when you are live. The AutoDJ doesn't support the SHOUTcast v2 protocol. That is why you will see v1 there.

## What is my SID?

SID stands for Stream ID, it is the number of the stream (mount point) on the server. By default this is 1, however if you have added more I suggest checking it on the home page of your DNAS.
![](https://images.shoutca.st/pw499NjTsG4GOTrqsPAK_Schermafbeelding%202015-10-25%20om%2012.41.37.png)


## Can I have SHOUTcast v1?

SHOUTcast v1 has not been updated for over 12 years and never will. Also there are many bugs and even serious security vulnerabilities know to be in there. Therefore we decided to not offer SHOUTcast v1 servers anymore. 
SHOUTcast.com also decided to stop supporting SHOUTcast v1 for their directory. Very soon these servers won't be listed anymore.

Existing SHOUTcast v1 clients are migrated over to SHOUTcast v2. (Centova will still indicate v1 as of a system limitation) More info see [https://status.shoutca.st/incident/597](https://status.shoutca.st/incident/597)
> **Resellers**
> ~~**Some** resellers can still create SHOUTcast v1 servers.~~ As of January 2017 these will create SHOUTcast v2 servers instead.
