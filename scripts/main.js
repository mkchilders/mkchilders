/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable;
myVariable = 'Adam';

if (myVariable === 'Bob') {
	alert('Nice.');
}
else {
	alert('Bob\'s yer uncle.');
}

function multiply(num1,num2) {
	let result = num1 * num2;
	myHeading.textContent = result.toString();
}

multiply(3,2);

document.querySelector('html').addEventListener('click',
function() {
	alert('Stop poking me!');
});
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/puppy.jpg') {
      myImage.setAttribute('src','images/dog.jpg');
    } else {
      myImage.setAttribute('src','images/puppy.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name:');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Dogs are cute, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Dogs are cute, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}