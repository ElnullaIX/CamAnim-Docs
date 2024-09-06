---
title: With VRCLens
sidebar_position: 2
---

import ReactPlayer from 'react-player';

require to get [VRCLens](https://hirabiki.gumroad.com/l/rpnel) from Gumroad

:::info IMPORTANT

**You need installation on Standard first and done Set up VRCLens first. Then you can start follow the tutorial here of how linked VRCLens with CAHppe :)**

:::

___

### 1. Avatar ready
Get your avatar ready with VRCLens in it (Caution, To ensure your avatar need free of parameter 34 bits)

![banner](@site/static/img/AvatarReady.png)

___

### 2. DynVR + Parents
Go to find the "DynVR" in your right or left hand and click add component, create "VRC Parent Constraint"

![gif](@site/static/img/VRCLensTutorial1.webp)

___

### 3. Connected VRCLens to CA
Open "Camera Animation Prefab" to find "Camera" on list and drag it to drop in VRC Parent Constraint sources, click Activate button, if you see number in bottom, go to Unchecked on both "Is Active" and "Lock", to change all number to 0 on bottom then checked "Lock" and "Is Active" again.

![gif](@site/static/img/VRCLensTutorial2.webp)

___

### 4. the Animator
Add CA V2 in your avatar animator (When you done with Animation, please remove it off the animator later)

![gif](@site/static/img/VRCLensTutorial3.webp)

___

### 5. Animation then Publish!
Go to Animation tab and search for VRCLens Off and VRCLens On. (Press V on list to find them fast) Click VRCLens Off then press red circle to recording, set DynVR VRC Parents Constraint Weight to 0. stop the Red circle, going to next VRCLens On, then press red circle to recording, set DynVR VRC Parents Constraint Weight to 1. stop the Red circle. and then remove CA v2 on your avatar animator(Sorry, I forget in video.) and **PUBLISH!**

![gif](@site/static/img/VRCLensTutorial4.webp)

:::warning IMPORTANT

VRCLens Off = Weight 0

VRCLens On = Weight 1

:::

:::tip

If you can't find where the Animation Tab is. Click on Window>Animation>Animation in top bar. you'll get it. :)

![banner](@site/static/img/AnimationTab.png)

:::