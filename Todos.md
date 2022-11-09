## click on Kichi ☑️

## add the typing field

## css stuff

-make bubble speech exact width as the wall
-make thw font size bigger
-place kichi in center
-add some space between kichi and select button
-when kichi speaks, her figure should glow
-make kichi sprites (slightly different variations of image) for interactivity

## JS

-store data from user(user name, task and pre-set time)
-add typing field and store the info

-

## Ideas

-use background to give more features to the app (doors, elements in the room) eg. the door on the right is the exit
-select button can be used to select a task (rename to "Tasuku button")
-add voice feature

## Api sh\*t

-add motivational quotes/facts about japan/new japanese word/weather/all

## Todays tasks 24.11.22

- corrected the input width to 95% ✅
- place a function in the text array instead. (Marc's example)
- show the user bubble after asking the question
- show the buttons after choose a task
- adding an animation to the user bubble that appear after kichis bubble stop typing

- change all the interface, interacting with the keyboard, for consistency

- keys interaction. each key represent a word in japanese for something. for example, 動機
  Dōki, the key D will open the Doki door for more motivation. etc.

- place on the doors some japanese words

I done this -- npm install react react-dom

---

function mergeLocalStorage(key, obj){
var newObj = JSON.parse(localStorage.getItem(key));
for (var k in obj){
newObj[k] = obj[k];
}
localStorage.setItem(key, JSON.stringify(newObj));
return newObj;
}

todo 4.5.22:

1. set the points, test the point system ✅
2. logic with the daily tasuku display Tsuku in a different date ✅
3. change the appearance of Kichi according to the points ✅
4. API for quotes
5. if you didn't log your success, get -1ph (optional for vol.21)
6. Deployment
7. README file with lots of credits
8. starts trophies!!
9. to change the alert to the nice pack
10. tutorial HOW TO SECTION
11. add a registration btn
12. register btn in the login page

4hp warning
3hp mad
2hp sick
1hp dying
0ph die XOXO

starts logic
if it's more then 5, then create starts. get the info from the local storage
from the hp! opacity is still clickable, Yes or No (create an opacity 0 shape that will decrease the width )
game over screen and delete user
instead of alert put text in a state and place it in those scenarios

login count with a new property in the login page! and after 10 times something happen
game over in another route!

- doesn't work on firefox
