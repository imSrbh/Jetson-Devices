---
title: Jetson Nano Installation
author: Saurabh Kumar Singh
authorURL: https://imsrbh.github.io
authorFBID: 100005601877134

---

### Nvidia Jetson

It is a series of **embedded AI computing boards** from **Nvidia Corporation**. They are often used to deploy deep learning and computer vision for **autonomous robots** and **AI at the edge**.

<!--truncate-->

### Jetson Nano

It is the smallest, lowest power, and least expensive computer in the Nvidia Jetson series.
Jetson Nano is supported by the comprehensive **NVIDIA® JetPack™ SDK** and has the

performance and capabilities needed to run modern AI workloads.

| **Processing** |   |
| --- | --- |
| CPU | 64-bit Quad-core ARM A57 @ 1.43GHz |
| GPU | 128-core NVIDIA Maxwell @ 921MHz |
| Memory | 4GB 64-bit LPDDR4 @ 1600MHz / 25.6 GB/s |
| Video Encoder\* | 4Kp30 / (4x) 1080p30 / (2x) 1080p60 |
| Video Decoder\* | 4Kp60 / (2x) 4Kp30 / (8x) 1080p30 / (4x) 1080p60 |
| **Interfaces** |   |
| USB | 4x USB 3.0 A (Host) / USB 2.0 Micro B (Device) |
| Camera | MIPI CSI-2 x2 (15-position Flex Connector) |
| Display | HDMI / DisplayPort |
| Networking | Gigabit Ethernet (RJ45) |
| Wireless | M.2 Key-E with PCIe x1 |
| Storage | MicroSD card (16GB UHS-1 recommended minimum) |
| Other I/O | (3x) I2C / (2x) SPI / UART / I2S / GPIOs |



**NVIDIA® Jetson Nano™ Developer Kit**

Jetson Nano Developer Kit box includes:

- --Jetson Nano module (P3448-0000)
- --Reference carrier board (P3449)
- --Small paper card with quick start and support information
- --Folded paper stand for the developer kit

Items that are not included in the box but will be needed:

- --microSD card (16GB UHS-1 minimum)
- --USB keyboard and mouse
- --Computer display (either HDMI or DP)
- --Micro-USB power supply (5V⎓2A)

**Developer Kit Setup**

1. Jetson Nano Developer Kit uses a microSD card as a boot device and for main storage. Set up microSD card with the operating system and JetPack components. The simplest method is to download the microSD card image and follow the instructions found in [Getting Started with Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit). For alternative methods, see [How to Install JetPack](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html).
  1. 1.Download the [Jetson Nano Developer Kit SD Card Image](https://developer.nvidia.com/jetson-nano-sd-card-image-r322).
  2. 2.Write the image to your microSD card. You can either write the SD card image using a graphical program like [Etcher](https://www.balena.io/etcher/) or via the command line.
2. Insert the microSD card (with system image already written to it) into the slot on the underside of the Jetson Nano module.
3. For the first run, connect your computer display, USB keyboard, and mouse. Power on the computer display. After successfully setting up the kit, you can also access the device headlessly through SSH connection.
4. Connect your Micro-USB power supply (5V⎓2A). The Jetson Nano Developer Kit will power on and boot automatically. A green LED next to the Micro-USB connector will light as soon as the developer kit powers on.
5. Initial setup:
  1. 1.Review and accept NVIDIA Jetson software EULA
  2. 2.Select system language, keyboard layout, and time zone
  3. 3.Create a username, password, and computer name
  4. 4.Log in
6. Read the [Jetson Nano Developer Kit User Guide](https://developer.nvidia.com/embedded/dlc/jetson-nano-dev-kit-user-guide).

**Next Steps** :

1. Take the free NVIDIA Deep Learning Course - [Getting Started with AI on Jetson Nano](https://courses.nvidia.com/courses/course-v1:DLI+C-RX-02+V1/about)
2. Good read - [https://devblogs.nvidia.com/jetson-nano-ai-computing/](https://devblogs.nvidia.com/jetson-nano-ai-computing/)



**JetPack SDK**

JetPack includes:

1. OS Image - It includes an operating system (full desktop Linux)
2. JetPack libraries and APIs include:
  1. 1. **TensorRT** and **cuDNN** for high-performance deep learning applications
  2. 2.CUDA for GPU accelerated applications across multiple domains
  3. 3.Multimedia API package for camera applications and sensor driver development
  4. 4.VisionWorks and OpenCV for visual computing applications
3. Sample Applications - The examples are stored in the reference filesystem.
4. Developer Tools
5. Documentation
  1. 1.[JetPack Documentation](https://docs.nvidia.com/jetson/jetpack/index.html)
  2. 2.[NVIDIA Linux Driver Package Development Guide](https://docs.nvidia.com/jetson/l4t/index.html)
  3. 3.[Tegra L4T Release Notes](https://developer.nvidia.com/embedded/downloads#?search=L4T%20Release%20Notes)
  4. 4.[TensorRT Documentation](https://docs.nvidia.com/deeplearning/sdk/tensorrt-developer-guide/index.html)
  5. 5.[cuDNN Documentation](https://docs.nvidia.com/deeplearning/sdk/cudnn-developer-guide/index.html)
  6. 6.[CUDA Toolkit](https://docs.nvidia.com/cuda/index.html)
  7. 7.[Multimedia API Reference](https://docs.nvidia.com/jetson/l4t-multimedia/index.html)
  8. 8.[VisionWorks Documentation](https://developer.nvidia.com/embedded/visionworks)
  9. 9.[OpenCV Documentation](https://developer.nvidia.com/opencv)
  10. 10.[Nsight Eclipse Edition Documentation](https://docs.nvidia.com/cuda/nsight-eclipse-edition-getting-started-guide/index.html)
  11. 11.[CUDA-GDB Documentation](https://docs.nvidia.com/cuda/cuda-gdb/index.html)
  12. 12.[CUDA-MEMCHECK Documentation](https://docs.nvidia.com/cuda/cuda-memcheck/index.html)
  13. 13.[Nsight Systems](https://docs.nvidia.com/nsight-systems/index.html)
  14. 14.[nvprof](https://docs.nvidia.com/cuda/profiler-users-guide/index.html#nvprof-overview)
  15. 15.[Visual Profiler](https://docs.nvidia.com/cuda/profiler-users-guide/index.html)
  16. 16.[Nsight Graphics](https://docs.nvidia.com/nsight-graphics/index.html)
  17. 17.[Nsight Compute](https://docs.nvidia.com/nsight-compute/index.html)
  18. 18.[Nsight Compute CLI](https://docs.nvidia.com/nsight-compute/NsightComputeCli/index.html)

**How to install JetPack**

1. SD Card Image - This is for Jetson Nano only. The simplest JetPack installation method is to follow the steps at [Getting Started with Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit) to download and write an image to your microSD card, then use it to boot the developer kit.
2. NVIDIA SDK Manager
  1. 1.NVIDIA Jetson Nano modules on a Jetson Nano Developer Kit carrier board
  2. 2.NVIDIA Jetson TX1 on a Jetson TX2 Developer Kit carrier board
  3. 3.NVIDIA Jetson TX2 series modules on a Jetson TX2 Developer Kit carrier board
  4. 4.NVIDIA Jetson AGX Xavier on a Jetson AGX Xavier Developer Kit carrier board



**DeepStream SDK**

The DeepStream SDK is a general-purpose streaming analytics SDK that enables system software engineers and developers to build high-performance intelligent video analytics applications using NVIDIA Jetson or NVIDIA Tesla platforms. It analyzes data from cameras, sensors and IoT gateways in real-time.

 ![](https://lh6.googleusercontent.com/ZJu5CbURu2HINtTAr46g7-RZN-o_xPP1jKAGsnbuZ_6DvinFK3kCLu2il9net8xLHgS6AXjGJ7My6VZQ7GUgMSPa3ikhOsWXPz459M3C)

- --Based on open-source **Gstreamer** framework
- --A plugin-model based pipeline structure
- -- **Plugins** - Hardware-accelerated building blocks, that bring deep neural networks and other complex processing tasks into a stream processing pipeline.
- --Types of plugins
  - -- **Source Elements** - That generate data for use by pipeline
  - -- **Filter Elements** - That has both input and output paths. They operate data that is to be received from the input path and will deliver processed data on their output path.
  - -- **Sync Elements** - They are the end-points in the media pipeline. They accept data but do not produce additional data to pass on.
- --Graph-based pipeline interface to allow high-level component interconnect
- --Enables heterogeneous parallel processing of CPU and GPU
- --Hides parallelization and synchronization under the hood
- --Inherently multi-threaded
- --Ideal use cases - retail analytics, intelligent traffic control, automated optical inspection, freight, and goods tracking.
- --The SDK lets you integrate the edge to the cloud with standard message brokers like **Kafka** and **MQTT**.

**How to install DeepStream SDK**

Follow the steps on the page [NVIDIA DeepStream SDK Development Guide 4.0 Release](https://docs.nvidia.com/metropolis/deepstream/4.0/dev-guide/index.html#page/DeepStream_Development_Guide%2Fdeepstream_quick_start.html)to easily install the SDK. Following are the three methods:

1. **1.**** Using SDK Manager** - SDK Manager installs DeepStream SDK as part of the Jetson SDK Components.
2. **2.**** Using the DeepStream tar package**
  1. 1.Download the DeepStream 4.0 Jetson tar package, deepstream\_sdk\_v4.0\_jetson.tbz2, to the Jetson device.
  2. 2.Untar the package
$ tar -xpvf deepstream\_sdk\_v4.0\_jetson.tbz2
  3. 3.Install
$ cd deepstream\_sdk\_v4.0\_jetson
$ sudo tar -xvpf binaries.tbz2 -C /
$ sudo ./install.sh

1. **3.**** Using the DeepStream Debian package**
  1. 1.Download the DeepStream 4.0 Jetson Debian package, deepstream-4.0\_4.0-1\_arm64.deb, to the Jetson device. Then enter the command:
$ sudo apt-get install ./deepstream-4.0\_4.0-1\_arm64.deb

Note: If you install the DeepStream SDK Debian package using the dpkg command, you must install these packages first, then install the DeepStream deb package:

- --libgstrtspserver-1.0-0
- --libgstreamer-plugins-base1.0-dev



**DeepDetect**

[DeepDetect](https://www.deepdetect.com/)is a deep learning API and server for training and managing models.

**How to install DeepDetect**

1. Installing DeepDetect through Nvidia-docker
  1. 1.Install **Nvidia-docker**
  2. 2.Pull the docker image
docker pull jolibrain/deepdetect\_gpu
  3. 3.Run the container with
nvidia-docker run -d -p 8080:8080 jolibrain/deepdetect\_gpu

2. [Installing DeepDetect from scratch](https://docs.google.com/document/d/1ozksp0ejtk5U1PUiQqb7s7xR9WTD0fQcmUIAngJo4b0/edit#)



**Nvidia-Docker**



**NVIDIA Container Runtime**

It is a GPU aware [container runtime](https://github.com/NVIDIA/nvidia-container-runtime/). It simplifies the process of building and deploying containerized GPU-accelerated applications to desktop, cloud or data centers.)

- --Based on open-source **Gstreamer** framework
- --A plugin-model based pipeline structure
- -- **Plugins** - Hardware-accelerated building blocks, that bring deep neural networks and other complex processing tasks into a stream processing pipeline.
- --Types of plugins
  - -- **Source Elements** - That generate data for use by pipeline
  - -- **Filter Elements** - That has both input and output paths. They operate data that is to be received from the input path and will deliver processed data on their output path.
  - -- **Sync Elements** - They are the end-points in the media pipeline. They accept data but do not produce additional data to pass on.
- --Graph-based pipeline interface to allow high-level component interconnect
- --Enables heterogeneous parallel processing of CPU and GPU
- --Hides parallelization and synchronization under the hood
- --Inherently multi-threaded
- --Ideal use cases - retail analytics, intelligent traffic control, automated optical inspection, freight, and goods tracking.
- --The SDK lets you integrate the edge to the cloud with standard message brokers like **Kafka** and **MQTT**.

**How to install DeepStream SDK**

Follow the steps on the page [NVIDIA DeepStream SDK Development Guide 4.0 Release](https://docs.nvidia.com/metropolis/deepstream/4.0/dev-guide/index.html#page/DeepStream_Development_Guide%2Fdeepstream_quick_start.html)to easily install the SDK. Following are the three methods:

1. **1.**** Using SDK Manager** - SDK Manager installs DeepStream SDK as part of the Jetson SDK Components.
2. **2.**** Using the DeepStream tar package**
  1. 1.Download the DeepStream 4.0 Jetson tar package, deepstream\_sdk\_v4.0\_jetson.tbz2, to the Jetson device.
  2. 2.Untar the package
$ tar -xpvf deepstream\_sdk\_v4.0\_jetson.tbz2
  3. 3.Install
$ cd deepstream\_sdk\_v4.0\_jetson
$ sudo tar -xvpf binaries.tbz2 -C /
$ sudo ./install.sh

1. **3.**** Using the DeepStream Debian package**
  1. 1.Download the DeepStream 4.0 Jetson Debian package, deepstream-4.0\_4.0-1\_arm64.deb, to the Jetson device. Then enter the command:
$ sudo apt-get install ./deepstream-4.0\_4.0-1\_arm64.deb

Note: If you install the DeepStream SDK Debian package using the dpkg command, you must install these packages first, then install the DeepStream deb package:

- --libgstrtspserver-1.0-0
- --libgstreamer-plugins-base1.0-dev



**DeepDetect**

[DeepDetect](https://www.deepdetect.com/)is a deep learning API and server for training and managing models.

**How to install DeepDetect**

1. Installing DeepDetect through Nvidia-docker
  1. 1.Install **Nvidia-docker**
  2. 2.Pull the docker image
docker pull jolibrain/deepdetect\_gpu
  3. 3.Run the container with
nvidia-docker run -d -p 8080:8080 jolibrain/deepdetect\_gpu

2. [Installing DeepDetect from scratch](https://docs.google.com/document/d/1ozksp0ejtk5U1PUiQqb7s7xR9WTD0fQcmUIAngJo4b0/edit#)



**Nvidia-Docker**



**NVIDIA Container Runtime**

It is a GPU aware [container runtime](https://github.com/NVIDIA/nvidia-container-runtime/). It simplifies the process of building and deploying containerized GPU-accelerated applications to desktop, cloud or data centers.