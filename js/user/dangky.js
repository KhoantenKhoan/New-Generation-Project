    // Import the functions you need from the SDKs you need
    import { FireBaseService } from "../API/firebaseService.js";


    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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

    const Auth = new FireBaseService();    
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function register() {
    $(document).on('click', '#dangky', function(e) {
        e.preventDefault();
        let fullname = $('#fullname').val().trim();
        let email = $('#email').val().trim();
        let phone = $('#phone').val().trim();
        let password = $('#password').val().trim();
        let repassword = $('#repassword').val().trim();
        console.log(fullname);
        console.log(email);
        console.log(phone);
        console.log(password);
        // let hashpassword = sha256(password);
        if (fullname == '' || email == '' || password == '') {
            toastr.warning("Vui lòng điền đầy đủ thông tin")
        } else if (!validateEmail(email)) {
            toastr.warning("Email không đúng định dạng")
        }else if(phone == ''){
            toastr.warning( "Nhập số điện thoại");
        } else if (password.length < 6 || password.length > 30) {
            toastr.warning("Mật khẩu từ 6 tới 30 kí tự")
        } else if (!(password === repassword)) {
            toastr.warning("2 mật khẩu không khớp");
        } else {
            let data = {
                tenKH: fullname,
                password: password,
                email: email,
                sdt: phone,
                hinhAnh: " ",
                diaChi: " ",
                vaiTro: "0"
            }
            
            insertRegister(data);
            

        }
    })
}

async function insertRegister(data) {
    let response = await Auth.post('khachHang', data);
    toastr.success("Đăng ký thành công");
            window.location.href = 'login.html';
}

register();

