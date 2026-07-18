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






document.getElementById("signinbtn").addEventListener("click", function () {
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

    fetch("https://serverman-rh0k.onrender.com/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
console.log(authHeader);
console.log(token);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        if (data.token) {
            console.log('he dey',data.token)
           localStorage.setItem("token", data.token);
           const tok = localStorage.getItem("token")
           console.log(tok)
            alert("Login successful!")

                    fetch("https://serverman-rh0k.onrender.com/profile", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${tok}`
                }
            })
            .then(res => res.json())
            .then(profile => {
                console.log("Profile:", profile);
            })
            .catch(err => console.error(err));


        } else {
            alert(data.message);
        }
    })
    .catch(err => console.error(err));
});

    // const token = localStorage.getItem('token');


    //    fetch("http://localhost:3000/profile",{
    //     method: "GET",
    //     headers:{
    //         authorization: `Bearer ${token}`
    //     },
    // })

