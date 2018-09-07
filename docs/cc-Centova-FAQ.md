---
title: "Centova FAQ"

---

## What URL do I need to send to TuneIn

TuneIn needs a direct link. You can find that link under Tune in links under Quick Links. For example mine here is `http://curiosity.shoutca.st:8006/stream`
> This link is also the one to be used in 3rd party player widgets.

![](https://images.shoutca.st/USrYmhB2QpWRvsSU5KsP_Schermafbeelding%202015-10-29%20om%2013.38.37.png)


## How can I modify the start page?

The start page is meant for testing purposes only. We strongly advice against using it as a website!

## Where is my FTP?

You can find your FTP details on the Quick Links in Centova Cast.
![](https://images.shoutca.st/cZKjmhJuRpGhaelxZFsF_Schermafbeelding%202015-11-09%20om%2011.48.10.png)
More info on how to use FTP can be found in our [FTP docs](https://docs.shoutca.st/docs/cc-ftp.html)

> Make sure you leave the port field empty or use port 21. Using the port of your server will result in an error;


## I did not find what I need

Take a look at the other FAQs listed here or the [official Centova Cast documentation](http://www.centova.com/doc/cast/user_manual/usage_guide)

## My server stops after a few minutes
The first advice is to check your email. This usually happens when you broadcast in a higher bitrate than allowed by your plan. Centova Cast checks this every few minutes.

## Bandwidth limit
Centova Cast is not aware when you pay your server. Any monthly limits (eg. bandwidth) are therefor counted from the first to the last calendar day of every month. If you go over this limit Centova Cast will suspend your account which will be unsuspended on upgrade or the first day of the next calendar month (1st of the month)

## How to modify the default artwork
When Centova Cast can't find the artwork for your music it will fall back to the default one. Centova Cast originally did not allow you to change this yourself. We developed an integration with [Player](https://docs.shoutca.st/docs/control-Player.html) which syncs these setttings with Centova Cast. 
Should you want to change the default you have to configure Player in Control. Once this is configured with the artwork it will be synced to Centova Cast within a few hours.
