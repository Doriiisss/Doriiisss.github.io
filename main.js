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

cument.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            age: form.age.value,
            feedback: form.feedback.value,
            interests: [...form.interests].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value),
            country: form.country.value
        };

        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Form data saved!');
    });

    form.addEventListener('reset', function()