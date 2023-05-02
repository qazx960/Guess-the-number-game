//variables
const mainText = document.querySelector('#main--text');
const displayedAnswer = document.querySelector('#displayed--number');
const minNumDisplay = document.querySelector('#lowest--number');
const maxNumDisplay = document.querySelector('#highest--number');
const attempts = document.querySelector('#attempts');
const inputDisplay = document.querySelector('#input');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');
const giveUp = document.querySelector('#giveup');
const body = document.querySelector('body');

//randomly generate the answer  1 - 100
let answer = Math.trunc(Math.random() * 100) + 1;

//default attemp to 0
let attemp = 0;

//submit button
submitBtn.addEventListener('click', () => {
	if (inputDisplay.value !== answer) {
		if (inputDisplay.value > answer && inputDisplay.value < 100) {
			mainText.textContent = 'Too High';
			maxNumDisplay.textContent = inputDisplay.value;
		} else if (inputDisplay.value < answer && inputDisplay.value > 0) {
			mainText.textContent = 'Too Low';
			minNumDisplay.textContent = inputDisplay.value;
		} else if (inputDisplay.value >= 101) {
			alert('under 100');
		} else if (inputDisplay.value <= 0) {
			alert('start from 1');
		}
	}

	// if guessted correctly
	if (inputDisplay.value == answer) {
		body.style.background = 'blue';
		body.style.color = 'white';

		mainText.textContent = '🎉You guessed correctly🎉';

		inputDisplay.classList.add('hide');
		submitBtn.classList.add('hide');
		giveUp.classList.add('hide');

		displayedAnswer.textContent = answer;
		attempts.textContent = 0;
	}

	// increment the number of attemps
	attemp = attemp + 1;
	attempts.textContent = attemp;

	//after each submit, empty the input box
	inputDisplay.value = '';
});

//reset button
resetBtn.addEventListener('click', () => {
	//reset the answer
	answer = Math.trunc(Math.random() * 100) + 1;

	displayedAnswer.textContent = '?';
	mainText.textContent = 'Guess The Number!';
	maxNumDisplay.textContent = 100;
	minNumDisplay.textContent = 0;

	inputDisplay.classList.remove('hide');
	submitBtn.classList.remove('hide');
	giveUp.classList.remove('hide');
	resetBtn.textContent = 'Reset';

	body.style.background = ' rgb(0, 205, 115)';
	body.style.color = 'black';

	attemp = 0;
	attempts.textContent = attemp;
});

//give up button
giveUp.addEventListener('click', () => {
	//change text content
	displayedAnswer.textContent = answer;
	mainText.textContent = 'You have given up';

	//add class hide
	inputDisplay.classList.add('hide');
	submitBtn.classList.add('hide');
	giveUp.classList.add('hide');
	resetBtn.textContent = 'Try Again!';

	body.style.background = 'black';
	body.style.color = 'white';
});
