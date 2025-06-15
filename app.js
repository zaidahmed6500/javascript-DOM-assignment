
function ChangeText() {
    document.querySelector('#message').innerHTML = "Welcome";
}





const name = document.querySelector('#nameInput').value;
document.querySelector('#result').innerHTML = name;





document.querySelector('button').addEventListener('click', function() {
  document.querySelector('#container').style.backgroundColor = 'lightblue';
});




document.querySelector('#mainTitle').style.color = 'red';




const number = document.querySelector('#num1').value;
document.querySelector('#output').innerHTML = number;




document.querySelector('.submit-btn').addEventListener('click', function() {
  console.log("Button Clicked");
});




const val1 = Number(document.querySelector('#first').value);
const val2 = Number(document.querySelector('#second').value);
document.querySelector('#sum').innerHTML = val1 + val2;



document.querySelector('.description').innerHTML = "Updated successfully";
