document.addEventListener('DOMContentLoaded', () => {
  // Get DOM element references
  const apiKeyContainer = document.querySelector('#api-key-container');
  const apiKeyInput = document.querySelector('#api-key-input');
  const apiKeySubmit = document.querySelector('#api-key-submit');
  const searchContainer = document.querySelector('#search-container');
  const themeToggle = document.querySelector('#theme-toggle');
  const body = document.body; // Direct reference to body

  // Check if all elements were found
  if (!apiKeyContainer || !apiKeyInput || !apiKeySubmit || !searchContainer || !themeToggle) {
    console.error('Error: One or more required DOM elements not found.');
    // Optionally display an error message to the user
    // alert('Initialization error: UI elements missing. Please check the HTML structure.');
    return; // Stop script execution if elements are missing
  }

  // --- Theme Toggle ---
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Optional: Save theme preference to localStorage
    // if (body.classList.contains('dark-mode')) {
    //   localStorage.setItem('theme', 'dark');
    // } else {
    //   localStorage.setItem('theme', 'light');
    // }
  });

  // --- API Key Submission ---
  apiKeySubmit.addEventListener('click', (event) => {
    // event.preventDefault(); // Good practice, though maybe not strictly needed here

    const apiKey = apiKeyInput.value.trim(); // Get and trim the key

    if (!apiKey) {
      alert('Please enter an API key.'); // Simple validation
      return;
    }

    // Store the API key globally (consider more secure storage if sensitive)
    window.apiKey = apiKey;
    console.log('API Key stored.'); // For debugging

    // Hide API key section
    apiKeyContainer.style.display = 'none';

    // Show search section
    searchContainer.style.display = 'block'; // Or 'flex', 'grid' depending on its CSS

    // Optional: Show the main app content (#root) now
    // const rootElement = document.querySelector('#root');
    // if (rootElement) {
    //    rootElement.style.display = 'block'; // Or its default display
    // }
  });

  // Optional: Check for saved theme preference on load
  // const savedTheme = localStorage.getItem('theme');
  // if (savedTheme === 'dark') {
  //   body.classList.add('dark-mode');
  // } else {
  //    body.classList.remove('dark-mode'); // Ensure light mode if not dark or no preference
  // }

});
