---
title: Desktop app
---

# CamAnim desktop app

The CamAnim desktop app saves your camera paths on your PC. You can edit them in 3D, send them back to VRChat in any world, and share them with friends. It talks to your avatar over OSC.

![The CamAnim desktop app Library](@site/static/img/app/library.png)

## Install and activate

1. Download the app from your [Gumroad](https://elnullaix.gumroad.com/l/CameraAnimationElnullaIX) purchase (your Gumroad library or receipt).
2. Run the installer, then open **CamAnim**.
3. Enter your **license key**. It's on your Gumroad receipt and in your Gumroad library.

![Where to find your license key on Gumroad](@site/static/img/WhereToFindTheKey.png)

:::info Bought on Booth?

Send ElnullaIX a message on [Discord](https://discord.gg/KFPUU3pEKg) with proof of your Booth purchase, and you'll get a key.

:::

## Connect to VRChat

1. In VRChat, open the Action Menu › **Options** › **OSC** and make sure it's **Enabled**.
2. Open the CamAnim app. It turns on **OSC** in your avatar's CamAnim menu by itself, and turns it off again when you close the app.
3. Check the status at the top of the app:
   - **VRChat connected**: all good.
   - **Waiting for VRChat**: VRChat isn't sending anything yet. See [Troubleshooting](#troubleshooting).
   - **OSC error**: the app couldn't open its OSC connection. See [Troubleshooting](#troubleshooting).

The app finds VRChat, and VRChat finds the app, through **OSCQuery**, so it works alongside other OSC apps like VRCFT or OVR Toolkit.

![OSC turns on by itself when the app is open](@site/static/img/Auto_Active_OSC.webp)

## Library

Your saved paths show up as cards, newest first. Each card shows a drawing of the path seen from above, the number of waypoints, the author and the date.

- Click a card to open it in the 3D editor.
- Type in the search box to find paths by name or author.
- Click **⋯** on a card to **Rename**, **Export**, **Show in Explorer** or **Delete** it.
- Files you copy into the animations folder show up by themselves.

## 3D editor

![The 3D editor](@site/static/img/app/editor.png)

- **Drag** to turn the view, **scroll** to zoom, and press **Tab** to hide the panels. **Reset view** fits the whole path again.
- Click a waypoint in the list to select it. The camera in VRChat jumps to that waypoint.
- Use the sliders to move or turn the selected waypoint. VRChat updates live.
- Press **▶** to preview the path in the 3D view.
- **Save** keeps your changes. **Save as…** makes a copy with a new name.

## Record a new path

1. Click **● New recording** (top right).
2. In VRChat, place your waypoints as usual with the CamAnim menu.
3. The app follows along: the live camera moves in the 3D view and each waypoint appears as you place it. The badge shows which waypoint you're on.
4. Click **■ Stop**, give the path a name, and it's saved.

![Recording a new path](@site/static/img/app/record.png)

## Send to VRChat

Open a path and click **Send to VRChat**. The app sends every waypoint to your avatar, one by one, with a progress bar. Then press **Play** in your CamAnim menu.

:::tip Using a path in another world

Every world has its centre (0, 0, 0) in a different place, so a saved path can end up somewhere odd. Use [Reset Place](./use.md#reset-place) first to bring CamAnim to you, or **Attach Player** to move it with you, then send the path.

:::

:::tip Reset your avatar by accident?

Resetting your avatar or recalibrating full-body tracking turns CamAnim off. Turn it on again and click **Send to VRChat**: your path is still saved in the app.

:::

## Compact mode

Click **Compact** (top right) to shrink the app into a small window that stays on top of VRChat. Pick a path, then use **● Record** or **▶ Send**. Click **⤢ Full size** to go back.

![Compact mode](@site/static/img/app/compact.png)

## Settings

![Settings](@site/static/img/app/settings.png)

- **OSC IP address** and **ports**: leave them at `127.0.0.1`, **9000** (send) and **9001** (listen) unless you changed VRChat's OSC ports. With VRChat running, **Discover via OSCQuery** fills in VRChat's address and port for you.
- **Theme**: System, Dark or Light.
- **Username**: shown as the author of the paths you record, so friends see who made them.
- **Backup all animations**, **Open animations folder**, and **Log out**.

## Share paths with friends

Each path is a `.json` file in your animations folder:

`%USERPROFILE%\AppData\LocalLow\VRChat\VRChat\OSC\CameraAnimationHppe\Json`

Click **Open animations folder** in Settings, or **Show in Explorer** on a card, to get there. Send the file to a friend: they copy it into their own folder and it shows up in their Library.

## Troubleshooting

### "Port 9001 is used by another app"

That's fine: another OSC app already has port 9001, so CamAnim listens on a free port and tells VRChat about it through OSCQuery. Both apps keep working.

### OSC error

The app couldn't open its OSC connection. Restart the app; if it keeps happening, ask on [Discord](https://discord.gg/KFPUU3pEKg).

### Stuck on "Waiting for VRChat"

- Turn on OSC in VRChat: Action Menu › **Options** › **OSC** › **Enabled**.
- Make sure CamAnim is enabled on your avatar.
- Just added CamAnim to an avatar you used with OSC before? Use Action Menu › **Options** › **OSC** › **Reset Config** so VRChat picks up the new parameters.

### My license key isn't accepted

Copy the key from your Gumroad receipt again, without spaces before or after it. Still not working? Ask on [Discord](https://discord.gg/KFPUU3pEKg).
