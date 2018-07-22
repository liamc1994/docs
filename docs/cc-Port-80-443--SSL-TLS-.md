---
title: "Port 80/443 (SSL/TLS)"

---
By default SHOUTcast and Icecast servers run on non-standard ports resulting in the :8000 (or other number) on the end. In some places these are blocked by a firewall. That is why we offer a free port 80 proxy.

To use it replace the hostname:port by *username*.radioca.st. So for example http://meyskens.radioca.st/.
If you need HTTPS, you can also use https:// (eg. https://meyskens.radioca.st/).


[block:callout]
{
  "type": "info",
  "body": "Due the technology used the listeners will not show their own IP. This will probably get fixed in SHOUTcast 2.5."
}
[/block]
