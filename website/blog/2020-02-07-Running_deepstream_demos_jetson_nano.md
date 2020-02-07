---
title: Running Deepstream Demos on Jetson Nano
author: Saurabh Kumar Singh
authorURL: https://imsrbh.github.io
authorFBID: 100005601877134
---
___
We have seen [How to flash jetson Nano!!](http://192.168.0.165:3000/blog/2020/02/06/Jetson-Nano-Installation). In continuation of previous blog, here we'll be running Deepstream demos on Jetson Nano.

___
### Prerequisites
___

JetPack-4.3 is required to successfully run and use the
DeepStream on Jetson SDK. JetPack includes OS images, Libraries and APIs, developer tools, samples, and documentation. JetPack, including the latest L4T
release, is available for download at:
https://developer.nvidia.com/embedded/jetpack

### NVIDIA SDK Manager
[Install Jetson Software with SDK Manager](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html)

We use the NVIDIA SDK Manager GUI to successfully configure your development environment.


We'll not install and flash Jetson OS from Jetpack SDK manager in Nano because we already flashed our Jetson Nano using microSD card.

___
### Additional components required on the target
___
To successfully use the DeepStream SDK, the following additional
components must be installed and set up on the target system:
- CUDA (10.0)
- TensorRT (6.0+)
- OpenCV (3.3.1)
- VisionWorks (1.6)
Install these packages using JetPack SDK Manager.

After this we are ready to run deepstream demos.
___
### Deepstream

- Deepstream sdk is streaming analytics toolkit that consists of various h/w accelerated plugins that provides highest throughput for computer vision and IVA application.
- It is built on open source [Gstreamer](https://gstreamer.freedesktop.org/documentation/application-development/introduction/gstreamer.html?gi-language=c) architecture.

The NVIDIA® DeepStream on Jetson Software Development Kit (SDK) provides a
framework for constructing GPU-accelerated video analytics
applications running within the L4T package on the
Jetson platform.
___
### Package contents
___

The DeepStream packages include:
1. binaries.tbz2 - Core binaries
2. sources - Sources for sample application and plugin
3. samples - Config files, models, streams and tools to run the sample app

___

Go to:
>/opt/nvidia/deepstream/deepstream-4.0

Read README for detailed information.

`$ cat README`

___
## Running DeepStream demos:

### From **configs** repo

>/opt/nvidia/deepstream/deepstream4.0/samples `$ tree`

```bash
.
├── configs
│   └── deepstream-app
│       ├── config_infer_primary_nano.txt
│       ├── config_infer_primary.txt
│       ├── config_infer_secondary_carcolor.txt
│       ├── config_infer_secondary_carmake.txt
│       ├── config_infer_secondary_vehicletypes.txt
│       ├── iou_config.txt
│       ├── sample.txt
│       ├── source12_1080p_dec_infer-resnet_tracker_tiled_display_fp16_tx2.txt
│       ├── source1_csi_dec_infer_resnet_int8.txt
│       ├── source1_usb_dec_infer_resnet_int8.txt
│       ├── source2_csi_usb_dec_infer_resnet_int8.txt
│       ├── source30_1080p_dec_infer-resnet_tiled_display_int8.txt
│       ├── source4_1080p_dec_infer-resnet_tracker_sgie_tiled_display_int8.txt
│       ├── source6_csi_dec_infer_resnet_int8.txt
│       ├── source8_1080p_dec_infer-resnet_tracker_tiled_display_fp16_nano.txt
│       ├── source8_1080p_dec_infer-resnet_tracker_tiled_display_fp16_tx1.txt
│       └── tracker_config.yml
├── models
│   ├── Primary_Detector
│   │   ├── cal_trt.bin
│   │   ├── labels.txt
│   │   ├── resnet10.caffemodel
│   │   ├── resnet10.caffemodel_b1_fp16.engine
│   │   ├── resnet10.caffemodel_b2_fp16.engine
│   │   ├── resnet10.caffemodel_b4_fp16.engine
│   │   └── resnet10.prototxt
│   ├── Primary_Detector_Nano
│   │   ├── labels.txt
│   │   ├── resnet10.caffemodel
│   │   └── resnet10.prototxt
│   ├── Secondary_CarColor
│   │   ├── cal_trt.bin
│   │   ├── labels.txt
│   │   ├── mean.ppm
│   │   ├── resnet18.caffemodel
│   │   ├── resnet18.caffemodel_b16_fp16.engine
│   │   └── resnet18.prototxt
│   ├── Secondary_CarMake
│   │   ├── cal_trt.bin
│   │   ├── labels.txt
│   │   ├── mean.ppm
│   │   ├── resnet18.caffemodel
│   │   ├── resnet18.caffemodel_b16_fp16.engine
│   │   └── resnet18.prototxt
│   ├── Secondary_VehicleTypes
│   │   ├── cal_trt.bin
│   │   ├── labels.txt
│   │   ├── mean.ppm
│   │   ├── resnet18.caffemodel
│   │   ├── resnet18.caffemodel_b16_fp16.engine
│   │   └── resnet18.prototxt
│   └── Segmentation
│       ├── industrial
│       │   ├── unet_output_graph.uff
│       │   └── unet_output_graph.uff_b1_fp32.engine
│       └── semantic
│           ├── unetres18_v4_pruned0.65_800_data.uff
│           └── unetres18_v4_pruned0.65_800_data.uff_b1_fp32.engine
└── streams
    ├── sample_1080p_h264.mp4
    ├── sample_1080p_h265.mp4
    ├── sample_720p.h264
    ├── sample_720p.jpg
    ├── sample_720p.mjpeg
    ├── sample_720p.mp4
    ├── sample_cam6.mp4
    └── sample_industrial.jpg

```

>Path: /opt/nvidia/deepstream/deepstream4.0/samples/configs/deepstream-app/

Go to samples directory and run:

`$deepstream-app -c <path to config.txt>`


```console
$deepstream-app -c source12_1080p_dec_infer-resnet_tracker_tiled_display_fp16_nano.txt
```
![](https://github.com/imSrbh/Jetson-Devices/blob/master/website/static/img/ezgif.com-video-to-gif%20(1).gif?raw=true)

```console
deepstream-app -c source1_csi_dec_infer_resnet_int8.txt
```
___
If the application runs into errors and cannot create gst elements, try again after removing gstreamer cache:

`$rm ${HOME}/.cache/gstreamer-1.0registry.aarch64.bin`

___
___
### From **sample\_apps**
>/opt/nvidia/deepstream/deepstream-4.0/sources/apps/sample_apps `ls`
```
deepstream-app                     deepstream-segmentation-test
deepstream-dewarper-test           deepstream-test1
deepstream-gst-metadata-test       deepstream-test2
deepstream-image-decode-test       deepstream-test3
deepstream-infer-tensor-meta-test  deepstream-test4
deepstream-nvof-test               deepstream-test5
deepstream-perf-demo               deepstream-user-metadata-test
```

>/opt/nvidia/deepstream/deepstream-4.0/sources/apps/sample_apps`$ tree`
```bash
.
├── deepstream-app
│   ├── deepstream-app
│   ├── deepstream_app.c
│   ├── deepstream_app_config_parser.c
│   ├── deepstream_app_config_parser.o
│   ├── deepstream_app.h
│   ├── deepstream_app_main.c
│   ├── deepstream_app_main.o
│   ├── deepstream_app.o
│   ├── Makefile
│   └── README
├── deepstream-dewarper-test
│   ├── config_dewarper.txt
│   ├── csv_files
│   │   ├── nvaisle_2M.csv
│   │   └── nvspot_2M.csv
│   ├── deepstream-dewarper-app
│   ├── deepstream_dewarper_test.c
│   ├── deepstream_dewarper_test.o
│   ├── Makefile
│   └── README
├── deepstream-gst-metadata-test
│   ├── deepstream-gst-metadata-app
│   ├── deepstream_gst_metadata.c
│   ├── deepstream_gst_metadata.o
│   ├── dsmeta_pgie_config.txt
│   ├── Makefile
│   └── README
├── deepstream-image-decode-test
│   ├── deepstream-image-decode-app
│   ├── deepstream_image_decode_app.c
│   ├── deepstream_image_decode_app.o
│   ├── dstest_image_decode_pgie_config.txt
│   ├── Makefile
│   └── README
├── deepstream-infer-tensor-meta-test
│   ├── deepstream-infer-tensor-meta-app
│   ├── deepstream_infer_tensor_meta_test.cpp
│   ├── deepstream_infer_tensor_meta_test.o
│   ├── dstensor_pgie_config.txt
│   ├── dstensor_sgie1_config.txt
│   ├── dstensor_sgie2_config.txt
│   ├── dstensor_sgie3_config.txt
│   ├── Makefile
│   └── README
├── deepstream-nvof-test
│   ├── deepstream-nvof-app
│   ├── deepstream_nvof_test.c
│   ├── deepstream_nvof_test.o
│   ├── Makefile
│   └── README
├── deepstream-perf-demo
│   ├── deepstream_perf_demo.cpp
│   ├── Makefile
│   ├── perf_demo_pgie_config.txt
│   ├── perf_demo_sgie1_config.txt
│   ├── perf_demo_sgie2_config.txt
│   ├── perf_demo_sgie3_config.txt
│   └── README
├── deepstream-segmentation-test
│   ├── deepstream-segmentation-app
│   ├── deepstream_segmentation_app.c
│   ├── deepstream_segmentation_app.o
│   ├── dstest_segmentation_config_industrial.txt
│   ├── dstest_segmentation_config_semantic.txt
│   ├── Makefile
│   └── README
├── deepstream-test1
│   ├── deepstream-test1-app
│   ├── deepstream_test1_app.c
│   ├── deepstream_test1_app.o
│   ├── dstest1_pgie_config.txt
│   ├── Makefile
│   └── README
├── deepstream-test2
│   ├── deepstream-test2-app
│   ├── deepstream_test2_app.c
│   ├── deepstream_test2_app.o
│   ├── dstest2_pgie_config.txt
│   ├── dstest2_sgie1_config.txt
│   ├── dstest2_sgie2_config.txt
│   ├── dstest2_sgie3_config.txt
│   ├── dstest2_tracker_config.txt
│   ├── Makefile
│   ├── README
│   └── tracker_config.yml
├── deepstream-test3
│   ├── deepstream-test3-app
│   ├── deepstream_test3_app.c
│   ├── deepstream_test3_app.o
│   ├── dstest3_pgie_config.txt
│   ├── Makefile
│   └── README
├── deepstream-test4
│   ├── cfg_amqp.txt
│   ├── cfg_azure.txt
│   ├── cfg_kafka.txt
│   ├── deepstream-test4-app
│   ├── deepstream_test4_app.c
│   ├── deepstream_test4_app.o
│   ├── dstest4_msgconv_config.txt
│   ├── dstest4_pgie_config.txt
│   ├── Makefile
│   └── README
├── deepstream-test5
│   ├── configs
│   │   ├── dstest5_msgconv_sample_config.txt
│   │   ├── test5_config_file_src_infer_azure_iotedge.txt
│   │   ├── test5_config_file_src_infer_tracker_sgie.txt
│   │   ├── test5_config_file_src_infer.txt
│   │   └── test5_dec_infer-resnet_tracker_sgie_tiled_display_int8.txt
│   ├── deepstream_test5_app.h
│   ├── deepstream_test5_app_main.c
│   ├── deepstream_utc.c
│   ├── Makefile
│   └── README
└── deepstream-user-metadata-test
    ├── deepstream_user_metadata_app.c
    ├── dsmeta_pgie_config.txt
    ├── Makefile
    └── README
```



<!---
```console
sudo apt-get install libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev \libgstrtspserver-1.0-dev libx11-dev
```
--->
let's take a example:

**deepstream-test1**
>Path: /opt/nvidia/deepstream/deepstream-4.0/sources/apps/sample_apps/deepstream-test1

`$cd /opt/nvidia/deepstream/deepstream-4.0/sources/apps/sample_apps/deepstream-test1`

`$make`

>`$./deepstream-app  <h264_elementary_stream>`

`$./deepstream-app ../../../../smaples/streams/sample_720.h264 `

![](https://github.com/imSrbh/Jetson-Devices/blob/master/website/static/img/ezgif.com-crop.gif?raw=true)

### About the sample deepstream-test1 application.

It is meant for simple demonstration of how to use the various DeepStream SDK
elements in the pipeline and extract meaningful insights from a video stream.

This sample creates instance of "nvinfer" element. Instance of
the "nvinfer" uses TensorRT API to execute inferencing on a model. Using a
correct configuration for a nvinfer element instance is therefore very
important as considerable behaviors of the instance are parameterized
through these configs.

For reference, here are the config files used for this sample :
1. The 4-class detector (referred to as pgie in this sample) uses
    dstest1_pgie_config.txt

In this sample, we first create one instance of "nvinfer", referred as the pgie.
This is our 4 class detector and it detects for : `"Vehicle , RoadSign, TwoWheeler, Person".`
nvinfer element attach some MetaData to the buffer. By attaching
the probe function at the end of the pipeline, one can extract meaningful
information from this inference. Please refer the "osd_sink_pad_buffer_probe"
function in the sample code. For details on the Metadata format, refer to the
file "gstnvdsmeta.h"



___
