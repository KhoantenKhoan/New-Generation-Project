import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, get, child, set, ref, update } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";

import { getAuth, createUserWithEmailAndPassword, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyC4GXkQEc30xR-2N2aM0IofhRMK79b4JVA",
    authDomain: "assignment-931e5.firebaseapp.com",
    databaseURL: "https://assignment-931e5-default-rtdb.firebaseio.com",
    projectId: "assignment-931e5",
    storageBucket: "assignment-931e5.appspot.com",
    messagingSenderId: "73890565211",
    appId: "1:73890565211:web:852ea29645e65782dd837e"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const database = getDatabase();
const urlMember = `https://assignment-931e5-default-rtdb.firebaseio.com/member.json`;
const auth = getAuth();

// REGISTER

const btnRegister = document.querySelector('#btnRegister');
if (btnRegister) {
    btnRegister.addEventListener('click', () => {
        let fullname = document.querySelector('#fullname').value.trim();
        let email = document.querySelector('#email').value.trim();
        let username = document.querySelector('#username').value.trim();
        let password = document.querySelector('#password').value.trim();
        // REGEX
        let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlock)\.com$/;
        let userregex = /^[a-zA-Z0-9]{5,}$/;
        if (fullname == '' || email == '' || username == '' || password == '') {
            alert('Vui lòng điền đầy đủ thông tin');
        } else
        if (!emailregex.test(email)) {
            alert('Vui lòng nhập đúng email...');
        } else
        if (!userregex.test(username)) {
            alert('Vui lòng nhập đúng tên tài khoản')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(username + ' ' + email + ' ' + email);
                    set(ref(database, 'member/' + user.uid), {
                        username,
                        fullname,
                        email
                    })
                    alert('Đăng ký thành công rồi !');
                })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
        }

    })
}

// SIGN IN
const btnSignIn = document.querySelector('#btnSignIn');

if (btnSignIn) {
    btnSignIn.addEventListener('click', () => {
        let email = document.querySelector('#email').value.trim();
        let password = document.querySelector('#password').value.trim();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                const timeNow = new Date();
                update(ref(database, 'member/' + user.uid), {
                    last_login: timeNow
                })

                alert('Đăng nhập thành công !')
                window.location.href = './index.html'
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
            });
    })
}
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Đã đăng nhập');
        const uid = user.uid;
    } else {
        console.log('Vui lòng đăng nhập');
    }
});


// CHECK USER


const logOut = document.querySelector('#logOut');
if (logOut) {
    logOut.addEventListener('click', () => {
        signOut(auth).then(() => {
            alert('Đã đăng xuất')
            window.location.href = './login.html'
        }).catch((error) => {
            // An error happened.
        });
    })
}

const google = document.querySelector('#google');
if (google) {
    google.addEventListener('click', () => {
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    })
}