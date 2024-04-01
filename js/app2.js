let slideIndex = 0;
let startX = 0;
let endX = 0;

function startTouch(event) {
  startX = event.touches[0].clientX;
}

function moveTouch(event) {
  endX = event.touches[0].clientX;
}

function endTouch() {
  if (startX - endX > 50) {
    slide(1); // Swipe nach links
  } else if (endX - startX > 50) {
    slide(-1); // Swipe nach rechts
  }
}

function slide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = 0;
  } else if (slideIndex > 3) {
    slideIndex = 3;
  }
  document.getElementById("slider").style.transform = "translateX(" + (-slideIndex * 25) + "%)";

  // Überprüfen, ob der Benutzer versucht, über den sichtbaren Bereich hinaus zu swipen
  if (slideIndex === 0 && n === -1 || slideIndex === 3 && n === 1) {
    let interval = setInterval(function() {
      slideIndex -= n; // Ändere die Anzahl der Schritte nach Bedarf
      document.getElementById("slider").style.transform = "translateX(" + (-slideIndex * 25) + "%)";

      clearInterval(interval); // Stoppt das Intervall, wenn alle Schritte abgeschlossen sind

    }, 100); // Ändere die Zeit zwischen den Schritten nach Bedarf
  }
}
slide(-1);
