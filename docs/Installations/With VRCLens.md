---
title: With VRCLens
sidebar_position: 2
---

require to get [VRCLens](https://hirabiki.gumroad.com/l/rpnel) from Gumroad

:::note

#### Works with V1.3.2 of CAHppe. The new V2 of CAHppe has not yet been developed to connect with VRCLens.

:::

___
<p></p>
### 1. Avatar ready
Get your avatar ready (Caution, To ensure your avatar need free of parameter 34 bits)


___
<p></p>
### 2. Find folder
Go to find folder of Plugin from Camera Animation folder

:::tip

"I can't find where folder?"
It's in Assets / Hppedeaf / Camera Animation / Plugin

:::


___
<p></p>
### 3. CAHppe Linked VRCLens Prefab
Grab and drag CAHppe linked VRCLens Prefab of RIGHT HAND or LEFT HAND (whatever your prefer left or right hand) to drop on your top of avatar (Not in Armature bones)


___
<p></p>
### 4. "Hand Waypoints"
In CA prefab, select “Hand Waypoints” if you can see the blue ball and move it to near your Index Finger


___
<p></p>
### 5. DynVR + Parents
Go to check on your right or left hand to select "DynVR" and click add component, create "Parent Constraint" then click the + from Sources


___
<p></p>
### 6. Connected VRCLens to CA
Look in CA prefab, open "World Constraint 1" to find "Camera" drag it to drop on DynVR in Parent Constraint sources, click lock in Constraint Setting, Weight default 0 then click the check "is active". (Don't click Activate button)

:::danger IMPORTANT

Seriously. Don't click "Activate button" That'll break the linked!<p></p>
![banner](@site/static/img/DontClickIt.png)

:::


___
<p></p>
### 5. Publish!
And publish! (VRCFury will setup all FX and Parameter for you itself)

<!-- // FULL TUTORIAL VIDEOS HERE -->

<!-- When will ready for Beta v2? -->