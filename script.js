//Challenge 1: You age in days

function ageInDays() {
 var birthYear = prompt(`Which year were you born... Good friend?`);
 var ageInDays = (2020 - birthYear) * 365;
 var h1 = document.createElement('h1');
 var textAnswer = document.createTextNode('You are ' + ageInDays + ' days');
 h1.setAttribute('id', 'ageInDays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Generte Cat
function generateCat(){
var image = document.createElement('img');
var div = document.getElementById('flex-cat-gen');
image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice){
console.log(yourChoice);
var humanChoice, botChoice;
humanChoice = yourChoice.id;

botChoice = numberToChoice(randToRpsInt());
console.log('computer Choice',botChoice);

result = decideWinner(humanChoice, botChoice); //[0,1] human lost bot won
console.log(result);

message = finalMessage(result); // message: "you won", "color": "green"}
console.log(Message);

rpsFrontEnd(yourChoice, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()* 3);
}

function numberToChoice(number){
return['rock','paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return[yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0){
        return{'Message': 'You won', 'color': 'red'};
    }else if (computerScore === 0.5){
        return{'Message': 'You are tied', 'color': 'Yellow'};
    }else{
        return{'Message': 'You won', 'color': 'Green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
}
//lets remove all the images onclick
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

hummanDiv.innerHTML = "<img src ='"+imagesDatabase[humanImageChoice] + "' height = 150 width = 150 style = box-shadow: 0px 10px 50 px rgba(37,50,233,1);>" 
messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color']+"; font-size: 60px; padding: 30px; '>"+ finalMessage['message']+"</h1>"
botDiv.innerHTML = "<img src = '" + imagesDatabase[botImageChoice] +"' height = 150 width = 150 style = box-shadow: 0px 10px 50 px rgba(243,38,24,1);>" 

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge-4: Change The Color Of All Buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]); 
}

function buttonColorChange(buttonThingy){
    if (buttonThingy.value=== 'red'){
        buttonsRed();
     } else if (buttonThingy.value==='green'){
            buttonGreen();
       }  else if (buttonThingy.value==='reset'){
        buttonColorReset();
       }else if (buttonThingy.value==='random'){
           randomColor();
       }           
    }
        
function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonColorReset(){
    for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColor(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

for (let i=0; i< all_buttons.length; i++){
    let randomNumber = Math.floor.length(Math.random()*4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
 }
}

//Challenge 5: Blackjack
document.querySelector('blackjack-Hit-button').addEventListener('click', blackjackHit);

function blackjackHit(){
    alert('hello:');
}

