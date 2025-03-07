function validateLogin() {
    // Dummy user credentials (Replace with a backend API in a real project)
    const validUsername = "indu";
    const validPassword = "password123";

    // Get user input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if the credentials match
    if (username === validUsername && password === validPassword) {
        alert("Login Successful!");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid Username or Password");
    }
}
