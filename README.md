# 3dAnimate

3dAnimate is a jQuery plugin that allows you to give any portion of your website a 3d mouse over effect.

## Get Started

First download and load the 3d js file after jQuery and before your script.

Next, call animate3d on an element or group of elements

```html
<script src="./scripts/jquery-3.0.0.js"></script>
<script src="./scripts/3d.js"></script>
	
<script>
```
```javascript
	$('div').animate3d({});
```
```html
</script>
```
	
Its that easy! Passing in an empty object uses all of the default settings of 3dAnimate. You can customize by passing in any of the following key|value pairs. Shown below are the default values.

```javascript
$('element').animate3d({
	perspective:   1000px,
	distance:      50px,
	rotation:      0.5,
	startX:        0,
	startY:        0
});
```	
## Explanation

Go to ... for a live demo to really see how Animate3d works

The element you call Animate3d on is the 'canvas', and each child element a 3d layer. When you mouse over the element you will see the perspecive change and each child element will appear closer to you than the last.