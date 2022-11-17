Hello testing

package:
1.react router 2. react spring

https://images6.fanpop.com/image/photos/38800000/All-the-Tamagotchi-tamagotchi-38849483-600-490.jpg

https://i.pinimg.com/736x/58/b7/95/58b7957f3339c6283c25c58fa67e94f4.jpg

# Kichi's World - The next generation

This is my solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Kichi's World - The next generation](#kichis-world---the-next-generation)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [About the project](#about-the-project)
    - [How to start to play?](#how-to-start-to-play)
    - [Inspiration](#inspiration)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### About the project

Kichi's World is a gamify single daily task app.

### How to start to play?

1. Enter to the following website and click on the registration button.
2. After registrating, you are ready to login into Kichi's world.
3. On the main screen, the Dashboard, Kichi will greeting you and will ask you to click on her to get some more instructions.
4. The Tasuku button will lead you to the screen, where you can choose your daily tasuku.
5. After Setting a Tasuku, Kich will wait to see, when you are going to complete the Task.
6. To report, if you completed your Tasuku or not, Kichi placed two buttons with a thumbs symbol.
7. By completing the task successfully, Kichi will give you starts.
8. By not completing the task, you will los your starts, and Kich will start to feel not well.
9. Still Kichi will motivate you, to try next day in with motivational queuts
10. by not following her wishes, and not completing the tasks, Kichis health will be () till a her death

### Inspiration

<em>THE IDEA</em> <br>
Kichi's World has been created as a group project in the full-stack develper program at the Code WIld school.

This project is inspired by two applications: Tamagucchi and Habitica.

- Tamagucchi use to be in the 90's a virtual pet, where the user supposed to feed it, play with it, and of course clean the poo:)
- Habitica is an open source gamify application, with a RPG astetic, where you earn coins by completing tasks and decerese your heath by not completing the tasks. This program won lots of prices and this is the prove, how much the user, no matter which age, love to play, earn points and להזדהות עם הדמת

<em>THE UX/UI inspiration</em>
in order to make the user attached to the main figure, the app try to personalize the interaction, by calling the user with his name and

The app is inspired by the colorful japanese esthetic, with self-made icons using Photoshop, taking care to all the small details on the screen to maximize the engagement of the user.

##

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

Desktop version:

![](./images/Screenshot_desktop_version.png)

Mobile version:

![](./images/screenshot_mobile_version.png)

### Links

- Solution URL: [click to review the solution](https://www.frontendmentor.io/solutions/responsive-product-preview-card-using-html-sass-and-bemmethodology-5o2Ewu-oV9)
- Live Site URL: [click to check the live site](https://frontendmentor1challenge.netlify.app/)

## My process

<br/>

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox

- [Sass](https://sass-lang.com/) - Sass library
- [BEM-methodology](http://getbem.com/)

<br/>

### What I learned

- How to implement Sass in the project:

  - adding a JSON file, and writing the script compiler.

  ```
  "scripts": { "compile:sass": "sass sass/index.scss css/style.css -w" }
  ```

  - using the rules @use & @forward instead of @import for better css efficiency

  ```
  @forward './card';
  @use './base' as b;
  ```

  - How to maximize the efficiency of the workflow by using variables & mixin

  ```
  $clr-primary-400: hsl(158, 36%, 37%);
  $clr-primary-300: hsl(30, 38%, 92%);

  @mixin background-img($url-img) {
    background-image: url($url-img);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  ```

- How to structure the HTML based on the BEM methodology
- How to implement SVG files in HTML by using and change the color of the icon by using the fill attribute.

```
  .btn--primary {
    background-color: b.$clr-primary-400;
    color: b.$clr-natural-100;

// hover on the btn

    &:hover {
      color: b.$clr-primary-400;
      background-color: b.$clr-natural-100;

// hover on the parent change the child

      .card__icon--svg {
        fill: b.$clr-primary-400;
      }
    }
  }

```

_This syntax was necessary in order avoid resizing of the icon and still be able to change the fill attribute to the primary color_

Button before hovering:

![](./images/Screenshot_btn-hover.png)

Button by hovering:

![](./images/screenshot_btn-primary.png)

- How to make a responsive card

### Continued development

I would like to continue maximizing the Sass use in the project by manufacturing the code by:

1. creating extends & more mixins
2. importing code blocks to the \_layout.scss & \_components.scss and manufacturing the scss code

### Useful resources

- [Responsiveness ](https://www.youtube.com/watch?v=0ohtVzCSHqs&t=2s) - This helped me for the responsiveness in the website. I really recommend in general about Kevin Powell's content.
- [@use vs. @import](https://www.youtube.com/watch?v=CR-a8upNjJ0&t=635s) - This is an amazing explanation that helped me to understand the difference between @import and @use. I'd recommend it to anyone who's still learning this concept.

- [SVG tutorial](https://www.freecodecamp.org/news/use-svg-images-in-css-html/#:~:text=SVG%20images%20can%20be%20written,element%20in%20your%20HTML%20document.&text=body%3E-,If%20you%20did%20everything%20correctly%2C%20your%20webpage%20should,exactly%20like%20the%20demo%20below.) - This is a useful tutorial which helped me to implement the SVG Image in my CSS & HTML.

- [Hover parent & child](https://stackoverflow.com/questions/14792574/css-child-set-to-change-color-on-parent-hover-but-changes-also-when-hovered) - This is a useful explanation which helped me to implement the css changes of the child by hovering on parent.

## Author

- Frontend Mentor - [@thaler_mo](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@dev_thaler](https://www.twitter.com/dev_thaler)
