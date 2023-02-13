const form = document.getElementById('form');
const submitButton = document.getElementById('submit-button');
const pointInputs = document.getElementsByName('point');
const container = document.getElementById('container');
const selectedText = document.getElementById('selected-p');


for(let i = 0; i < pointInputs.length; i++) {
    pointInputs[i].onclick = () => {
        submitButton.disabled = false;
    }

    
    
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.classList.toggle('flip');

    let selectedPoint = document.querySelector('input[name="point"]:checked').value;
    selectedText.innerText = `You selected ${selectedPoint} out of 5`;
})


