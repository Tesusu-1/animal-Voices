"use strict";
/*
window.addEventListener("load", () => {
   alert(
    "ちゅうい！このゲームはおとがなるよ！おとのおおきさをちょうせいしてからあそんでね！"
  );
});*/

/* 動物の声と正解・不正解の音 */
const horseVoice = new Audio("./audio/horse.mp3");
const elephantVoice = new Audio("./audio/elephant.mp3");
const dogVoice = new Audio("./audio/dog.mp3");

const couVoice = new Audio("./audio/cou.mp3");
const lionVoice = new Audio("./audio/lion.mp3");
const owlVoice = new Audio("./audio/owl.mp3");

const OK = new Audio("./audio/OK.mp3");
const NG = new Audio("./audio/ng.mp3");

/* 配列の中の動物の声をランダムに取得 */
const voiceAry = [horseVoice, elephantVoice, dogVoice];
const animalVoice = voiceAry[Math.floor(Math.random() * voiceAry.length)];

/* 緑のボタンが押された時に、ランダムに動物の声を再生 */
const voiceButton = document.getElementById("voiceButton");

voiceButton.addEventListener("click", () => {
  animalVoice.play();
});

/* 黄色いボタンを取得 */
const horseButton = document.getElementById("horseButton");
const elephantButton = document.getElementById("elephantButton");
const dogButton = document.getElementById("dogButton");
const Button = document.getElementById("Button");

/* 動物のイラストを取得 */
const horse = document.getElementById("horse");
const elephant = document.getElementById("elephant");
const dog = document.getElementById("dog");
const change = ["./img/cou.png", "./img/lion.png", "./img/owl.png"];

/* 動物のイラストを変更 */
function nextAnimal() {
  horse.src = change[0];
  elephant.src = change[1];
  dog.src = change[2];
}

/* ボタンを押した時の動物の声を変更 */
function nextButton() {
  horseVoice.src = couVoice.play();
}

/* 黄色いボタンが押された時に、それぞれの動物の声を再生 */
horseButton.addEventListener("click", () => {
  horseVoice.play();
  setTimeout(() => {
    if (animalVoice === horseVoice) {
      OK.play();
      nextAnimal();
    } else {
      NG.play();
    }
  }, "1400");
});

elephantButton.addEventListener("click", () => {
  elephantVoice.play();
  setTimeout(() => {
    if (animalVoice === elephantVoice) {
      OK.play();
      nextAnimal();
    } else {
      NG.play();
    }
  }, "1500");
});

dogButton.addEventListener("click", () => {
  dogVoice.play();
  setTimeout(() => {
    if (animalVoice === dogVoice) {
      OK.play();
      nextAnimal();
    } else {
      NG.play();
    }
  }, "1000");
});
