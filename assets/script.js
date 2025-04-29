 overlay.addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000);
    });

const audio = document.getElementById("audioPlayer");
const message = document.getElementById("message");

document.addEventListener("click", () => {
  audio
    .play()
    .then(() => {
      console.log("Audio started playing.");
      message.style.display = "none";
    })
    .catch((error) => {
      console.error("Playback error:", error);
    });
});
