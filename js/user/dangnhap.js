    // Import the functions you need from the SDKs you need
    import { FireBaseService } from "../API/firebaseService.js";


    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
    import { getAuth, GoogleAuthProvider, signInWithRedirect , signInWithPopup, getRedirectResult} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDqfTMiqVcPLMS6lm9-aF0g0LMwrlR08vw",
        authDomain: "silkroad-project-28d19.firebaseapp.com",
        databaseURL: "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "silkroad-project-28d19",
        storageBucket: "silkroad-project-28d19.appspot.com",
        messagingSenderId: "815354831707",
        appId: "1:815354831707:web:1414380dab6fca2ae7307e",
        measurementId: "G-B6L0ZXREKV"
    };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    const Auth = new FireBaseService();
    const signIn = document.querySelector("#login");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    let erros = document.getElementById("erros");
    // let hashpassword = sha256(password);

 
function login() {
    signIn.addEventListener('click', function(e) {
        // alert("123")
        e.preventDefault();

        if (email.value == '' || password.value == '') {
            erros.innerHTML ='<span class="erro">Vui lòng điền đẩy đủ thông tin !</span>';
        } else if (password.value.length < 6 || password.value.length > 30) {
            erros.innerHTML ='<span class="erro">Mật khẩu vui lòng lớn hơn 6 kí tự !</span>';
        } else {
            loginMember(email,password);

        }
    })
}


async function loginMember(email, password) {
    // console.log(localStorage.getItem("checkLoginCart"));
    let response = await Auth.getAll('khachHang');
    let data = await response.json();
    Object.keys(data).forEach((e) => {
        if (email.value != data[e].email) {
<<<<<<< Updated upstream
            console.log(data);
            console.log(data[e].email);
            erros.innerHTML = '<span class="erro">Tài khoản không tồn tại !</span>';
        } else if (password.value != data[e].password) {
            console.log(data[e].password);
            erros.innerHTML = '<span class="erro">Mật khẩu không đúng !</span>';
=======
            erros.innerHTML = '<span class="erro">Tài khoản không tồn tại</span>';
            toastr.warning("Đăng nhập thành công")
            
        } else if (password.value != data[e].matKhau) {

            erros.innerHTML = '<span class="erro">Mật khẩu không đúng</span>';
>>>>>>> Stashed changes
        // } else if(sessionStorage.getItem("checkLoginCart") == '0') {
        //     sessionStorage.setItem("member", email);
        //     sessionStorage.removeItem("checkLoginCart");
        //     window.location.href = 'checkout.html';

        } else {
            erros.innerHTML =('đăng nhập thành công');
            sessionStorage.setItem("member", email);
            // window.location.href = 'index.html';
        }
    })
}

login()



