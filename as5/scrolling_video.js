// Scroll-based video control
const videoSections = document.querySelectorAll('.video-section');

videoSections.forEach((section, index) => {
    const video = section.querySelector('video');
    const videoID = `scrollVideo${index + 1}`;
    video.id = videoID;

    window.addEventListener('scroll', () => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            // Show the video when in the video section
            video.style.visibility = 'visible';
            // Calculate the scroll-based progress as a percentage
            const scrollProgress = (scrollPosition - sectionTop) / sectionHeight;
            // Set video playback time based on scroll progress
            video.currentTime = scrollProgress * video.duration;
        } else {
            // Hide the video outside the video section
            video.style.visibility = 'hidden';
        }
    });
});
