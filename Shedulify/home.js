document.addEventListener("DOMContentLoaded", function () {
    loadAnnouncements();
    loadEvents();
});

function loadAnnouncements() {
    const announcements = [
        "Holiday Announcement - College closed on Dec 25",
        "Department Meeting on Nov 20",
        "New Courses Available for Registration",
        "Placement Drive on Dec 10",
        "Semester Results Announced"
    ];
    const announcementList = document.getElementById("announcementList");

    announcements.forEach((announcement) => {
        let li = document.createElement("li");
        li.textContent = announcement;
        announcementList.appendChild(li);
    });
}

function loadEvents() {
    const events = [
        "Hackathon - Oct 30",
        "Seminar - Nov 5",
        "Sports Day - Nov 15",
        "Project Showcase - Dec 1"
    ];
    const eventList = document.getElementById("eventList");

    events.forEach((event) => {
        let li = document.createElement("li");
        li.textContent = event;
        eventList.appendChild(li);
    });
}

function getAIResponse() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const responseBox = document.getElementById("chat-response");

    const responses = {
        "how to use class chord": "Class Chord allows you to access announcements, discussions, chat spaces, and study resources easily.",
        "where can i find resources": "You can find study materials, research papers, and library access under the 'Resources' section.",
        "how to join a club": "Go to the 'Groups & Clubs' section and select a club you are interested in. Click 'Join' to become a member!",
        "who are my connections": "Your connections can be viewed in the 'Connections' section, where you can link with peers.",
        "when is the next exam": "Exam dates are listed in the Calendar section, and you will receive an alert one week before."
    };

    responseBox.textContent = responses[userInput] || "I'm not sure about that. Try rephrasing your question!";
}