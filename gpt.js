// 1
document.querySelector('#message').innerHTML = "Welcome!";

// 2
const name = document.querySelector('#nameInput').value;
document.querySelector('#result').innerHTML = name;

// 3
document.querySelector('button').addEventListener('click', function() {
  document.querySelector('#container').style.backgroundColor = 'lightblue';
});

// 4
document.querySelector('#mainTitle').style.color = 'red';

// 5
const number = document.querySelector('#num1').value;
document.querySelector('#output').innerHTML = number;

// 6
document.querySelector('.submit-btn').addEventListener('click', function() {
  console.log("Button Clicked");
});

// 7
const val1 = Number(document.querySelector('#first').value);
const val2 = Number(document.querySelector('#second').value);
document.querySelector('#sum').innerHTML = val1 + val2;

// 8
document.querySelector('.description').innerHTML = "Updated successfully";

// 9
const box = document.querySelector('#box');
box.style.width = '200px';
box.style.backgroundColor = 'green';

// 10
const email = document.querySelector('#email').value;
console.log(email);

// 11
document.querySelector('p').style.fontSize = '24px';

// 12
document.querySelector('button').addEventListener('click', function() {
  const fullName = document.querySelector('#fullName').value;
  document.querySelector('#greeting').innerHTML = `Hello, ${fullName}`;
});

// 13
document.querySelector('#profilePic').src = 'https://example.com/image.jpg';

// 14
document.querySelectorAll('.highlight').forEach(el => {
  el.style.color = 'orange';
});

// 15
const isChecked = document.querySelector('#agree').checked;
document.querySelector('p').innerHTML = isChecked ? "Agreed" : "Not Agreed";

// 16
const selectedOption = document.querySelector('#options').value;
document.querySelector('#selectedValue').innerHTML = selectedOption;

// 17
document.querySelector('button').addEventListener('click', function() {
  const now = new Date();
  document.querySelector('#dateTime').innerHTML = now.toString();
});

// 18
document.querySelector('#togglePara').style.display = 'none';

// 19
const age = Number(document.querySelector('#age').value);
document.querySelector('span').innerHTML = age >= 18 ? "Eligible" : "Not Eligible";

// 20
document.querySelector('button').addEventListener('click', function() {
  document.querySelector('#searchBox').value = '';
});
