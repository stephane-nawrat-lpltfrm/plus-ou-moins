const startButton = document.querySelector("button");

function play() {
  const targetNumber = Math.floor(Math.random() * 100) + 1;

  // Cette ligne permet de voir le chiffre gagant dans la console pour tester le jeu
  console.log(`Solution : ${targetNumber}`);

  let attempts = 0;
  let hasWon = false;

  while (!hasWon) {
    let input = prompt("Devinez le nombre (entre 1 et 100) :");

    if (input === null) {
      break;
    }

    let num = Number(input);
    attempts++;

    if (num === targetNumber) {
      alert(
        `Bravo ! Tu as trouvé le nombre ${targetNumber} en ${attempts} coups !`,
      );
      hasWon = true;
    } else if (num < targetNumber) {
      alert("C'est PLUS !");
    } else if (num > targetNumber) {
      alert("C'est MOINS !");
    } else {
      alert("Veuillez entrer un nombre valide.");
    }
  }
}

startButton.addEventListener("click", play);
