---
id: guide-es6
order: 1
title: ES6+
---

#### Importing the library

To get started, install the package:

```bash
yarn add latte-carousel
```

> Using TypeScript? No need to install `@types/latte-carousel`!

Then, using a module bundler ([Webpack](https://webpack.js.org), [rollup.js](https://rollupjs.org) or [Parcel](https://parceljs.org)) import the stylesheet:

```javascript
import "latte-carousel/dist/latte-carousel.min.css";
```

#### Creating a carousel

With the build ready, now it is time to create a carousel.

LatteCarousel uses the following markup for each carousel:

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
> The recommended way is to create a new `<div>` inside `.latte-item` and apply styles to this element (e.g. change the default font size).

After `DOMContentLoaded` event, create the carousel passing a selector for the `.latte-carousel` element and the options object:

```javascript
import { Carousel } from "latte-carousel";

const options = {
    count: 3,
    move: 1,
    touch: true,
    mode: "align",
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

const carousel = new Carousel("#carousel", options);
```

With TypeScript:

```typescript
import { Carousel, IOptions } from "latte-carousel";

const options: IOptions = { ... }
const carousel: Carousel = new Carousel("#carousel", options);
```

#### Using events

With a carousel instance, you can also trigger events:

```javascript
carousel.trigger("next");
carousel.trigger("previous");

carousel.trigger("goto", 0);

carousel.trigger("update");
```

Listen to events:

```javascript
carousel.on("move", () => {});
carousel.on("moved", () => {});
```

Or remove the entire carousel:

```javascript
carousel.trigger("remove");
```
