// Lista de teclas
// Números:
const k1 = document.querySelector("#k-1");
const k2 = document.querySelector("#k-2");
const k3 = document.querySelector("#k-3");
const k4 = document.querySelector("#k-4");
const k5 = document.querySelector("#k-5");
const k6 = document.querySelector("#k-6");
const k7 = document.querySelector("#k-7");
const k8 = document.querySelector("#k-8");
const k9 = document.querySelector("#k-9");
const k0 = document.querySelector("#k-0");

const kVirgula = document.querySelector("#k-virgula");

// Operadores:
const kSoma = document.querySelector("#somar");
const kSubtrair = document.querySelector("#subtrair");
const kMultiplica = document.querySelector("#multiplica");
const kDivide = document.querySelector("#divide");

// Ações:
const kClear = document.querySelector("#clear");
const kBackspace = document.querySelector("#backspace");
const kIgual = document.querySelector("#igual");

// Screen
const screenProgress = document.querySelector("#progress");
const screenTyping = document.querySelector("#typing");
const screenLive = document.querySelector("#inlive");

//Guardando digitação
let progress = " ";
let typing = "0";

//Setando inicio da tela
screenProgress.textContent = progress.toString();
screenTyping.textContent = typing;
screenLive.textContent = " ";

// Funções das teclas
function clearScreen() {
  progress = ` `;
  typing = "0";
  screenProgress.textContent = progress.toString();
  screenTyping.textContent = typing;
  screenLive.textContent = " ";
}

function zero() {
  if (typing === "0" || parseInt(typing) == 0) {
    typing = "0";
    return;
  }
  typing = `${typing}0`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`); //calculando o tempo todo
}

function um() {
  if (typing === "0") {
    typing = "1";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}1`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function dois() {
  if (typing === "0") {
    typing = "2";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}2`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function tres() {
  if (typing === "0") {
    typing = "3";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}3`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function quatro() {
  if (typing === "0") {
    typing = "4";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}4`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function cinco() {
  if (typing === "0") {
    typing = "5";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}5`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function seis() {
  if (typing === "0") {
    typing = "6";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}6`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function sete() {
  if (typing === "0") {
    typing = "7";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}7`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function oito() {
  if (typing === "0") {
    typing = "8";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}8`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function nove() {
  if (typing === "0") {
    typing = "9";
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}9`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

function virgula() {
  if (typing.indexOf(".") > -1) {
    typing = typing;
    screenTyping.textContent = typing;
    return;
  }
  typing = `${typing}.`;
  screenTyping.textContent = typing;

  screenLive.textContent = eval(`${progress} ${typing}`);
}

// Funções dos operadores
function adicao() {
  if (typing === "0" || typing === " " || parseInt(typing) == 0) {
    typing = "0";
    screenTyping.textContent = typing;
    return;
  }
  progress = `${progress} ${typing} + `;
  typing = " ";
  screenProgress.textContent = progress;
}

function subtracao() {
  if (typing === "0" || typing === " " || parseInt(typing) == 0) {
    typing = "0";
    screenTyping.textContent = typing;
    return;
  }
  progress = `${progress} ${typing} - `;
  typing = " ";
  screenProgress.textContent = progress;
}

function multiplica() {
  if (typing === "0" || typing === " " || parseInt(typing) == 0) {
    typing = "0";
    screenTyping.textContent = typing;
    return;
  }
  progress = `${progress} ${typing} * `;
  typing = " ";
  screenProgress.textContent = progress;
}

function divide() {
  if (typing === "0" || typing === " " || parseInt(typing) == 0) {
    typing = "0";
    screenTyping.textContent = typing;
    return;
  }
  progress = `${progress} ${typing} / `;
  typing = " ";
  screenProgress.textContent = progress;
}

function backspace() {
  const tamanho = typing.length;
  if (tamanho <= 1) {
    typing = "0";
    screenTyping.textContent = typing;
    return;
  }
  switch (typing) {
    case "0":
      typing = "0";
      screenTyping.textContent = typing;
      break;

    case " ":
      typing = "0";
      screenTyping.textContent = typing;
      break;

    default:
      typing = typing.slice(0, -1);
      screenLive.textContent = eval(`${progress} ${typing}`);
      screenTyping.textContent = typing;
      break;
  }
}

function igual() {
  if ((parseInt(typing) <= 0) & (progress === " ")) {
    typing = "0";
    screenTyping.textContent = typing;
    return;
  }
  progress = `${progress} ${typing}`;
  typing = eval(progress);
  progress = " ";
  screenTyping.textContent = typing;
  screenProgress.textContent = progress;
}

// Eventos das teclas
k0.addEventListener("click", zero);
k1.addEventListener("click", um);
k2.addEventListener("click", dois);
k3.addEventListener("click", tres);
k4.addEventListener("click", quatro);
k5.addEventListener("click", cinco);
k6.addEventListener("click", seis);
k7.addEventListener("click", sete);
k8.addEventListener("click", oito);
k9.addEventListener("click", nove);

kClear.addEventListener("click", clearScreen);
kBackspace.addEventListener("click", backspace);

kVirgula.addEventListener("click", virgula);
kSoma.addEventListener("click", adicao);
kSubtrair.addEventListener("click", subtracao);
kMultiplica.addEventListener("click", multiplica);
kDivide.addEventListener("click", divide);

kIgual.addEventListener("click", igual);
