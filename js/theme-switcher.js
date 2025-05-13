const themeToggle = document.getElementById('theme-toggle');
const darkTheme = document.querySelector('link[href="css/dark-theme.css"]');
const html = document.documentElement;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    darkTheme.disabled = false;
    html.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Theme toggle button
themeToggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        darkTheme.disabled = true;
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        html.setAttribute('data-theme', 'dark');
        darkTheme.disabled = false;
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});