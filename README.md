# Scrollrisen
Trigger css animations on scroll as elements enter the viewport. Zero dependencies, lightweight and easy to use and customize

## Installation

### Basic

Add link in document head

```js
    <link rel="stylesheet" href="./dist/css/scrollrisen.css">
```
Add script in document body and init scrollrisen:

```js
    <script src="./dist/js/scrollrisen.js"></script>
    <script>
        //read more about the options below
        scrollrisen.init({});
    </script>
```

### Using package managers

#### npm

```js
    npm install scroll-risen
```

#### yarn

```js
    yarn add scroll-risen
```

Import script and style and initialize

```js
    import scrollrisen from 'scroll-risen/dist/scrollrisen.js'
    
    import 'scroll-risen/dist/scrollrisen.css'
    
    //init library(read more about the options below)
    scrollrisen.init({});
```

## Usage

### 1.Initialize

```js
scrollrisen.init({
    //below is a list of default options
    easing: 'ease', //easing function
    duration: 2000, //animation duration in miliseconds
    trigger: 0.2, //determines the point when animation should kick in relative to viewport. 0 means as soon as element becomes visible, 1 means when top of the element reaches the top of the screen
    reverse: true, //should  reverse the animation if element is below the vieport
    debounce: 16, //how often shoud scroll handler be called
});
```

### 2.Set animations with data-sr attribute

data-sr attribute is used to determine which elements you want to animate and what type of animations you want to apply

```html
    <div data-sr = "fade-l"></div> <!-- applies data-sr attribute to fade from left to right -->
```

### List of possible animations

#### Fade

| data-sr | description |
| ------ | ------ |
| fade | simple fade animation |
| fade-l | fade from left |
| fade-r | fade from right |
| fade-t | fade from top |
| fade-b | fade from bottom|
| fade-t-l | fade from top left |
| fade-t-r | fade from top right |
| fade-b-l | fade from bottom left |
| fade-b-l | fade from bottom left |
| fade-b-r | fade from bottom right |

#### Flip

| data-sr | description |
| ------ | ------ |
| flip-l | flip from left |
| flip-r | flip from right |
| flip-t | flip from top |
| flip-b | flip from bottom |

#### Zoom

| data-sr | description |
| ------ | ------ |
| zoom | center zoom |
| zoom-l | zoom from left |
| zoom-r | zoom from right |
| zoom-t | zoom from top |
| zoom-b | zoom from bottom |

---
**NOTE**
You can extend or create custom list of animations if this isn't enough for your use case by either modifying scrollrisen.css or adding styles to your custom css file.
---