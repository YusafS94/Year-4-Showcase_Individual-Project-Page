/* Project Slides Carousel */

// Get necessary elements
const imageList = document.getElementById('image-list');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Initialize index to track the current image
let currentIndex = 0;

// Function to change the slide (next or previous)
function changeSlide(direction) {
    // Update the current index based on the direction
    currentIndex += direction;

    // Check for boundary conditions
    if (currentIndex < 0) {
        currentIndex = imageList.children.length - 1;
    } else if (currentIndex >= imageList.children.length) {
        currentIndex = 0;
    }

    // Calculate the translation value based on the current index
    const translateValue = -currentIndex * 100 + '%';

    // Apply the translation to the image list to show the new slide
    imageList.style.transform = `translateX(${translateValue})`;
}

// Add event listeners for the previous and next buttons
prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

/* More Projects Carousel */
// Get necessary elements for the carousel with different prefix
const moreProjectsImageList = document.getElementById('moreProjects-image-list');
const moreProjectsPrevButton = document.getElementById('moreProjects-prev-btn');
const moreProjectsNextButton = document.getElementById('moreProjects-next-btn');

// Initialize index for the carousel with different prefix
let moreProjectsCurrentIndex = 0;

// Function to change the slide for the carousel with different prefix
function changeMoreProjectsSlide(direction) {
    // Update the current index based on the direction
    moreProjectsCurrentIndex += direction;

    // Check for boundary conditions for the carousel with different prefix
    if (moreProjectsCurrentIndex < 0) {
        moreProjectsCurrentIndex = moreProjectsImageList.children.length - 1;
    } else if (moreProjectsCurrentIndex >= moreProjectsImageList.children.length) {
        moreProjectsCurrentIndex = 0;
    }

    // Calculate the translation value based on the current index
    const moreProjectsTranslateValue = -moreProjectsCurrentIndex * 100 + '%';

    // Apply the translation to the image list to show the new slide for the carousel with different prefix
    moreProjectsImageList.style.transform = `translateX(${moreProjectsTranslateValue})`;
}

// Add event listeners for the previous and next buttons for the carousel with different prefix
moreProjectsPrevButton.addEventListener('click', () => changeMoreProjectsSlide(-1));
moreProjectsNextButton.addEventListener('click', () => changeMoreProjectsSlide(1));

// Carousel moves to middle on page load
window.addEventListener('load', () => changeMoreProjectsSlide(1));