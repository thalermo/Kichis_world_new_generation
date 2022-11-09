## Links we used for the project

Typing text: https://css-tricks.com/snippets/css/typewriter-effect/

https://codepen.io/geoffgraham/pen/jrWwWM
https://codepen.io/Gthibaud/pen/MqpmXE
https://codemyui.com/retro-yes-no-popup-dialog-box/
https://codepen.io/Gthibaud/pen/MqpmXE
great btns retro
https://codepen.io/b1tn3r/pen/YjOzRv
shadow inspitarion
https://getcssscan.com/css-box-shadow-examples
gradient
https://webgradients.com/

draft

typewriter {
color: #000;
font-family: "retro-gaming";
overflow: hidden; /_ Ensures the content is not revealed until the animation _/
border-right: 0.15em solid orange; /_ The typwriter cursor _/
white-space: nowrap; /_ Keeps the content on a single line _/
margin: 0 auto; /_ Gives that scrolling effect as the typing happens _/
letter-spacing: 0.15em; /_ Adjust as needed _/
animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

/_ The typing effect _/
@keyframes typing {
from {
width: 0;
}
to {
width: 100%;
}
}

/_ The typewriter cursor effect _/
@keyframes blink-caret {
from,
to {
border-color: transparent;
}
50% {
border-color: orange;
}
}

https://sebhastian.com/setinterval-react/
