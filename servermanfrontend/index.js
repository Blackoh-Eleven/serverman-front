//  let signupbtn = document.getElementById("signupbtn");
    let signinbtn = document.getElementById("signinbtn");
    let namefield = document.getElementById("namefield");
    let tittle = document.getElementById("tittle");

// signupbtn.onclick = function(){
//     let userName = document.getElementById('username')
//     let userNameValue = userName.value;
//     userName.value = ''

//     let eMail = document.getElementById('email')
//     let eMailValue = eMail.value;
//     eMail.value = '';

//     let passWord = document.getElementById('password')
//     let passWordValue = passWord.value
//     passWord.value = ''


//     let userInfo = {
//         profileName:userNameValue,
//         email:eMailValue,
//         password:passWordValue
//     }

//     // console.log(user.profileName,user.email,user.password)
//     fetch("http://localhost:3000/signup",{
//         method: "POST",
//         headers:{
//             "Content-Type" : "application/json"
//         },
//         body:JSON.stringify(userInfo)
//     })

// }



document.getElementById("signupbtn").addEventListener('click' ,function(){
        let userName = document.getElementById('username')
    let userNameValue = userName.value;
    userName.value = ''

    let eMail = document.getElementById('email')
    let eMailValue = eMail.value;
    eMail.value = '';

    let passWord = document.getElementById('password')
    let passWordValue = passWord.value
    passWord.value = ''


    let userInfo = {
        profileName:userNameValue,
        email:eMailValue,
        password:passWordValue
    }


    fetch("https://serverman-rh0k.onrender.com/signup",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(userInfo)
    })
})






document.getElementById("signinbtn").addEventListener("click", async function () {
        document.querySelector(".loading").style.display = "flex";
    document.querySelector(".login-container").style.display = "none";
    let userName = document.getElementById("username");
    let userNameValue = userName.value;
    userName.value = "";

    let eMail = document.getElementById("email");
    let eMailValue = eMail.value;
    eMail.value = "";

    let passWord = document.getElementById("password");
    let passWordValue = passWord.value;
    passWord.value = "";

    let userInfo = {
        profileName: userNameValue,
        email: eMailValue,
        password: passWordValue
    };

    try{
    const res = await fetch("https://serverman-rh0k.onrender.com/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
    })

    const data = await res.json()
    // .then(res => res.json())
    // .then(data => {
        console.log(data);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        if (data.token) {
            console.log('he dey',data.token)
           localStorage.setItem("token", data.token);
           const tok = localStorage.getItem("token")
           console.log(tok)
           document.querySelector(".loading").style.display = "none"
            alert("Login successful!")
            window.location.href = "profile.html";
        } else {
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".login-container").style.display = "block";
            alert(data.message);
        }
    }catch(err){
            console.error(err)
            document.querySelector(".loading").style.display = "none";
        document.querySelector(".login-container").style.display = "block";

        alert("Unable to connect to the server.");
        }
    // })
    // .catch(err => console.error(err));
});



