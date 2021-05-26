let textArea = document.getElementById('textArea');
let btnTranslate = document.getElementById('btn');
let output = document.getElementById('div-output');

btnTranslate.addEventListener('click',()=>{
    let txtInput = textArea.value;
    let url = "https://api.funtranslations.com/translate/minion.json" + "?"+"text="+txtInput;

    fetch(url)
    .then(response => response.json())
    .then(json => {
        let translatedTxt = json.contents.translated;
        console.log(translatedTxt);
        output.classList.add('output');
        output.textContent = translatedTxt;

    });
});
