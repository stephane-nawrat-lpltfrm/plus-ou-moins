// --- STEP 1: SELECTORS ---
// On récupère les éléments HTML que l'on va devoir manipuler.
const startButton = document.querySelector("button");

// --- STEP 2: GAME ENGINE ---
// Cette fonction contient toute la logique du jeu.
// Elle ne s'exécute pas au chargement, mais attend un signal.
function play() {
  // --- STEP 3: INITIALIZATION ---
  // À chaque clic, on crée un nouvel univers de jeu.
  // On génère le nombre secret (1-100) et on remet les compteurs à zéro.
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let hasWon = false;

  // Petit aide-mémoire dans la console pour les tests
  console.log("Nombre à trouver :", targetNumber);

  // --- STEP 4: GAME LOOP ---
  // C'est le cœur du jeu : on répète l'action tant que le joueur n'a pas trouvé.
  while (hasWon === false) {
    // On récupère la saisie du joueur
    let input = prompt("Devine le nombre (entre 1 et 100) :");

    // --- STEP 5: COMPARISON LOGIC ---
    // C'est ici que le programme va "réfléchir" et comparer
    // targetNumber avec input.

    // Pour l'instant, on force l'arrêt pour éviter que le navigateur ne plante
    hasWon = true;
  }
}

// --- STEP 6: EVENT LISTENER ---
// On branche le bouton à notre moteur de jeu.
// On écoute l'événement "click" pour déclencher la fonction "play".
startButton.addEventListener("click", play);
