
// Function to ask for the user's name and display it
function askAndDisplayName() {
    // Ask for the user's name
    const username = window.prompt("Hey there, what is your name?");
    console.log(username); // Log the username to the console

    // Find the HTML element to display the name and set its text
    document.getElementById('nameDisplay').textContent = `Hello, ${username}!`;
}

// Add an event listener to the button for when it's clicked
document.getElementById('namePromptButton').addEventListener('click', askAndDisplayName);

// Function to change the background color of the page
function changeBackground(color) {
    document.body.style.background = color;
}

// Change the background color to gray when the window loads
window.addEventListener("load", function() { changeBackground('gray'); });


<script>
    // Function to toggle the image size
    function toggleImageSize() {
        var image = document.getElementById('clickableImage');
        // Check if the image is in its original size
        if (image.style.width === "200px") {
            image.style.width = "400px"; // Enlarge the image
        } else {
            image.style.width = "200px"; // Shrink the image back to its original size
        }
    }

    // Add click event listener to the image
    document.getElementById('clickableImage').addEventListener('click', toggleImageSize);
</script>


