---
title: "Beta FAQ"

---
[block:api-header]
{
  "type": "basic",
  "title": "To whom is the beta available?"
}
[/block]
Currently, we're first rolling this out internally; then we'll start inviting people to test the system.
[block:api-header]
{
  "type": "basic",
  "title": "What's in the beta?"
}
[/block]
Currently only Clocks and Intervals are available in the beta. This is because they form the base of the system. We need to make sure these are completely stable before making more features available.
[block:api-header]
{
  "type": "basic",
  "title": "Where's button X? What about button Y?"
}
[/block]
The interface in Control is still being worked on. Our goal was to make everything functional, *then* add the intricate design details.
[block:api-header]
{
  "type": "basic",
  "title": "Known issues"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "This is a list of known issues in the system, at times it may appear out of date. The individual GitHub projects also have a detailed list."
}
[/block]
* ~~Audio drift on streams.~~
* Incorrect frames in front of a small percentage of crossfades.
* Clocks wont save if incorrectly configured (error messages not yet built in).
* Song processing can be slow (automatic scaling not yet streams.
* Skip and reload buttons are not implemented yet.
[block:api-header]
{
  "type": "basic",
  "title": "Don'ts for beta testers"
}
[/block]
* **Do not** change bitrates, this is not yet implemented will crash your stream.
* ~~**Do not** touch stream settings while DJ is on (soon to be disabled in Control).~~
* **Do not upload** masses of music (we can handle it, just not enough harddrives and monitoring available).
* **Do not** start 1000 servers, automatic scaling of DJ is not yet enabled.
* **Do not** use this on your main station, the system can fail at any time whilst still in development.