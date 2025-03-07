
document.addEventListener("DOMContentLoaded", function () {
    const connectionsList = document.querySelector(".connections-list");

    // Fake users data
    const fakeUsers = [
        { name: "John Doe", role: "Data Scientist", link: "#" },
        { name: "Jane Smith", role: "Software Engineer", link: "#" },
        { name: "Michael Johnson", role: "AI Researcher", link: "#" },
        { name: "Emily Davis", role: "Cloud Architect", link: "#" },
        { name: "David Brown", role: "Cybersecurity Expert", link: "#" },
        { name: "Sophia Wilson", role: "Full Stack Developer", link: "#" },
        { name: "James Anderson", role: "ML Engineer", link: "#" },
        { name: "Olivia Martinez", role: "Data Analyst", link: "#" }
    ];

    // Generate user cards
    fakeUsers.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("connection-card");

        userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.role}</p>
            <a href="${user.link}" class="connect-button">Connect</a>
        `;

        connectionsList.appendChild(userCard);
    });
});