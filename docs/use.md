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

Place points around you. The camera follows them as a path, through every waypoint. While you place them, the camera sits at your hand, so the screen shows the shot from where the next waypoint goes. A glowing line traces the curve through your waypoints while you edit and moves with them at once; with **Loop** on it also curves from the last waypoint back to the first. It hides while the camera plays.

![Placing waypoints](@site/static/img/WayPoints.webp)

- **+ Add waypoint:** hold it to place the next waypoint at your hand, then let go.
- **− Remove last:** removes the last waypoint you placed.
- **Easing:** how the camera moves between waypoints. Nothing on = Linear (steady). **Ease every waypoint** slows down at each waypoint, **Ease start and end** starts and stops smoothly, **Hold (stop-motion)** jumps from waypoint to waypoint.

### Play

The camera follows your waypoints along the path.

![Play](@site/static/img/Play.webp)

### Pause

Slows the camera down smoothly until it stops where it is. Press it again to carry on at your speed.

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

Opens a small menu:

- **Speed:** a radial from stop (0 %) to full speed (100 %). The camera keeps the same speed on long and short parts of the path.
- **Reverse:** turn it on to send the camera backward along the path, off to go forward.

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

Grab the waypoint (touch it and make a fist), then move it close to your other hand. Or use **− Remove last** for the last one.

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

The camera circles you or a spot you place, in a circle, spiral or arc. See the [Orbit menu](#orbit-menu).

### Centre Player

The waypoints travel with you. See the [Centre Player menu](#centre-player-menu).

### OSC

Shows only while the [CamAnim desktop app](./desktop-app.md) is open, and turns on by itself.

:::warning

OSC needs the CamAnim desktop app.

:::

## Orbit menu

The camera circles a centre (you or a spot you place) and always looks at it, with the horizon level.

### Orbit

Turns Orbit on. **Play**, **Pause** and **Stop** work the same as for the path: Pause and Speed 0 % stop the camera where it
is, Stop brings it back to the front.

### Shape

- **Circle:** goes all the way round. **Amount** stretches it into an oval (up to twice as wide side to side).
- **Spiral:** circles while rising, then comes back down (2 laps up, 2 laps down). **Amount** sets how high it climbs (up to 3 m).
- **Arc:** swings back and forth across the front. **Amount** sets how wide the swing is (60° to 300°).

Changing the shape while it plays glides the camera to the new one in about a second.

### Size

How far the camera stays from the centre: 0.5 m to 10 m.

### Height

The camera's height above the centre: −1 m to +3 m.

### Setup

- **Aim:** the height the camera looks at, from the centre's feet to 2.5 m above.
- **Speed:** the same Speed and Reverse as the path. 100 % is one lap in 5 seconds.
- **Centre:** what the camera circles:
  - **Me** (the default): you. It follows where you go, not which way you turn.
  - **Orbit Free:** a spot you place anywhere (a place, an object, the middle of a group). Hold **Move Orbit Free** to carry
    it in your hand, then let go to drop it.

  Tap the centre that is on to go back to **Me**. Turning Orbit Free off keeps its spot for next time.
- **Zoom:** zooms the camera in or out.

The front of every shape is the way you (or the other player) face when you press Play.

## Centre Player menu

### Centre Player Enabled

Turns on Centre Player. When you see a red circle on the floor, place your waypoints wherever you like, press **Attach Player**, then **Play**!

![Centre Player](@site/static/img/CentrePlayerPlay.webp)

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
