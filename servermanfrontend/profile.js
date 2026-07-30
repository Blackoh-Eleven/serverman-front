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




const sidebar = document.getElementById("sidebar");

let sidecomputed = window.getComputedStyle(sidebar)
console.log(sidecomputed.display)

document.getElementById("cancelbtn").addEventListener("click", function () {
    if (sidecomputed.display === "block") {
        sidebar.style.display = "none";
        console.log(sidebar.style.display)
        
    }
});


document.getElementById("sidebaropen").addEventListener("click", function () {
    if (sidecomputed.display === "none") {
        sidebar.style.display = "block";
        console.log(sidebar.style.display)
        
    }
});





