// Function to display the welcome message
function displayWelcomeMessage() {
  // Check if the current page is the index page
  if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
      // Show the welcome message
      const welcomeMessage = document.getElementById('welcome-message');
      if (welcomeMessage) {
          welcomeMessage.style.display = 'block';
          // Optionally, display an alert
          alert("Welcome to Fahad Alshamlani's web page!");
      }
  }
}

// Call the function when the page loads
window.onload = displayWelcomeMessage;
