function updateStressBar(stressLevel) {
    const stressBar = document.getElementById('stressed-bar');
    const stressLabel = document.getElementById('stressed-label');
  
    stressBar.style.width = `${stressLevel}%`;
  
    stressLabel.textContent = `Nível de Estresse: ${stressLevel}%`;
  

    stressBar.style.backgroundColor = '#A42E2E';

}

function updateTiredBar(tiredLevel) {
    const tiredBar = document.getElementById('tired-bar');
    const tiredLabel = document.getElementById('tired-label');
  
    tiredBar.style.width = `${tiredLevel}%`;
  
    tiredLabel.textContent = `Nível de Cansaço: ${tiredLevel}%`;

    tiredBar.style.backgroundColor = "#808080"

}

function updateQuietBar(quietLevel) {
    const quietBar = document.getElementById('quiet-bar');
    const quietLabel = document.getElementById('quiet-label');
  
    quietBar.style.width = `${quietLevel}%`;
  
    quietLabel.textContent = `Nível de Tranquilidade: ${quietLevel}%`;

    quietBar.style.backgroundColor = "#5E9EFF"

}

function updateHappyBar(happyLevel) {
    const happyBar = document.getElementById('happy-bar');
    const happyLabel = document.getElementById('happy-label');
  
    happyBar.style.width = `${happyLevel}%`;
  
    happyLabel.textContent = `Nível de Felicidade: ${happyLevel}%`;

    happyBar.style.backgroundColor = "#D0A530"

}

  updateStressBar(50);
  updateTiredBar(79);
  updateQuietBar(22);
  updateHappyBar(90);

var modal = document.getElementById("myModal");

var btn = document.getElementById("user-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}