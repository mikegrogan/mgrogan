---
icon: 💻
title: What Tech I Use
description: Inspired by uses.tech, here is my current development setup and miscellaneous tools I use on a regular basis.
# permalink: uses/index.html
#permalink: "posts/{{ page.date | date: '%Y/%m/%d' }}/{{ title | slug }}.html"
date: 2020-10-27
tags:
  - posts
layout: layouts/centered.njk
---

# {{icon}} {{ title }}
<time datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>

![My Desktop](/posts/uses/desktop.jpg)


The following is my current web development setup and things that I use in my day to day life. It is inspired from Wes Bos's <a href="http://uses.tech" target="_blank">Uses.Tech</a> page. Hopefully there's a few interesting things in there for anyone checking out the list.

### Design and Development
* [**Visual Studio Code**][1] has been my go to editor for years now. These are the main extensions/theme I use:
  * Solarized Dark
  * CFML
  * GitLens
  * Git History
* **Windows 10**
* [**Commandbox**][4] runs my local Coldfusion development environment. It's a must have for any Coldfusion developer.
* [**Windows Terminal**][2] is great at managing multiple shells and letting me color code my backgrounds depending on what environment I'm in.
* [**Figma**][5] is a lot of fun to use as a non-designer. Much more intuitive than something like Illustrator in my mind.
* **Adobe Creative Suite** I use mostly for Photoshop and Lightroom.
* [**Insomnia Core**][8] is helpful for managing and testing REST web services.
* [**Toad for Oracle**][9] is the best tool I've found for working with Oracle databases.
* [**Google Cloud free tier**][6] is what I used to setup this site running on Ubuntu. It doesn't have a monthly cost associated with it, which is great for a small site like this. I just have to maintain the domain.

### Desktop Apps, Plugins, Tools
* [**Powertoys**][3] I use mostly for the FanyZones feature.
* [**Vivaldi**][7] is built on Chromium, but goes the extra mile with lots of great extra features. Helps me de-google a little bit as well.
* [**KeepassXC**][10] My choice for a personal password manager.
* [**TeraCopy**][11] Provides a little more control when copying files.
* [**Chocolatey**][12] I use to manage my installed software and keep everything up to date.

### Camera Gear
* **Canon 6d** is definitely little outdated now. As a side hustle I shot a few weddings with it and thought it performed well. It's decent for photos, but wouldn't recommend it for video.
* [**Sigma 70-200mm F2.8 DG OS HSM**][16] has been a great portrait lens for me, and is considerably cheaper than the Canon equivalent.

### Home Network
* Raspberry Pi running [**PiHole**][13] to block ads. Have to make use of the Pi somehow!
* [**MikroTik hAP ac2 router**][14] gave me the best bang for my buck when searching for a new router. It has the powerful [RouterOS ][15] running on it that let me do things like setting up a VPN, creating multiple subnets, or automating backups.
* Ran Cat 6 throughout my house to get the best possible connection.

[1]: https://code.visualstudio.com/
[2]: https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701
[3]: https://github.com/microsoft/PowerToys/
[4]: https://commandbox.ortusbooks.com/
[5]: https://www.figma.com
[6]: https://cloud.google.com/free/
[7]: https://vivaldi.com
[8]: https://insomnia.rest
[9]: https://www.quest.com/products/toad-for-oracle/
[10]: https://keepassxc.org
[11]: https://www.codesector.com/teracopy
[12]: https://chocolatey.org
[13]: https://pi-hole.net
[14]: https://www.amazon.com/gp/product/B079SD8NVQ
[15]: https://mikrotik.com/software
[16]: https://www.sigmaphoto.com/70-200mm-f2-8-dg-os-hsm-s