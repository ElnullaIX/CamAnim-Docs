---
title: Customize
---

import ReactPlayer from 'react-player';

# Customize

Change the colour of your waypoints and path line, or use your own 3D camera model.

![Custom waypoint and line colours](@site/static/img/WaypointsandLineColours.webp)

## Colours

### Waypoint colour

Open the **CamAnim** prefab › **Waypoints**, select a waypoint, and change the colour of its material.

![Changing a waypoint colour](@site/static/img/WaypointsColours.webp)

### Path line colour

Open the **CamAnim** prefab, select **Bezier Curves 1**, and change the colour in its **Trail Renderer**. Done!

![Changing the path line colour](@site/static/img/LineColours.webp)

## Your own camera model

![A custom 3D camera model](@site/static/img/3DModelForCamera.webp)

### 1. Replace the camera model

1. Open the **CamAnim** prefab, go to **Camera** and activate it.
2. Select **Smooth Look At** and turn on its **Mesh Renderer**.
3. Drag your 3D camera model into **Smooth Look At**.
4. Move and scale your model so it sits behind the POV camera.
5. Turn on **Camera Everyone** and check that your model sits correctly behind the POV camera.
6. In **Smooth Look At**, remove the **Mesh Renderer** and the **Camera (Mesh Filter)**.

<ReactPlayer controls url='https://youtu.be/KhbbGzaOIW8'/>

### 2. Move the Quad

1. Select the **Quad** and move it behind your camera model.
2. Move your camera model inside the Quad.
3. Turn off **Camera** in Camera Everyone, deactivate **Camera Everyone**, turn off the **Quad**, and turn off the **Camera**. Done!

<ReactPlayer controls url='https://youtu.be/CzlEEZwZ6D0'/>
