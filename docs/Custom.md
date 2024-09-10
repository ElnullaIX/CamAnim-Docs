---
title: Custom
sidebar_position: 9
---

import ReactPlayer from 'react-player';

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# The Custom

You can customize your waypoints' colors, path line colors, the 3D model of the camera, and more!

---

## COLOURS!!

![gif](@site/static/img/WaypointsandLineColours.webp)

### 1. Colours your waypoints
Open the Camera Animation prefab, go to 'Waypoints,' select any 'waypoint,' check the material, and change it to the color of your choice.

![gif](@site/static/img/WaypointsColours.webp)

---

### 2. Colour the path line
Open the Camera Animation prefab, select 'Bezier Curves 1,' check the Trail Renderer, and change it to the color of your choice. Done!

![gif](@site/static/img/LineColours.webp)

---

## 3D MODEL

![gif](@site/static/img/3DModelForCamera.webp)

### 1. Replace Camera model
Open the Camera Animation prefab, go to 'Camera,' and activate the Camera. Check 'Smooth Look At' and activate the Mesh Renderer. Grab any 3D model of a camera, drag and drop it into 'Smooth Look At.' Move and scale your 3D model camera behind the POV Camera. Then, activate 'Camera Everyone' and check if your 3D model camera is correctly placed behind the POV Camera. Finally, in 'Smooth Look At,' remove the Mesh Renderer and Camera (Mesh Filter).

<ReactPlayer playing controls url='https://youtu.be/KhbbGzaOIW8'/>

---

### 2. Move the Quad
Check the Quad and move it behind the 3D camera model to your preferred position. Once the Quad is placed, move your 3D camera model inside the Quad. Then, turn off 'Camera' in Camera Everyone, deactivate Camera Everyone, turn off the Quad, and turn off the Camera. Done!

<ReactPlayer playing controls url='https://youtu.be/CzlEEZwZ6D0'/>

---
<!--This Page is completed.-->