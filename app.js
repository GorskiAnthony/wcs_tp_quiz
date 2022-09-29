/******************************************/
//              Consigne                  //
/******************************************/

/**
 * Etape
 *
 * 1. Enregistrer les bonnes reponses dans un tableau
 * 2. Créer 2 tableaux vide pour avoir les réponses de l'utilisateur & pour verifier si c'est les bonnes
 * 3. Faire un querySelector du formulaire
 * 4. Ecouter l'evenement "Submit" du *formulaire* (n'oubliez pas de faire attention au refresh de la page avec 'event')
 * doc : https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/submit_event_
 *
 * Suite
 *
 * 1. Faire une boucle for sur la longeur du tableau des réponses juste.
 * 2. *Push* les informations récuperer dans le tableau RESPONSE_USER.
 * 3. Fonction ' checkIsTrue' qui prend en paramètre le tableau de RESPONSE_USER
 *
 * La fonction 'checkIsTrue' va comparer dans une boucle for si les reponses sont juste ou fausse.
 * Si oui, push 'true' sinon push 'false
 */

/********************** Exercice **********************/

/**
 *
 * Créations des tableaux pour les réponses
 */
const RESPONSES = ["c", "a", "c", "b", "c"];
let checkResponses = [];
let userResponses = [];

// Get my form
const FORM = document.querySelector(".form-quiz");

// get info from dom
const TITLE = document.querySelector(".resultats h2");
const AIDE = document.querySelector(".aide");
const NOTE = document.querySelector(".note");

// Listen to the submit event
FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 1; i <= RESPONSES.length; i++) {
    userResponses.push(
      document.querySelector(`input[name=q${i}]:checked`).value
    );
  }

  //console.log(userResponses);
  checkIsTrue(userResponses);

  userResponses = [];
});

function checkIsTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === RESPONSES[i]) {
      checkResponses.push(true);
    } else {
      checkResponses.push(false);
    }
  }

  // display good responses
  displayInfo(checkResponses);

  console.log(checkResponses);
  checkResponses = [];
}

function displayInfo(arr) {
  const GOOD_RESPONSES = arr.filter((response) => response === true).length;
  if (GOOD_RESPONSES === 0) {
    TITLE.innerHTML = "<bold>Tu m'as deçu</bold>";
    AIDE.innerText = "Retourne travailler";
    NOTE.innerText = "0/5";
  } else if (GOOD_RESPONSES === 5) {
    TITLE.innerHTML = "<bold>Tu es le meilleur !</bold>";
    AIDE.innerText = "Tu peux prendre un repos";
    NOTE.innerText = "5/5";
  } else {
    TITLE.innerHTML = "<bold>Dommage, tu y es presque !</bold>";
    AIDE.innerText = "Allez, encore un peu";
    NOTE.innerText = `${GOOD_RESPONSES}/5`;
  }
}
