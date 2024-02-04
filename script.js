
// FORMULAIRE //
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
    document.getElementById('myform').style.display = 'none'; // faire disparaître le formulaire
    document.getElementById('confirmation-message').style.display = 'block' // message de confirmation
  }
  });

  function validateForm() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var adresse = document.getElementById('adresse').value;
    var ville = document.getElementById('ville').value;
    var codePostal = document.getElementById('code-postal').value;
    var pays = document.getElementById('pays').value;
    var birthday = document.getElementById('birthday').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password-confirm').value;
    var conditionsCheckbox = document.getElementById('conditions');

    document.getElementById('error').innerHTML = '';

    // vérifier mot de passe
    if (password.length < 6) {
      displayErrorMessage('Le mot de passe doit contenir au moins 6 caractères.');
      return false;
    }

    if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      displayErrorMessage('Le mot de passe doit contenir à la fois des lettres et des chiffres.');
      return false;
    }

    if (password !== confirmPassword) {
      displayErrorMessage('Les mots de passe ne correspondent pas.');
      return false;
    }

    // formulaire valide
    return true;
  }

  // message d'erreur
  function displayErrorMessage(message) {
    document.getElementById('error').innerHTML = message;
  }


});




// MENU //
function toggleMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');

  navMenu.classList.toggle('show');
  burgerMenu.classList.toggle('open');
}



//SLIDER//
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}




//PLUIE DE METEORITES//
let meteorShowerInterval;

    function startMeteorShower() {
      const meteorContainer = document.getElementById('meteorContainer');

      // creation des météorites
      for (let i = 0; i < 20; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.left = `${Math.random() * 95}vw`; //valeur max droite
        meteor.style.animationDuration = `${Math.random() * 2 + 1}s`; //animation
        meteorContainer.appendChild(meteor); //ajout
      }
    }

    function stopMeteorShower() {
      const meteorContainer = document.getElementById('meteorContainer');
      // enlever météorites
      while (meteorContainer.firstChild) {
        meteorContainer.removeChild(meteorContainer.firstChild);
      }
    }

    //bouton marche arrêt
    function toggleMeteorShower() {
      const button = document.querySelector('.meteor-shower-button');
      if (meteorShowerInterval) {
        clearInterval(meteorShowerInterval);
        meteorShowerInterval = null;
        button.textContent = 'Pluie de météorites : ACTIVER';
        stopMeteorShower();
      } else {
        startMeteorShower();
        meteorShowerInterval = setInterval(startMeteorShower, 5000); // intervalle
        button.textContent = 'Pluie de météorites : DESACTIVER';
      }
    }