---
title: Manual installation
---

import ReactPlayer from 'react-player';

# Manual installation (without VRCFury)

Prefer not to use VRCFury? Watch the video or follow the steps below.

<ReactPlayer controls url='https://youtu.be/z3LoaGhcHwc?si=3xTvjJwBK6S4AG26'/>

:::info

These steps are for CamAnim v2. Linking [VRCLens](./vrclens.md) or [VirtualLens2](./virtuallens2.md) works with a manual installation too.

:::

## 1. Get your avatar ready

Your avatar needs **34 free parameter bits**, or 0 if you choose Local only in step 9 (other players then won't see your CamAnim camera and objects).

## 2. Find the Manual folder

It's in `Assets/ElnullaIX/CamAnim/Manual`.

## 3. Add the prefab

Drag the Manual prefab inside your avatar.

## 4. Place the Hand Waypoint

Move **Hand Waypoint** to the tip of your index finger.

![Moving Hand Waypoints to the index finger](@site/static/img/2.gif)

:::tip Left hand

For the left hand, turn it so the blue arrow faces forward and the red arrow points down.

![Left hand arrows](@site/static/img/LeftHandArrows.gif)

:::

:::tip A-pose

If your avatar is in A-pose, make sure the blue arrow faces forward.

![A-pose arrows](@site/static/img/3.gif)

:::

## 5. Unpack the prefab

Right-click the **CamAnim** prefab and choose **Unpack** (not Unpack Completely).

## 6. Move the Hand Waypoint to your wrist

Drag **Hand Waypoint** onto your wrist bone.

:::tip Right hand

Hips › Spine › Chest › Right Shoulder › Right Arm › Right Elbow › Right Wrist

:::

:::tip Left hand

Hips › Spine › Chest › Left Shoulder › Left Arm › Left Elbow › Left Wrist

:::

## 7. Move the Target Player to your neck

Drag **Target Player** onto your neck bone.

:::tip

Set both its Position and Rotation to 0.

:::

## 8. ScreenSpace

Select **ScreenSpace**. In its VRC Position Constraint, drag your head bone into **Sources**.

## 9. Merge with AV3 Manager

1. Open AV3 Manager and add your avatar.
2. Open **FX**, choose **Add animator to merge**, drag in **CamAnim FX** from `Assets/ElnullaIX/CamAnim/Control`, and click **Merge on current**.
3. Open **Parameters**, drag in **CamAnim Para** from `Assets/ElnullaIX/CamAnim/Control`, and click **Copy parameters**.

:::tip Local only

Use **CamAnim Para Local** from `Assets/ElnullaIX/CamAnim/Control/Local` instead.

:::

## 10. Add the menu

1. Select your avatar and, in the **VRC Avatar Descriptor**, open your **Menu**.
2. Click **+** to add a control, set it to **Sub Menu**, and drag in **CamAnim Main Menu** from `Assets/ElnullaIX/CamAnim/Control`.

## 11. Upload

That's it. Upload your avatar! ♡
