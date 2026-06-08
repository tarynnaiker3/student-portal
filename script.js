const passwordInput = document.getElementById("password");

passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        window.location.href = "dashboard.html";
    }
});
