---
title: Introduction
---

import ReactPlayer from 'react-player';

# Welcome to CamAnim

CamAnim brings smooth camera animations to your VRChat avatar. Place waypoints with your hand, press Play, and the camera glides along the path. Use it for videos, music videos, streams, or anything you want to film. ♡

It started as a remake of the old "Camera Animation" mod for VRChat, which disappeared when VRChat removed mods. CamAnim brings it back, with extra features the original never had.

<ReactPlayer controls url='https://www.youtube.com/watch?v=NeQeA9TXIA4'/>

:::danger Set your VRC Camera to "Look at me"

CamAnim is linked to the VRChat camera, so the camera must look at your face. Set the VRC Camera behaviour to **Look at me** before you use CamAnim.

![The VRC Camera behaviour set to Look at me](@site/static/img/LookAtMeBehaviour.webp)

:::

## Before you buy

- **PC only.** Quest doesn't support the Camera component that CamAnim needs.
- **VR and desktop mode** both work.
- **Works with VRCLens and VirtualLens2**, but doesn't include them. Get [VRCLens](https://hirabiki.gumroad.com/l/rpnel) from Gumroad or VirtualLens2 from Booth if you want to link them.
- **"Full system" and "Full system + support" are the same package.** The second one just adds a tip for the creator.
- **Try it first** with the [demo avatar](https://vrchat.com/home/avatar/avtr_89e2b4e1-7a6a-4dbc-9c06-dfef99ec0472): open the link and click **Switch to Avatar**, or add it to your favourites and pick it in VRChat.

## Features

- Up to 32 waypoints
- Orbit camera
- Centre Player: waypoints travel with you
- Look at yourself, at a dropped spot, or at another player
- Speed, loop and zoom
- Camera environment: hide players, background colour, portrait mode
- Reset
- The [CamAnim desktop app](./desktop-app.md) to save, edit and share your paths

![The CamAnim Action Menu](@site/static/img/ActionMenu.png)

:::info

When CamAnim is linked with VRCLens, CamAnim's zoom is removed and VRCLens's zoom is used instead.

:::

## What's in the package

- 3D model (FBX) and textures
- 1 FX layer
- 3 prefabs
- 34 parameter bits (0 if you choose Local)
- 2 shaders, "StreamCam" and "HideInCamera", made by Rollthenerd and Nestorboy
- A README

## Get started

1. Buy CamAnim on [Gumroad](https://elnullaix.gumroad.com/l/CameraAnimationElnullaIX). Your receipt includes a license key for the desktop app.
2. Import the package into your avatar's Unity project.
3. Pick how to install it:
   - [Standard](./install/standard.md): CamAnim's own camera.
   - [With VRCLens](./install/vrclens.md): link CamAnim to VRCLens.
   - [With VirtualLens2](./install/virtuallens2.md): link CamAnim to VirtualLens2.

:::tip Use VRCFury (recommended)

VRCFury sets up the FX layer and parameters for you. Download the latest version from the [VRCFury website](https://vrcfury.com/download). Prefer to do it by hand? Follow the [manual installation](./install/manual.md).

:::

Share what you make with **#CamAnim** on TikTok, X and other social media. I'd love to see it! ♡

Keep an eye on the [Updates](/updates) page for new versions.
