let input = document.querySelector('.login-input');
let button = document.querySelector('.login-button');
let form = document.querySelector('.login-form');

const validateInput = ($event) => {
    if($event.target.value.length >= 2) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '')
    
}

const loadForm = ($event) => {
    $event.preventDefault()
    
    localStorage.setItem('Player', input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', loadForm);