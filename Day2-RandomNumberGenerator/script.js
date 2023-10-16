const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    //Generate number between 1 and 100
    //Have to times by 100 because Math.random() gives random number between 0 and 1
    //We give the plus 1 after the 100 so that 100 is included
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    number.innerHTML = randomNumber;
}

//Add an event listener to generate the random number when the button is clicked
btn.addEventListener("click", generateNumber)

