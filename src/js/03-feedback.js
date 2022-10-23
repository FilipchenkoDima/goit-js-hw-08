var throttle = require('lodash.throttle');

const feedbackFormState = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

const feedbackFormEl = document.querySelector('.feedback-form');
const emailForm = document.querySelector('input[name="email"]');
const massageForm = document.querySelector('textarea[name="message"]');

populateInput();

feedbackFormEl.addEventListener('input', throttle(inputText, 1000));
feedbackFormEl.addEventListener('submit', sendMessage)

function inputText(evt) {
    feedbackFormState[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
};

function populateInput() {
    const savedInput = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedInput) {
        let parsedInput = JSON.parse(savedInput);

        emailForm.value = parsedInput.email;
        massageForm.textContent = parsedInput.message;
    };
};

function sendMessage(evt) {
    evt.preventDefault();

    const user = {
        email: evt.target.email.value,
        message: evt.target.message.value
    };
    console.log(user);
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
    feedbackFormEl.reset();
};
