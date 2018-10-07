---
id: guide-es5
order: 1
title: ES5
---

#### Importing the library

To get started, either download the package files or use the [jsDelivr](https://www.jsdelivr.com) CDN.

First step is to include the stylesheet into the `<head>` section:

```html
<!-- Package -->
<link rel="stylesheet" href="latte-carousel.min.css">

<!-- CDN -->
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/latte-carousel@1.2.1/dist/latte-carousel.min.css">
```

Then, place the following script near the end of the `<body>` section:

```html
<!-- Package -->
<script src="latte-carousel.min.js"></script>

<!-- CDN -->
<script src="https://cdn.jsdelivr.net/npm/latte-carousel@1.2.1/dist/latte-carousel.min.js"></script>
```

#### Creating a carousel

With both stylesheet and script included, now it is time to create a carousel.

LatteCarousel uses the following markup for each carousel (ignoring the id attribute):

```html
<div class="latte-carousel" id="carousel">
    <div class="latte-item">1</div>
    <div class="latte-item">2</div>
    <div class="latte-item">3</div>
    <div class="latte-item">4</div>
</div>
```

> Avoid applying styles to `.latte-carousel` or `.latte-item` elements as they are used to compute dimensions.
>
> The recommended way is to create a new `<div>` inside `.latte-item` and apply styles to this element (e.g. change the default font size of zero).

After `DOMContentLoaded` event, create the carousel passing a selector for the `.latte-carousel` element and a options object:

```javascript
var options = {
    count: 3,
    touch: true,
    buttons: true,
    dots: true,
    rewind: true,
    autoplay: 0,
    animation: 500,
    responsive: {
        "0": { count: 1.5, buttons: false },
        "480": { count: 2.5, buttons: false },
        "768": { count: 3, touch: false },
        "1440": { count: 4, touch: false },
    },
};

var carousel = new latte.Carousel("#carousel", options);
```

#### Triggering events

With a carousel instance, you can also trigger events:

```javascript
carousel.trigger("next");
carousel.trigger("previous");

carousel.trigger("goto", 0);
```

Or remove the entire carousel:

```javascript
carousel.remove();
```
