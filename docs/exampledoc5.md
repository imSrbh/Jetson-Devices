---
id: doc5
title: Fifth Document
---

﻿|                    | Jetson Nano                                                                              | Jetson TX2 Series
          
          
                                                                                                                     | Jetson Xavier NX                                                                                                     | Jetson AGX Xavier Series
          
          
                                                                                                                                   |
|--------------------|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TX2 4GB            | TX2                                                                                      | TX2i                                                                                                                                                         | AGX Xavier 8GB                                                                                                       | AGX Xavier                                                                                                                                                                        |
| AI Performance     | 472 GFLOPS                                                                               | 1\.33 TFLOPS                                                                                                                                                 | 1\.26 TFLOPS                                                                                                         | 21 TOPS                                                                                                                                                                           | 20 TOPS                                                                                                                                      | 32 TOPS                         |
| GPU                | 128\-core NVIDIA Maxwell™ GPU                                                            | 256\-core NVIDIA Pascal™ GPU                                                                                                                                 | 384\-core NVIDIA Volta™ GPU with 48 Tensor Cores                                                                     | 384\-core NVIDIA Volta™ GPU with 48 Tensor Cores                                                                                                                                  | 512\-core NVIDIA Volta™ GPU with 64 Tensor Cores                                                                                             |
| CPU                | Quad\-core ARM® Cortex®\-A57 MPCore processor                                            | Dual\-core Denver 1\.5 64\-bit CPU and quad\-core Arm® Cortex®\-A57 MPCore processor                                                                         | 6\-core NVIDIA Carmel ARM®v8\.2 64\-bit CPU 6MB L2 \+ 4MB L3                                                         | 6\-core NVIDIA Carmel Arm®v8\.2 64\-bit CPU 6MB L2 \+ 4MB L3                                                                                                                      | 8\-core NVIDIA Carmel Arm®v8\.2 64\-bit CPU 8MB L2 \+ 4MB L3                                                                                 |
| Memory             | 4 GB 64\-bit LPDDR4 25\.6GB/s                                                            | 4 GB 128\-bit LPDDR4 51\.2GB/s                                                                                                                               | 8 GB 128\-bit LPDDR4 59\.7GB/s                                                                                       | 8 GB 128\-bit LPDDR4 \(ECC Support\) 51\.2GB/s                                                                                                                                    | 8 GB 128\-bit LPDDR4x 51\.2GB/s                                                                                                              | 8 GB 256\-bit LPDDR4x 85\.3GB/s | 16 GB 256\-bit LPDDR4x 136\.5GB/s |
| Storage            | 16 GB eMMC 5\.1 \*                                                                       | 16 GB eMMC 5\.1                                                                                                                                              | 32 GB eMMC 5\.1                                                                                                      | 32 GB eMMC 5\.1                                                                                                                                                                   | 16 GB eMMC 5\.1                                                                                                                              | 32GB eMMC 5\.1                  |
| Power              | 5W \| 10W                                                                                | 7\.5W \| 15W                                                                                                                                                 | 10W \| 20W                                                                                                           | 10W \| 15W                                                                                                                                                                        | 10W \| 20W                                                                                                                                   | 10W \| 15W \| 30W               |
| PCIe               | 1 x4 
          \(PCIe Gen2\)                                                            | 1 x1 \+ 1 x4 OR 1 x1 \+ 1 x1 \+ 1 x2 
          \(PCIe Gen2\)                                                                                                | 1 x1 \+ 1 x4 
          \(PCIe Gen3, Root Port &Endpoint\)                                                           | 1 x8 \+ 1 x4 \+ 1 x2 \+ 2 x1 
          \(PCIe Gen3\)                                                                                                                             | 1 x8 \+ 1 x4 \+ 1 x2 \+ 2 x1 
          \(PCIe Gen4, Root Port &Endpoint\)                                                                   |
| CSI Camera         | Up to 4 cameras 
          12 lanes MIPI CSI\-2 
          D\-PHY 1\.1 \(up to 18 Gbps\) | Up to 6 cameras \(12 via virtual channels\) 
          12 lanes MIPI CSI\-2 
          D\-PHY 1\.2 \(up to 30 Gbps\) 
          C\-PHY 1\.1 \(up to 41Gbps\) | Up to 6 cameras \(24 via virtual channels\) 
          12 lanes MIPI CSI\-2 
          D\-PHY 1\.2 \(up to 30 Gbps\) | Up to 6 cameras \(36 via virtual channels\) 
          16 lanes MIPI CSI\-2 \| 8 lanes SLVS\-EC 
          D\-PHY 1\.2 \(up to 40 Gbps\) 
          C\-PHY 1\.1 \(up to 59 Gbps\) |
| Video Encode       | 250MP/sec
          1x 4K @ 30 \(HEVC\)
          2x 1080p @ 60 \(HEVC\)                 | 500MP/sec
          1x 4K @ 60 \(HEVC\)
          3x 4K @ 30 \(HEVC\)
          4x 1080p @ 60 \(HEVC\)                                                       | 2x464MP/sec
          2x 4K @ 30 \(HEVC\)
          6x 1080p @ 60 \(HEVC\)                                           | 2x464MP/sec
          2x 4K @ 30 \(HEVC\)
          6x 1080p @ 60 \(HEVC\)
          14x 1080p @ 30 \(HEVC\)                                                                      | 2x1000MP/sec
          4x 4K @ 60 \(HEVC\)
          16x 1080p @ 60 \(HEVC\)
          32x 1080p @ 30 \(HEVC\)                               |
| Video Decode       | 500MP/sec
          1x 4K @ 60 \(HEVC\)
          4x 1080p @ 60 \(HEVC\)                 | 1000MP/sec
          2x 4K @ 60 \(HEVC\)
          7x 1080p @ 60 \(HEVC\)
          20x 1080p @ 30 \(HEVC\)                                                  | 2x690MP/sec
          2x 4K @ 60 \(HEVC\)
          12x 1080p @ 60 \(HEVC\)
          32x 1080p @ 30 \(HEVC\)        | 2x690MP/sec
          2x 4K @ 60 \(HEVC\)
          12x 1080p @ 60 \(HEVC\)
          32x 1080p @ 30 \(HEVC\)                                                                     | 2x1500MP/sec
          2x 8K @ 30 \(HEVC\)
          6x 4K @ 60 \(HEVC\)
          26x 1080p @ 60 \(HEVC\)
          72x 1080p @ 30 \(HEVC\) |
| Display            | 2 multi\-mode DP 1\.2/eDP 1\.4/HDMI 2\.0 1 x2 DSI \(1\.5Gbps/lane\)                      | 2 multi\-mode DP 1\.2/eDP 1\.4/HDMI 2\.0 2 x4 DSI \(1\.5Gbps/lane\)                                                                                          | 2 multi\-mode DP 1\.4/eDP 1\.4/HDMI 2\.0 No DSI support                                                              | 3 multi\-mode DP 1\.4/eDP 1\.4/HDMI 2\.0 No DSI support                                                                                                                           |
| DL Accelerator     |  \-                                                                                      |  \-                                                                                                                                                          | 2x NVDLA Engines                                                                                                     | 2x NVDLA Engines                                                                                                                                                                  |
| Vision Accelerator |  \-                                                                                      |  \-                                                                                                                                                          |  \-                                                                                                                  | 7\-Way VLIW Vision Processor                                                                                                                                                      |
| Networking         | 10/100/1000 BASE\-T Ethernet                                                             | 10/100/1000 BASE\-T Ethernet                                                                                                                                 | 10/100/1000 BASE\-T Ethernet, WLAN                                                                                   | 10/100/1000 BASE\-T Ethernet                                                                                                                                                      | 10/100/1000 BASE\-T Ethernet                                                                                                                 | 10/100/1000 BASE\-T Ethernet    |
| Mechanical         | 69\.6 mm x 45 mm
          260\-pin SO\-DIMM connector                                   | 87 mm x 50 mm
          400\-pin connector                                                                                                                   | 69\.6 mm x 45 mm
          260\-pin SO\-DIMM connector                                                               | 100 mm x87 mm
          699\-pin connector                                                                                                                                        |
