const num = prompt("Choisissez un chiffre :");

let randNum = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

if (num === randNum) {
  alert(`Bravo ! Tu as trouvé en ${attempts} tentatives.`);
  attempts += 1;
} else if (num < randNum) {
  alert("Trop petit");
  attempts += 1;

  alert(`Le nombre c'etait:  ${randNum}`);
} else if (num > randNum) {
  alert("Trop grand");
  attempts += 1;

  alert(`Le nombre c'etait:  ${randNum}`);
}

console.log(attempts);
