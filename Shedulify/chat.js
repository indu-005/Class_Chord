document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("chatMessage");
    const sendMessageBtn = document.getElementById("sendMessage");
    const messagesContainer = document.getElementById("messages");
    const voiceSearchBtn = document.getElementById("voiceSearch");

    // Send Message
    sendMessageBtn.addEventListener("click", function () {
        sendMessage();
    });

    // Enter Key to Send
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message");
            messageDiv.textContent = messageText;
            messagesContainer.appendChild(messageDiv);
            messageInput.value = ""; // Clear input
            messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
        }
    }

    // Voice Search / Mic Button
    voiceSearchBtn.addEventListener("click", function () {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";

        recognition.onstart = function () {
            voiceSearchBtn.textContent = "🎙 Listening...";
        };

        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            messageInput.value = transcript;
            voiceSearchBtn.textContent = "🎤"; // Reset button
        };

        recognition.onerror = function () {
            alert("Voice recognition failed. Please try again.");
            voiceSearchBtn.textContent = "🎤";
        };

        recognition.start();
    });
});
