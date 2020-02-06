---
title: Jetson Nano Installation
author: Saurabh Kumar Singh
authorURL: https://imsrbh.github.io
authorFBID: 100005601877134

---

### Nvidia Jetson

It is a series of **embedded AI computing boards** from **Nvidia Corporation**. They are often used to deploy deep learning and computer vision for **autonomous robots** and **AI at the edge**.

<!--truncate-->

### Introduction
The NVIDIA® Jetson Nano™ Developer Kit is a small AI computer for makers, learners, and developers. After following along with this brief guide, you’ll be ready to start building practical AI applications, cool AI robots, and more.

![](https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/jetson-nano-dev-kit-top-r6-HR-B01.png)

![](https://github.com/imSrbh/Jetson-Devices/blob/master/website/static/img/nano_detail.png?raw=true)
___

We'll also need:
- microSD card (16GB UHS-1 minimum)
- USB keyboard and mouse
- Computer display (either HDMI or DP)
- Micro-USB power supply (5V⎓2A)
___
___
## Write Image to the microSD Card
To prepare your microSD card, you’ll need a computer with Internet connection and the ability to read and write SD cards, either via a built-in SD card slot or adapter.

Download the Jetson Nano [__Developer Kit SD Card Image__](https://developer.nvidia.com/jetson-nano-sd-card-image), and note where it was saved on the computer.
Write the image to your microSD card by following the instructions below according to the type of computer you are using: Windows, Mac, or Linux.

You can either write the SD card image using a graphical program like Etcher, or via command line.

Etcher Instructions

Download, install, and launch [Etcher](https://www.balena.io/etcher).

![](https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Linux-Etcher.png)

- Click “Select image” and choose the zipped image file downloaded earlier.
- Insert your microSD card. If you have no other external drives attached, Etcher will automatically select the microSD card as target device. Otherwise, click “Change” and choose the correct device.
![](https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Linux-Etcher_Select_Drive.png)

- Click “Flash!” Your OS may prompt for your username and password before it allows Etcher to proceed.
![](https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Linux-Etcher_Password.png)

It will take Etcher 10-15 minutes to write and validate the image if your microSD card is connected via USB3.

- After Etcher finishes, eject the SD Card.
- Physically remove microSD card from the computer.

After your microSD card is ready, proceed to set up your developer kit.

___
___

## Setup and First Boot

![](https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetbot_animation_500x282_2.gif)
___
### Setup Steps
- Unfold the paper stand and place inside the developer kit box.
- Set the developer kit on top of the paper stand.
- Insert the microSD card (with system image already written to it) into the slot on the underside of the Jetson Nano module.
![](https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Setup-Insert_microSD-B01.png)
- Power on your computer display and connect it.
- Connect the USB keyboard and mouse.
- Connect your Micro-USB power supply (5V⎓2A). The Jetson Nano Developer Kit will power on and boot automatically.

___
___
### First Boot
A green LED next to the Micro-USB connector will light as soon as the developer kit powers on. When you boot the first time, the Jetson Nano Developer Kit will take you through some initial setup, including:

- Review and accept NVIDIA Jetson software EULA
- Select system language, keyboard layout, and time zone
- Create username, password, and computer name
- Log in

### After Logging In
You will see this screen.
Congratulations!
![](https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Setup_Welcome_Screen.png)
___

