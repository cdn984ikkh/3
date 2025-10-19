document.getElementById('open-button').addEventListener('click', function() {
    
    const initialScreen = document.getElementById('initial-screen');
    initialScreen.classList.add('hidden');

    const videoContainer = document.getElementById('video-container');
    videoContainer.classList.remove('hidden');

    const videoElement = document.getElementById('full-video');

    videoElement.play().catch(error => {
        
    });

    if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
    } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
    } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
    }
});

document.getElementById('full-video').addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
});

document.getElementById('full-video').addEventListener('click', function(event) {
    event.preventDefault();
    if (this.paused) {
        this.play();
    }
});