const apiUrl = 'https://type.fit/api/quotes';

export const getQuote = () => fetch(apiUrl).then((response) => response.json());

export const shortQuotes = (listOfQuotes) =>
  listOfQuotes.filter((el) => el.text.length < 40);

export const getRandomQuote = (shortListOfQuotes) => {
  let random = Math.random() * shortListOfQuotes.length;
  let randomFloor = Math.floor(random);
  let singleQuote = shortListOfQuotes[randomFloor].text;
  return singleQuote;
};
