function estPair(nombre) {
  if (nombre % 2 === 0) {
    return "Le nombre est pair";
  } else {
    return "Le nombre est impair";
  }
}

function verifierPair() {
  let n = document.getElementById("nombre").value;
  let resultat = estPair(Number(n));
  alert(resultat);
}
