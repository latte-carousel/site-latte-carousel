---
id: guide-react
order: 3
title: React
---

#### Importing the library

To get started, install both packages:

```bash
yarn add latte-carousel react-latte-carousel
```

> Using TypeScript? No need to install `@types/latte-carousel`!

Then, using a module bundler ([Webpack](https://webpack.js.org), [rollup.js](https://rollupjs.org) or [Parcel](https://parceljs.org)) import the stylesheet:

```javascript
import "latte-carousel/dist/latte-carousel.min.css";
```

#### Creating a carousel

With the build ready, now it is time to create a carousel.

LatteCarousel uses the following markup for each carousel:

```jsx
import React from "react";
import { LatteCarousel, LatteItem } from "react-latte-carousel";

class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.carouselRef = React.createRef();

        this.options = {
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
    }

    render() {
        return (
            <LatteCarousel options={this.options} ref={this.carouselRef}>
                <LatteItem>1</LatteItem>
                <LatteItem>2</LatteItem>
                <LatteItem>3</LatteItem>
                <LatteItem>4</LatteItem>
            </LatteCarousel>
        );
    }
}
```

With TypeScript:

```typescript
import { IOptions } from "latte-carousel";

const options: IOptions = { ... }
```

> Avoid applying styles to `.latte-carousel` or `.latte-item` elements as they are used to compute dimensions.
>
> The recommended way is to create a new `<div>` inside `.latte-item` and apply styles to this element (e.g. change the default font size).

#### Using events

With a carousel reference, you can also trigger events:

```javascript
const node = this.carouselRef.current;

node.next();
node.previous();

node.goTo(0);
```

```javascript
node.trigger("next");
node.trigger("previous");

node.trigger("goto", 0);

node.trigger("update");
```
