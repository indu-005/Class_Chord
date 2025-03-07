document.addEventListener("DOMContentLoaded", function () {
    // Display Current Date
    const currentDate = new Date();
    document.getElementById("current-date").textContent =
        `📅 ${currentDate.toDateString()}`;

    // Upcoming Exams & Alerts (1 Week Before)
    const upcomingExams = [
        { name: "Final Exams", date: "2025-04-10" },
        { name: "Midterms", date: "2025-03-20" },
    ];

    const examAlert = document.getElementById("exam-alert");
    const today = new Date();
    
    let foundAlert = false;

    upcomingExams.forEach((exam) => {
        const examDate = new Date(exam.date);
        const oneWeekBefore = new Date(examDate);
        oneWeekBefore.setDate(examDate.getDate() - 7);

        if (today >= oneWeekBefore && today < examDate) {
            examAlert.innerHTML = `⚠ Alert: ${exam.name} starts in less than a week on ${examDate.toDateString()}!;
            foundAlert = true`;
        }
    });

    if (!foundAlert) {
        examAlert.innerHTML = "✅ No upcoming exam alerts.";
    }
});

// Function to Create Event or Book Classroom
function createEvent() {
    const eventName = document.getElementById("event-name").value;
    const eventDate = document.getElementById("event-date").value;
    const confirmationMessage = document.getElementById("confirmation-message");

    if (eventName === "" || eventDate === "") {
        confirmationMessage.innerHTML = "❌ Please enter an event name and date.";
        confirmationMessage.style.color = "red";
        return;
    }

    confirmationMessage.innerHTML = `✅ Event "${eventName}" has been booked on ${eventDate}.`;
    confirmationMessage.style.color = "green";

    // Log event in console (for testing)
    console.log(`New Event: ${eventName} on ${eventDate}`);
}