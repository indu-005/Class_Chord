// Function to post a message and redirect to Home page
function postMessage() {
    let input = document.getElementById("discussionInput");
    let messageText = input.value.trim();
    
    if (messageText === "") {
        alert("Please enter a message before posting.");
        return;
    }

    let messagesDiv = document.getElementById("messages");

    // Create a message element
    let messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = <p>${messageText}</p>;

    // Append message to messages container
    messagesDiv.appendChild(messageElement);

    // Clear input field
    input.value = "";

    // Redirect to Home page after 1 second
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
}