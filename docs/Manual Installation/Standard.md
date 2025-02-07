---
title: Standard
sidebar_position: 1
---

import ReactPlayer from 'react-player';

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::warning

### This page is under construction.

:::
:::info

**CAHppe v2.X.X is working for manual installation now. Please check the video.**

:::

<ReactPlayer  controls url='https://youtu.be/z3LoaGhcHwc?si=3xTvjJwBK6S4AG26'/>

:::tip Info

### if you want link your CAHppe with VRCLens or VirtualLens2, you can go to Installation side.

:::








---

:::note

#### CAHppe 2.X.X is ready to use. Please updated your version latest!

:::

### 1. Avatar ready
Get your avatar ready (Caution, To ensure your avatar need free of parameter 34 bits)
:::note

Or 0 bit if you prefer everything to be local only, as other remote players won't be able to see your CA assets. (See the 9.)

:::

### 2. Manual Folder
Go to find folder of Manual from Camera Animation

:::tip

"I can't find where folder?"

It's in `Assets/Hppedeaf/Camera Animation v2/Manual`

:::

### 3. Put prefab in your avatar
grab Manual prefab and drag to drop inside in your avatar.

### 4. Move Waypoint
Move your Hand Waypoint to locate your tip of index finger.

![gif](@site/static/img/2.gif)

:::tip Left Hand

If you prefer to be Left hand, use this instead. Make sure the blue arrow is facing forward with red arrow down.
![gif](@site/static/img/LeftHandArrows.gif)

:::
:::tip A-Pose

If your avatar is in A-Pose, use this instead. Make sure the blue arrow is facing forward.
![gif](@site/static/img/3.gif)

:::


### 5. unpack the prefrab.

when you done locate waypoint on your index finger, go to unpack the prefrab "Camera Animation". Not the unpack completely.

### 6. Locate your hand waypoint

grab 'Hand Waypoint' and drag to drop in your bone Wrist.

:::tip Right Hand

Hip > Spine > Chest > Right Shoulder > Right Arm > Right Elbow > Right Wrist
 
:::

:::tip Left Hand

Hip > Spine > Chest > Left Shoulder > Left Arm > Left Elbow > Left Wrist

:::

### 7. Locate your target player

grab 'target player' and drag to drop in your bone neck.

:::tip Transform

Make sure both Position and Rotation all is in 0

:::

### 8. ScreenSpace

Select 'ScreenSpace' as you can see the VRC Position Constraint. grab your bone head and drag to drop in 'Sources'

### 9. AV3 Manager

Open your AV3 Manager, put your avatar in it. then open the FX and select 'add animator to merge' then go find "CA v2" in Control folder and drag it to drop in AV3 Manager and click 'Merge on current'

:::tip

"I can't find where CA v2?"

It's in `Assets/Hppedeaf/Camera Animation v2/Control`

:::

then open the Parameters and then drag "CA v2 Para" to drop in AV3 Manager and click 'Copy parameters'

:::tip

"I can't find where CA v2 Para?"

It's in `Assets/Hppedeaf/Camera Animation v2/Control`

:::
:::tip Local Only

or you can drag "CA v2 Para Local" to drop in AV3 Manager and click 'Copy parameters'

It's in `Assets/Hppedeaf/Camera Animation v2/Control/local`

:::

### 10. Main Menu

click your avatar and look into your VRC Avatar Descriptor and then scroll down to click your Menu to open

once you got your Menu open, click the "+" to add new subMenu then grab "CA Main Menu" to drag to drop in Sub Menu

:::tip

"I can't find where CA Main Menu?"

It's in `Assets/Hppedeaf/Camera Animation v2/Control`

:::

### 11. and PUBLISH!

and you done it all. go publish it!