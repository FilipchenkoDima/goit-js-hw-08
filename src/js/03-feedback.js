var throttle = require('lodash.throttle');

const feedbackFormState = { };

const feedbackFormEl = document.querySelector('.feedback-form');

feedbackFormEl.addEventListener('input', inputText);

function inputText(evt) {
    console.log(evt.target);
};

console.log('test');