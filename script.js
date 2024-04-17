var counter = 0;
var intervalTime = 500; // Initial interval time (in milliseconds)
var frogInterval; // Variable to store the interval ID
var maxFrogs = 100;
var isPaused = false;
// Function to check if the maximum number of frogs has been reached


function isMaxFrogsReached() {
    var frogs = document.getElementsByClassName('frog');
    return frogs.length >= maxFrogs;
}

// Function to spawn a frog
function spawnFrog() {
  if (isMaxFrogsReached() || isPaused) return;

    // Create a new frog element
    var frog = document.createElement('img');
    frog.src = 'frog.png'; // Frog emoji URL
    frog.classList.add('frog');

    var width = 60; // Adjust as needed
    var height = 40; // Adjust as needed
    frog.width = width;
    frog.height = height;

    // Set random position within the container
    var container = document.getElementById('container');
    var containerRect = container.getBoundingClientRect();
    frog.style.left = Math.random() * (containerRect.width - 50) + 'px'; // Adjust 50 for frog width
    frog.style.top = Math.random() * (containerRect.height - 50) + 'px'; // Adjust 50 for frog height

    // Add click event listener
    frog.addEventListener('click', function() {
        container.removeChild(frog); // Remove the clicked frog
        counter++; // Increment the counter
        document.getElementById('counter').textContent = 'Counter: ' + counter; // Update the counter display

        // Play frog sound
        var audio = new Audio('boop.mp3');
        audio.play();

        // Check if the counter is a multiple of 10

    });

    // Add the frog to the container
    container.appendChild(frog);
}

function togglePause() {
    isPaused = !isPaused;
    var pauseButton = document.getElementById('pause-button');
    pauseButton.textContent = isPaused ? 'Unpause' : 'Pause';
    if (!isPaused) {
        // If unpausing, resume spawning frogs
        frogInterval = setInterval(spawnFrog, intervalTime);
    } else {
        clearInterval(frogInterval); // If pausing, stop spawning new frogs
    }
}


frogInterval = setInterval(spawnFrog, intervalTime);
