function estPalindrome(mot) {
  let lettres = mot.split("");
  let lettresInversees = lettres.reverse();
  let motInverse = lettresInversees.join("");

  if (mot === motInverse) {
    return "C'est un palindrome";
  } else {
    return "Ce n'est pas un palindrome";
  }
}

function verifierPalindrome() {
  let mot = document.getElementById("mot").value;
  let resultat = estPalindrome(mot);
  alert(resultat);
}
