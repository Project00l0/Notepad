/**
 * Handles theme toggling (light/dark) and saves the preference.
 */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // --- Theme Toggling ---

  // Function to apply the theme based on preference
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  };

  // Check localStorage for saved theme preference on page load
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  } catch (e) {
    console.warn('LocalStorage is not available. Theme preference will not be saved.', e);
  }

  // Event listener for the theme toggle button
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      // Save the current theme preference to localStorage
      try {
        if (body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
        } else {
          // Explicitly set to light or remove, depending on desired default
          localStorage.setItem('theme', 'light');
          // Alternatively: localStorage.removeItem('theme');
        }
      } catch (e) {
        console.warn('LocalStorage is not available. Theme preference cannot be saved.', e);
      }
    });
  } else {
    console.warn('Theme toggle button not found.');
  }

  // --- Search Functionality (Placeholder) ---

  const searchBar = document.getElementById('search-bar');

  // Function to handle search logic
  const handleSearch = () => {
    // TODO: Implement recipe filtering based on searchBar.value
    console.log('Searching for:', searchBar.value);
  };

  // Add event listener for search bar input
  if (searchBar) {
    searchBar.addEventListener('input', handleSearch);
  } else {
    console.warn('Search bar not found.');
  }

});
