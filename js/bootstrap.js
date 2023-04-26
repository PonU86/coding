// Clock
// DOM ELEMENTS
const time = document.getElementById('time'),
    welcome = document.getElementById('welcome'),
    name = document.getElementById('name'),
    inspire = document.getElementById('inspire');

// Options if wanting to show AM PM
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format if wanted
    // hour = hour % 12 || 12;

    // Output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    // Add inside last ` if you want to show AM PM ${showAmPm ? amPm : ''}

    setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background
function setBackground() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //Morning
        welcome.textContent = 'Good Morning';
    } else if (hour < 18) {
        //Afternoon
        welcome.textContent = 'Good Afternoon';
    } else {
        //Evening
        welcome.textContent = 'Good Evening';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure you press enter which is code 13
        // Blur refers to clicking anywhere on the screen
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Inspire
function getInspire() {
    if (localStorage.getItem('inspire') === null) {
        inspire.textContent = '[What are you going to do today?]';
    } else {
        inspire.textContent = localStorage.getItem('inspire');
    }
}

// Set Inspire
function setInspire(e) {
    if (e.type === 'keypress') {
        // Make sure you press enter which is code 13
        // Blur refers to clicking anywhere on the screen
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('inspire', e.target.innerText);
            inspire.blur();
        }
    } else {
        localStorage.setItem('inspire', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
inspire.addEventListener('keypress', setInspire);
inspire.addEventListener('blur', setInspire);

// Run Code
showTime();
setBackground();
getName();
getInspire();