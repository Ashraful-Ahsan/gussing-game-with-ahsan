//initializing some values
let totalAttempt=5;
let attempts=0;
let totoalWons=0;
let totalLosts=0;
//sounds
const winSound=new Audio("win.wav");
const lostSound=new Audio("lost.wav");
const backgroundSound=new Audio("background-sound.mp3")
backgroundSound.volume=.5;




//finding element

const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const gussingNumber=form.querySelector("#gussingNumber");
const checkButtom=form.querySelector("#check");

const lostWonMessage=document.createElement("p");

const resultText=cardBody.querySelector(".resultText");

const remainingAttempts=cardBody.querySelector(".remainingAttempts")

//background sound function

function playBackgroundSound() {
    backgroundSound.currentTime = 0;
    backgroundSound.play();
    // document.removeEventListener("click", playBackgroundSound);
  };
  check.addEventListener("click", playBackgroundSound);



form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    attempts++;
    if (attempts === 5) {
      gussingNumber.disabled = true;
      checkButtom.disabled = true;
      remainingAttempts.innerHTML = "<strong style='color: red;'>You have used all your attempts. Now reload this page and play again.</strong>";
    } else if (attempts < 6) {
      checkResult(gussingNumber.value);
      remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempt - attempts}`;
    }
    gussingNumber.value = "";
  });
  




  function checkResult(gussingNumber){
    const ramdomNumber=getRandomNumber(5);
    if(gussingNumber==ramdomNumber){
        resultText.innerHTML=`You have Won`;
        //animation
        resultText.classList.remove('animate__animated', 'animate__bounce');
        void resultText.offsetWidth;
        resultText.classList.add('animate__animated', 'animate__bounce');
        resultText.addEventListener("animationend", () => {
            resultText.classList.remove("animate__animated", "animate__bounce");
          });
        totoalWons++;
        winSound.play();
    }else{
        resultText.innerHTML=`You have Lost; Random number was: ${ramdomNumber}`;

        resultText.classList.remove("animate__animated", "animate__bounce");
        void resultText.offsetWidth;
        resultText.classList.add("animate__animated", "animate__wobble");
        resultText.addEventListener("animationend", () => {
          resultText.classList.remove("animate__animated", "animate__wobble");
        });
        

        totalLosts++;
        lostSound.play();
    }
    lostWonMessage.innerHTML=`Won:${totoalWons}, Lost: ${totalLosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}



function getRandomNumber(limit){
return Math.floor(Math.random()*limit)+1;

}