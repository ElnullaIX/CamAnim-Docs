---
title: With VRCLens
sidebar_position: 2
---

import ReactPlayer from 'react-player';

require to get [VRCLens](https://hirabiki.gumroad.com/l/rpnel) from Gumroad

:::info Important

#### This only works for CAHppe V2. Please make sure to keep your CAHppe version up to date.

:::
:::info IMPORTANT

**You need installation on Standard first and done Set up VRCLens first. Then you can start follow the tutorial here of how linked VRCLens with CAHppe :)**

:::

___

### 1. Avatar ready
Get your avatar ready with VRCLens in it (Caution, To ensure your avatar need free of parameter 34 bits)
:::note

Or 0 bit if you prefer everything to be local only, as other remote players won't be able to see your CA assets.

`Assets/Hppedeaf/Camera Animation v2/Control/Local`

![banner](@site/static/img/Local.png)

:::

![banner](@site/static/img/AvatarReady.png)

___

### 2. DynVR + Parents
Go to find the "DynVR" in your right or left hand and click add component, select "VRC Parent Constraint" to add.

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
Go to Animation tab and search for VRCLens Off and VRCLens On. (Press V on list to find them fast) Click VRCLens Off then press red circle to recording, set DynVR VRC Parents Constraint Weight to 0. stop the recording, going to next VRCLens On, then press red circle to recording, set DynVR VRC Parents Constraint Weight to 1. stop the recording. and then remove CA v2 in your avatar animator(Sorry, I forget in video.) and then **PUBLISH!**

![gif](@site/static/img/VRCLensTutorial4.webp)

:::warning IMPORTANT

VRCLens Off = Weight 0

VRCLens On = Weight 1

:::

:::tip

If you can't find where the Animation Tab is. Click on Window>Animation>Animation in top bar. you'll get it. :)

![banner](@site/static/img/AnimationTab.png)

:::