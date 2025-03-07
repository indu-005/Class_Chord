document.addEventListener("DOMContentLoaded", function () {
    const announcements = document.querySelectorAll(".announcement-card");

    if (announcements.length === 0) {
        console.error("No announcement cards found!");
        return;
    }

    announcements.forEach((card) => {
        card.addEventListener("click", function () {
            const titleElement = this.querySelector("h2");
            const title = titleElement ? titleElement.textContent : "Unknown";

            alert(`Viewing announcements for: ${title}`);
        });
    });
});