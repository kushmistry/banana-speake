let inputText = document.querySelector("#input-txt");
let tranlateBtn = document.querySelector("#translate-btn");
let outputText = document.querySelector(".output-txt");

const serverUrl = "https://api.funtranslations.com/translate/minion.json";
const mockSereverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" 

const createUrl = (text) => {
  return `${mockSereverUrl}?text=${text}`;
};

const btnHandler = () => {
  fetch(createUrl(inputText.value))
    .then(response => response.json())
    .then(json => {
        outputText.innerText = json.contents.translated;
    })
};

tranlateBtn.addEventListener("click", btnHandler);
