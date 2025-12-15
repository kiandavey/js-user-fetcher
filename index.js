const button = document.getElementById("load-user-btn");
const profileCard = document.getElementById("profile-card");

button.addEventListener("click", async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();

        profileCard.textContent = "";

        const userName = document.createElement("h3");
        const userEmail = document.createElement("p"); 
        userName.textContent = data.name;
        userEmail.textContent = data.email;

        profileCard.appendChild(userName);
        profileCard.appendChild(userEmail);
    }
    catch(error) {
        console.error(error);
        profileCard.textContent = "Failed to load user.";
    }
});
