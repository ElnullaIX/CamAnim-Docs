---
title: Standard
---

# Install: Standard

:::info

These steps are for CamAnim v2. Keep CamAnim up to date.

:::

## 1. Open the installer

In Unity: **Tools → CamAnim → Installer**.

## 2. Pick your avatar

Drop your avatar from the Hierarchy into the **Avatar** field. Fix anything marked with a red cross. The parameter budget line shows how many bits CamAnim needs (turn **Visible to other players** off to use 0).

## 3. Choose your setup

- **Install with:** **VRCFury** or **Modular Avatar**, whichever your other avatar tools use. If only one is in your project, the installer picks it.
- **Waypoints:** how many waypoints you can place in VRChat, from 2 to 64.
- **Hand:** the hand you place waypoints with. The installer puts Hand Waypoints at your index fingertip.
- **Desktop app (OSC)**, **Visible to other players (Sync)**, **VRCLens**, and colours.
- **Show path points (debug cubes)** (under Advanced): puts a small cube on every point that builds the camera's curve, so you can see it in VRChat. For testing only: turn it off and press **Update** before you share the avatar.

## 4. Install

Press **Install**. The result shows in the window; **Ctrl+Z** undoes it. Changed your mind later? Pick the avatar again, change the setup, press **Update**.

:::note
The installer makes one animator per waypoint count in `Assets/ElnullaIX/CamAnim/Generated` (for example `CamAnim FX 12`). Avatars with the same count share it. Don't edit or delete these; press **Update** instead. When you update CamAnim, don't delete the `CamAnim` folder.
:::

## 5. Upload

Upload your avatar. VRCFury or Modular Avatar sets up the FX layer, menu and parameters for you. Done! ♡

![Uploading the avatar](@site/static/img/4.gif)
