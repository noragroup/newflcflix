document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner le bouton et la popup
  let showPopupButton = document.getElementById('showPopupButton');
  let popup = document.getElementById('popup');
  let closeButton = document.getElementById('closeButton');

  // Afficher la popup lorsque le bouton est cliqué
  showPopupButton.addEventListener('click', function() {
    popup.style.display = 'block';
  });

  // Fermer le popup lorsque le bouton de fermeture est cliqué
  closeButton.addEventListener('click', function() {
    let patchNote = document.getElementById('patchNote');

    popup.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner le bouton et la popup
  let showSecondPopupButton = document.getElementById('showSecondPopupButton');
  let popup2 = document.getElementById('popup2');
  let closeButton2 = document.getElementById('closeButton2');

  // Afficher la popup lorsque le bouton est cliqué
  showSecondPopupButton.addEventListener('click', function() {
    popup2.style.display = 'block';
  });

  // Fermer le popup lorsque le bouton de fermeture est cliqué
  closeButton2.addEventListener('click', function() {
    let infos = document.getElementById('more');

    popup2.style.display = 'none';
  });
});