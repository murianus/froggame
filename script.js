var counter = 0;
var intervalTime = 500;
var frogInterval; 
var maxFrogs = 10;
var isPaused = false
var backgroundMusic = new Audio('background_music.mp3');
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.3;

function isMaxFrogsReached() {
    var frogs = document.getElementsByClassName('frog');
    return frogs.length >= maxFrogs;
}

function spawnFrog() {
  if (isMaxFrogsReached() || isPaused) return;

    
    var frog = document.createElement('img');
    frog.src = 'frog.png';
    frog.classList.add('frog');

    var width = 60; 
    var height = 40; 
    frog.width = width;
    frog.height = height;

    var container = document.getElementById('container');
    var containerRect = container.getBoundingClientRect();
    frog.style.left = Math.random() * (containerRect.width - 50) + 'px';
    frog.style.top = Math.random() * (containerRect.height - 50) + 'px';
   
    frog.addEventListener('click', function() {
        container.removeChild(frog);
        counter++;
        document.getElementById('counter').textContent = 'Counter: ' + counter;

       
        var audio = new Audio('boop.mp3');
        audio.play();
        backgroundMusic.play();

    });
  
    container.appendChild(frog);
        if (isMaxFrogsReached()) {
          counter = 0;
          document.getElementById('counter').textContent = 'Counter: ' + counter; // Update counter display
          var frogs = document.getElementsByClassName('frog');
          while (frogs[0]) {
             frogs[0].parentNode.removeChild(frogs[0]);
          }
      }
    
}
function togglePause() {
    isPaused = !isPaused;
    var pauseButton = document.getElementById('pause-button');
    pauseButton.textContent = isPaused ? 'Unpause' : 'Pause';
    if (!isPaused) {
        frogInterval = setInterval(spawnFrog, intervalTime);
    } else {
        clearInterval(frogInterval);
    }
}

frogInterval = setInterval(spawnFrog, intervalTime);
