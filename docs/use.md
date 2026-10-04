---
title: Using in VRChat
---

# Using CamAnim in VRChat

:::danger Set your VRC Camera to "Look at me"

CamAnim is linked to the VRChat camera, so the camera must look at your face.

![The VRC Camera behaviour set to Look at me](@site/static/img/LookAtMeBehaviour.webp)

:::

:::info Using VRCLens?

Everything works the same, except zoom: CamAnim uses VRCLens's zoom instead of its own.

:::

## Main menu

### Enabled

Turns CamAnim on.

![Enabled](@site/static/img/Enabled.webp)

### Waypoints

Place points around you. The camera follows them as a path.

![Placing waypoints](@site/static/img/WayPoints.webp)

:::tip

Press and hold the button to place a waypoint, then let go.

:::

### Play

The camera follows your waypoints along the path.

![Play](@site/static/img/Play.webp)

### Pause

Pauses the camera halfway. It stays where it is.

![Pause](@site/static/img/Pause.webp)

### Stop

Stops the camera and sends it back to the start of the path.

![Stop](@site/static/img/Stop.webp)

### Settings

Opens the [Settings menu](#settings-menu): speed, zoom, look-at and more.

![Settings](@site/static/img/Settings.webp)

### Mode System

Opens the [Mode System menu](#mode-system-menu): Orbit, Centre Player and OSC.

![Mode System](@site/static/img/ModeSystem.webp)

## Settings menu

### Camera Environment

Opens the [Camera Environment menu](#camera-environment-menu): background, hiding players, portrait or landscape.

### Speed

Makes the camera move slower or faster along the path.

![Speed](@site/static/img/Speed.webp)

### Loop

The camera keeps going round from start to end.

![Loop](@site/static/img/Loop.webp)

### Zoom

Zooms the camera in or out.

![Zoom](@site/static/img/Zoom.webp)

### Look at Player

The camera keeps looking at you while it moves.

![Look at Player](@site/static/img/LookAtPlayer.webp)

### Look at Drop

The camera keeps looking at a spot you drop while it moves.

![Look at Drop](@site/static/img/LookAtDrop.webp)

:::tip

To remove the drop, press and hold the **Look at Drop** button, then move it close to your other hand.

![Removing the drop](@site/static/img/RemoveDrop.webp)

:::

### Look at Remote Player

The camera keeps looking at another player while it moves.

![Look at Remote Player](@site/static/img/LookAtRemotePlayer.webp)

:::tip

Click the button, place it on the other player's chest, and hold it there for 1 second to attach it.

:::

### Reset

Removes all waypoints.

![Reset](@site/static/img/Reset.webp)

:::tip

Press and hold **Reset** for 3 seconds.

:::

:::tip Remove one waypoint

Press and hold the button of the waypoint number you want to delete, then move it close to your other hand.

![Removing one waypoint](@site/static/img/RemoveWaypoint.webp)

:::

## Camera Environment menu

### Local Player

Hides you from the camera.

![Local Player](@site/static/img/LocalUser.webp)

### Remote Player

Hides other players from the camera.

![Remote Player](@site/static/img/RemoteUser.webp)

### Background

Turns the background off.

![Background](@site/static/img/Background.webp)

### Background Colour

Changes the background colour (only when the background is off).

![Background Colour](@site/static/img/BackgroundColour.webp)

### Portrait

Switches between portrait and landscape.

![Portrait](@site/static/img/Portrait.webp)

## Mode System menu

### Orbit

The camera circles around you. See the [Orbit menu](#orbit-menu).

### Centre Player

The waypoints travel with you. See the [Centre Player menu](#centre-player-menu).

### OSC

Shows only while the [CamAnim desktop app](./desktop-app.md) is open, and turns on by itself.

:::warning

OSC needs the CamAnim desktop app.

:::

## Orbit menu

### Orbit Enabled

Turns on orbiting around you.

![Orbit Enabled](@site/static/img/OrbitEnabled.webp)

### Reset Place

Brings CamAnim back to you.

![Reset Place](@site/static/img/resetplace.webp)

:::tip

Click **Reset Place** once and it reappears centred on you.

:::

:::tip Move to the world centre

Click and hold **Reset Place**. When the red circle disappears, let go: it moves to the centre of the world (0, 0, 0).

![Reset Place to the world centre](@site/static/img/ResetPlace2.webp)

:::

:::note

Some worlds put their centre (0, 0, 0) off-screen or somewhere odd. That depends on the world, not on CamAnim.

:::

### Attach Player

Attaches CamAnim to you so it moves with you.

![Attach Player](@site/static/img/Attach.webp)

## Orbit settings

### Height

Sets the camera height.

![Height](@site/static/img/Height.webp)

### Diameter

Sets the size of the circle.

![Diameter](@site/static/img/Diameter.webp)

### Play (Orbit)

Press Play and the camera circles around you!

![Play Orbit](@site/static/img/PlayOrbit.webp)

### Orbit Free Active

Turns on Free Orbit.

![Orbit Free Active](@site/static/img/OrbitFreeEnabled.webp)

### Orbit Free

Move the orbit anywhere you like.

![Orbit Free](@site/static/img/OrbitFree.webp)

:::tip

Set **Height** to 0 when you use Orbit Free (recommended).

:::

### Orbit Free Play

![Orbit Free Play](@site/static/img/PlayOrbitFree.webp)

## Centre Player menu

### Centre Player Enabled

Turns on Centre Player. When you see a red circle on the floor, place your waypoints wherever you like, press **Attach Player**, then **Play**!

![Centre Player](@site/static/img/CentrePlayerPlay.webp)
