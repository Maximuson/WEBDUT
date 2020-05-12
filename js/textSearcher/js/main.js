const refs = {
  inputText: document.querySelector(".js-inputText"),
  makeTable: document.querySelector(".js-makeTable"),
  tableWrapper: document.querySelector(".js-tableWrapper"),
  showText: document.querySelector(".js-show-text"),
  listTextWords: document.querySelector("#textWords"),
  wordToSearch: document.querySelector(".js-wordToSearch"),
  searchWord: document.querySelector(".js-searchWord"),
};
refs.inputText.value = "abc., + abc; ss    hi max max";

const getCountedWords = () => {
  const countedWords = {};
  const wordsWithSpaces = refs.inputText.value.split(/\s|\d|\p{P}|\p{S}/giu);
  wordsWithSpaces.forEach((item) => {
    if (item) {
      if (countedWords[item]) {
        countedWords[item]++;
      } else {
        countedWords[item] = 1;
      }
    }
  });

  return countedWords;
};
const getHighlitedText = (text, word) => {
  const reqex = new RegExp(`${word}`, "gi");
  return text.replace(reqex, `<span class="accent">${word}</span>`);
};

const makeTable = () => {
  const countedWords = getCountedWords();

  refs.tableWrapper.innerHTML = "";
  const tableData = Object.entries(countedWords).reduce((acc, item) => {
    return acc + `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>\n`;
  }, "");

  refs.tableWrapper.innerHTML = `<table>
    ${tableData}
  </table>
  `;

  Object.keys(countedWords).forEach((item) => {
    refs.listTextWords.insertAdjacentHTML(
      "beforeend",
      ` <option value="${item}"> </option>`
    );
  });
};
const searchWordsInText = () => {
  refs.showText.innerHTML = getHighlitedText(
    refs.inputText.value,
    refs.wordToSearch.value
  );
};

const initEventListeners = () => {
  refs.makeTable.addEventListener("click", makeTable);
  refs.searchWord.addEventListener("click", searchWordsInText);
};

initEventListeners();
