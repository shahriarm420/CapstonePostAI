// JavaScript for dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check localStorage for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.toggle('dark-mode', savedTheme === 'dark');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  darkModeToggle.textContent = isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode';
});