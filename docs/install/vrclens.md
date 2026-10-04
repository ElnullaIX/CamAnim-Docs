---
title: With VRCLens
---

# Install: with VRCLens

You need [VRCLens](https://hirabiki.gumroad.com/l/rpnel) from Gumroad.

:::info Before you start

1. Install CamAnim with the [Standard](./standard.md) steps (or the [manual installation](./manual.md), which works too).
2. Set up VRCLens on your avatar.

Then link the two with the steps below.

:::

## 1. Get your avatar ready

Your avatar needs VRCLens and **34 free parameter bits**.

:::note Local only (0 bits)

Want everything local only? Use the version in `Assets/ElnullaIX/CamAnim/Control/Local`. It needs 0 bits, but other players won't see your CamAnim camera and objects.

![The Local folder](@site/static/img/Local.png)

:::

![An avatar with VRCLens and CamAnim](@site/static/img/AvatarReady.png)

## 2. Add a Parent Constraint to DynVR

Find **DynVR** in your right or left hand, click **Add Component** and add a **VRC Parent Constraint**.

![Adding a VRC Parent Constraint to DynVR](@site/static/img/VRCLensTutorial1.webp)

## 3. Connect VRCLens to CamAnim

1. Open the **CamAnim** prefab and find **Camera**.
2. Drag **Camera** into the **Sources** of the VRC Parent Constraint.
3. Click **Activate**.
4. If numbers appear at the bottom, untick **Is Active** and **Lock**, set all the numbers to 0, then tick **Lock** and **Is Active** again.

![Connecting CamAnim's camera](@site/static/img/VRCLensTutorial2.webp)

## 4. Add CamAnim FX to the Animator for now

Add **CamAnim FX** to your avatar's Animator. You'll remove it again in the next step.

![Adding CamAnim FX to the Animator](@site/static/img/VRCLensTutorial3.webp)

## 5. Record the two animations, then upload

1. Open the **Animation** tab and find **VRCLens Off** and **VRCLens On** (press V in the list to jump to them).
2. Select **VRCLens Off**, press the red record button, set the DynVR VRC Parent Constraint **Weight** to **0**, and stop recording.
3. Select **VRCLens On**, press record, set the **Weight** to **1**, and stop recording.
4. Remove **CamAnim FX** from your avatar's Animator.
5. Upload! ♡

![Recording the VRCLens animations](@site/static/img/VRCLensTutorial4.webp)

:::warning Remember

VRCLens Off = Weight 0

VRCLens On = Weight 1

:::

:::tip Can't find the Animation tab?

In the top bar, click **Window › Animation › Animation**.

![The Animation tab menu](@site/static/img/AnimationTab.png)

:::
