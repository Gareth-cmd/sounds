let currentAudio = null;

function playSound(sound) {
    // Stop the currently playing sound (if any)
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play the selected sound
    currentAudio = new Audio(`${sound}.mp3`);
    currentAudio.loop = true; // Loop the sound continuously
    currentAudio.play();
}
