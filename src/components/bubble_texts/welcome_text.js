// welcome page

// getting the data from the local storage

const welcome = [
  {
    key: 0,
    title: 'Hello',
    phrase: ["Kon'nichiwa! My name is Kichi!", 'Okaerinasai! welcome back!'],
  },
  {
    key: 1,
    title: 'Kichi appearers',
    phrase: ['Please tap on me to continue', 'Tap to on me to continue'],
  },
  {
    key: 2,
    title: 'tutorial',
    phrase: [`Nice to meet you !`, `I love the attention `],
  },

  {
    key: 3,
    title: 'set a Tasuku  ',
    phrase: [
      `Click on the Tasuku Button below`,
      `Harry up to set your daily Tasuku`,
    ],
  },
  {
    key: 4,
    title: 'Tasuku info  ',
    phrase: [`Tasuku is a Task in Japanese`, ` the Tasuku is waiting`],
  },
];

export default welcome;

// let localEntry = JSON.parse(localStorage.getItem('users'));
// let currentUserEntry = localStorage.getItem('currentUser');

//getting just number
// let index = localEntry.findIndex(
//   (element) => element.email === currentUserEntry
// );

// // getting the info from the local storage!
// export let regDate = localEntry[index].regDate;
// export let task = localEntry[index].task;
// export let userName = localEntry[index].userName;
// export let currentUserHP = localEntry[index].hp;
// export let now = localEntry[index].time;
// export let taskTime = localEntry[index].timeStamp;

// console.log(task, userName, currentUserHP, now, taskTime);

//let userName = 'Dan';
