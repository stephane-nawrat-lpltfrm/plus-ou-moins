// 1. On cible le bouton
const startButton = document.querySelector("button");

// 2. On définit ce qui doit se passer (La boîte)
function play() {
  // Ton code actuel qui se lançait tout seul va ici
  let userGuess = prompt("Choisissez un nombre :");
  console.log("L'utilisateur a choisi :", userGuess);
}

// 3. On lie les deux : "N'exécute 'play' QUE quand on clique sur 'startButton'"
startButton.addEventListener("click", play);
