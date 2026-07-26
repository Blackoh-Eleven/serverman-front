const token = localStorage.getItem("token");
const loading = document.querySelector(".loading");
const content = document.querySelector(".content");


loading.style.display ="flex"





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


// const token = localStorage.getItem("token");
// const loading = document.querySelector(".loading");
// const content = document.querySelector(".content");

// loading.style.display = "flex";
// content.style.display = "none";

// async function loadProfile() {
//     try {
//         const res = await fetch("https://serverman-rh0k.onrender.com/profile", {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });


//         const profile = await res.json();

//         document.getElementById("boldusername").textContent = profile.profileName;
//         document.getElementById("emailbox").textContent = profile.email;

//         loading.style.display = "none";
//         content.style.display = "block";
//     } catch (err) {
//         console.error(err);
//         loading.style.display = "none";
//     }
// }

// loadProfile();


