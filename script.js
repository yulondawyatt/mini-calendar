const monthNameEL = document.getElementById('month-name');
const dayNameEL = document.getElementById('day-name');
const dayNumEL = document.getElementById('day-number');
const yearEL = document.getElementById('year');

const date = new Date();
console.log(date.getMonth());

const month = date.getMonth();
monthNameEL.innerText = date.toLocaleString('en', {month:'long'});

dayNameEL.innerText = date.toLocaleString('en', {weekday:'long'});
dayNumEL.innerText = date.getDate();
yearEL.innerText = date.getFullYear();
