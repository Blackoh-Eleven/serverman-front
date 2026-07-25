const token = localStorage.getItem("token");

fetch("https://serverman-rh0k.onrender.com/profile", {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
.then(res => res.json())
.then(profile => {
    document.getElementById("boldusername").textContent = profile.profileName;
    document.getElementById("emailbox").textContent = profile.email;
});


