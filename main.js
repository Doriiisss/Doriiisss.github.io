document.addEventListener('DOMContentLoaded', function() {
    // Toggle submenu visibility
    const submenuTriggers = document.querySelectorAll('.submenu-trigger');
    submenuTriggers.forEach(trigger => {
        trigger.addEventListener('mouseover', () => {
            trigger.querySelector('.submenu').style.display = 'block';
        });
        trigger.addEventListener('mouseout', () => {
            trigger.querySelector('.submenu').style.display = 'none';
        });
    });

    // Display user's name prompt and greeting
    const namePromptButton = document.getElementById('namePromptButton');
    if(namePromptButton) {
        namePromptButton.addEventListener('click', function() {
            const username = window.prompt("Hey there, what is your name?");
            if (username) {
                document.getElementById('nameDisplay').textContent = `Hello, ${username}!`;
            }
        });
    }
});
