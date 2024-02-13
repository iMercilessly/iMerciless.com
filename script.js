document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var requestedFile = window.location.pathname.substring(1); // Remove leading slash
    var validFiles = ["", "index.html", "under_construction.html", "404.html", "login.html", "unknown.html"]; // List of valid files

    // Check if the requested file is valid
    if (!validFiles.includes(requestedFile)) {
        // Redirect to the 404 page if the file is not valid
        window.location.href = "404";
    }
});

document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === "admin" && password === "admin"){
        alert("Login successful!");
        window.location.replace("unknown"); // Redirect to analytics page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to check if the user is logged in
    function checkLoggedIn() {
        // Assuming you have a way to store the login status (e.g., localStorage)
        var isLoggedIn = localStorage.getItem("isLoggedIn");
        // Check if the current page is the login page
        var isLoginPage = window.location.pathname.endsWith("login.html");
        // If not logged in and not on the login page, redirect to login
        if (!isLoggedIn && !isLoginPage) {
            // Redirect the user to the login page
            window.location.replace("login.html");
        }
    }

    // Call the checkLoggedIn function to perform the check
    checkLoggedIn();

    // Function to fetch analytics data from the server
    function fetchAnalyticsData() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1', // Example URL, replace with your own endpoint
            method: 'GET',
            success: function(response) {
                updateAnalyticsData(response);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching data:", error);
            }
        });
    }

    // Function to update analytics data in the HTML
    function updateAnalyticsData(data) {
        // Update the analytics data in the HTML
        document.getElementById("visitors").textContent = data.visitors;
        document.getElementById("total-views").textContent = data.totalViews;
        document.getElementById("views-today").textContent = data.viewsToday;
    }

    // Call the fetchAnalyticsData function to fetch and update the data
    fetchAnalyticsData();
});