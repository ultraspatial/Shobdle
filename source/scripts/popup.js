// Get the nav button and popup container elements
const navButton = document.getElementById('nav-button');
const popupContainer = document.getElementById('popup-container');

// Add an event listener to the nav button
navButton.addEventListener('click', () => {
  // Show the popup container
  popupContainer.style.display = 'block';
});

// Add an event listener to the close button
document.getElementById('close-button').addEventListener('click', () => {
  // Hide the popup container
  popupContainer.style.display = 'none';
});