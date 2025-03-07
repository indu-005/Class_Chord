document.addEventListener("DOMContentLoaded", function () {
    const resourceLinks = document.querySelectorAll("ul li a");

    resourceLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            const resourceName = this.textContent;
            console.log(`Accessing: ${resourceName}`);
            alert(`Opening resource: ${resourceName}`);
        });
    });
});