const inputText = document.getElementById("inputText");
const listEklendi = document.getElementById("listEklendi");
const contentDiv = document.querySelector('.contentDiv'); 
listEklendi.addEventListener("click", go);

function go() {
    if (inputText.value !== "") { // Değer boş değilse kontrolü
        var paragraph = document.createElement('p');
        paragraph.innerText = inputText.value;
        contentDiv.appendChild(paragraph);
        inputText.value = "";
    }
}
