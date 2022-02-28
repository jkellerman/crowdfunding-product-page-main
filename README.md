# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Javascript
- Mobile-first workflow

### What I learned

I learned how to create a modal and dim the entire page background. The trick is not to use opacity but to use rgba for background and make sure that the modal is positioned absolute and the dimmed background is a div which is positioned fixed. This div should be not be a child of any other element.

I also learned how to use the scrollIntoView method which scrolls to the element you want. This is usefel when you have a long webpage and click events across the page pop up the modal. Instead of the user scrolling to find the modal, they will automatically be taken to it. See below:

```js
function scrollToModal(modal) {
  modal.scrollIntoView();
}
```

### Useful resources

- [YouTube](https://www.youtube.com/watch?v=5K7JefKDa4s) - Custom radio button
- [CSS Tricks](https://css-tricks.com/change-color-of-svg-on-hover/) - How to change color of svg image.
- [YouTube](https://www.youtube.com/watch?v=gLWIYk0Sd38) - transparent background for popup modal.
- [Stack Overflow](https://stackoverflow.com/questions/5007530/how-do-i-scroll-to-an-element-using-javascript) - how to scroll to an element using Javascript.

## Author

- Frontend Mentor - [@jkellerman](https://www.frontendmentor.io/profile/jkellerman)
- GitHub - [jkellerman](https://github.com/jkellerman)
