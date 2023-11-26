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