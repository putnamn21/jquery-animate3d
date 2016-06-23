# 3dAnimate

3dAnimate is a jQuery plugin that allows you to give any portion of your website a 3d mouse over effect.

Demo - [animate3d](http://putnamn21.github.io/jquery_animate3d)

## Get Started

First download and load the 3d js file after jQuery and before your script.

Next, call animate3d on an element or group of elements.

```html
<script src="./scripts/jquery-3.0.0.js"></script>
<script src="./scripts/3d.js"></script>	
<script>
```
```javascript
	$('element').animate3d({});
``` 
```html
</script>
```
	
Its that easy! Passing in an empty object uses all of the default settings of 3dAnimate. You can customize by passing in any of the following {key:value} pairs. Shown below are the default values.

```javascript
$('element').animate3d({
	perspective:   1000,
	distance:      50,
	rotation:      0.5,
	startX:        0,
	startY:        0
});
```	
## Explanation

Go to [animate3d](http://nathan-putnam.me/animate3d) for a live demo to really see how Animate3d works!

The element you call Animate3d on is the 'canvas', and each child element a 3d layer. When you mouse over the element you will see the perspecive change and each child element will appear closer to you than the last.

Simply place and position the child-elements how you want them to look, without using the transform css property (thats the one the animate3d uses to give its effect).

#### Perspective

Number greater than 0. Default is 1000.
- Sets the perspective on the element

See w3s explanation - [Perspective](http://www.w3schools.com/cssref/css3_pr_perspective.asp)

#### Distance

Number greater than 0. Default is 50.
- Distance controls the perceived space between layers

#### Rotation

Number between 0 and 1. Default is 0.5.
- Rotation controls how much the element is tilted during mouse over. If rotation is at 1 the element will tilt 90 degrees with the mouse at the edge of the element.

#### StartX

Number between -1 and 1. Default is 0.
- Sets the default view of the element tilted along the X axis

#### StartY

Number between -1 and 1. Default is 0.
- Sets the default view of the element tilted along the Y axis
