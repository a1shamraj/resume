jQuery(document).ready(function ($) {

    // Adjust margin-top of banner and main section based on header height
    var mastheadheight = $('.ds-header').outerHeight();
    $(".ds-banner,.ds-main-section").css("margin-top", mastheadheight);

    // Add fixed header class on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 10) {
            $('.ds-header').addClass('ds-fixed-header');
        }
        else {
            $('.ds-header').removeClass('ds-fixed-header');
        }
    }).scroll();

    // Dark mode toggle functionality
    const toggleButton = document.getElementById('toggle-dark-mode');
    const darkModeStylesheet = document.getElementById('dark-mode-css');

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        if (currentTheme === 'dark') {
            darkModeStylesheet.disabled = false;
            toggleButton.textContent = 'Light Mode';
        }
    }

    toggleButton.addEventListener('click', function () {
        if (darkModeStylesheet.disabled) {
            darkModeStylesheet.disabled = false;
            toggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeStylesheet.disabled = true;
            toggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});