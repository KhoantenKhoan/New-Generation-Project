var urlAPImember = 'http://localhost:3000/member';


var submit = document.querySelector('#sbmit');
// function checkMember(username, password) {
//         return username ==
// }
console.log(username);

const member = () => {
    axios.get(urlAPImember).then(res => {
        res.data.filter(data => {
            var username = document.querySelector('#username').value;
            var password = document.querySelector('#password').value;
            if (username == data.username && password == data.password) {
                alert('Đăng nhập thành công!');
                localStorage.setItem('member', username);
                document.location = '../../admin/index.html';
                return;
            } else {
                document.querySelector('.error-msg').innerHTML = 'Tài khoản hoặc mật khẩu không tồn tại !';
            }
        })
    }, err => {
        console.log(err);
    });
}

submit.addEventListener('click', () => {
    member();
})