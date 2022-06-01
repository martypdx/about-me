// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const showAnswerButton = document.getElementById('show-answer-button');
const animalSection = document.getElementById('animal-section');

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('image-display');

tosCheckbox.addEventListener('change', () => {
    showAnswerButton.disabled = !tosCheckbox.checked;
});

showAnswerButton.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
});

nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
});

imageSelect.addEventListener('change', () => {
    const src = 'assets/cats/' + imageSelect.value;
    imageDisplay.src = src;
});