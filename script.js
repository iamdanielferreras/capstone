// script.js

const toggleBtn = document.getElementById('theme-toggle');

// 1. Check if user previously selected dark mode
const currentTheme = localStorage.getItem('theme');

// If the user's stored preference is "dark", apply it immediately
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Switch to Day Mode';
}

// 2. Add click event listener to the toggle button
toggleBtn.addEventListener('click', () => {
  // Toggle the dark-mode class on the body element
  document.body.classList.toggle('dark-mode');
  
  // Check if dark-mode is active to update storage and button text
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️ Switch to Day Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙 Switch to Night Mode';
  }
});
