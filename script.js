 overlay.addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            content.style.display = 'flex';
            playerContainer.style.display = 'flex';
            loadSong(currentSongIndex);
            updateVolumeEmoji(currentVolume);
        }, 1000);
    });
