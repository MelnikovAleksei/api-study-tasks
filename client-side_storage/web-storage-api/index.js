const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitButton = document.querySelector('#submitname');
const forgetButton = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreetingParagraph = document.querySelector('.personal-greeting');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

submitButton.addEventListener('click', () => {
    localStorage.setItem('name', nameInput.value);
    nameDisplayCheck();  
})

forgetButton.addEventListener('click', () => {
    localStorage.removeItem('name');
    nameDisplayCheck();
})

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome, ' + name;
        personalGreetingParagraph.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
    } else {
        h1.textContent = 'Welcome to our website ';
        personalGreetingParagraph.textContent = 'Welcome to our website. We hope you have fun while you are here.';
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
}

document.body.onload = nameDisplayCheck;

