// CATEGORY
var urlAPICategory = 'http://localhost:3000/category';
var btnCategory = document.querySelector('.btn-category');
var btn_edit = document.querySelector('.btn-edit');
var bodyCategory = document.querySelector('.renderCategory');
var btnUpdate = document.querySelector('.btn-update');




const delcategory = (id) => {
    const vali = confirm("Bạn có muốn xóa k ?");
    if (vali == false) {
        return;
    }
    axios.delete(`${urlAPICategory}/${id}`)
        .then(resp => {
            alert("Xóa thành công");
        }).catch(error => {
            console.log(error);
        });
}

const editCategory = () => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    axios.get(`${urlAPICategory}/${id}`).then(res => {
        document.querySelector("#namecat").value = res.data.name;
        let radio1 = document.getElementById("option1");
        let radio2 = document.getElementById("option2");
        radio1.checked = true;
        console.log(radio1.checked);
        if (res.data.status == 1) {
            radio1.checked = true;
        }
        btnUpdate.addEventListener("click", updateCategory);

    }, err => {
        console.log(err);
    });
}
const getCategories = () => {
    axios.get(urlAPICategory)
        .then(response => {
            var count = 1;
            let renderHTML = '';
            response.data.map(data => {
                renderHTML += `
                    <tr data-id="${data.id}">
                    <th>${count++}</th>
                    <td>${data.name}</td>
                    <td>${data.status == 1 ? '<span class="btn btn-primary">Hiện</span>' : '<span class="btn btn-danger">Ẩn</span>'}</td>
                    <td>
                      <a href="../../admin/update-category.html?id=${data.id}"> <span class="btn btn-info btn-edit" data-id="${data.id}">Sửa</span></a> 
                        <span onclick="delcategory(${data.id})" class="btn btn-danger btn-del">Xóa</span>
                    </td> 
                </tr>`;
                bodyCategory.innerHTML = renderHTML;

            })
        }, err => {
            console.log(err);
        });
}

getCategories();
editCategory();

const addCategory = () => {
    var name = document.querySelector("input[name='name']").value.trim();
    var status = document.querySelectorAll("input[name='status']");
    for (var i = 0, length = status.length; i < length; i++) {
        if (status[i].checked) {
            sttvalue = status[i].value;
            break;
        }
    }
    axios.post(urlAPICategory, {
        name: name,
        status: sttvalue
    }).then(resp => {
        alert("Thêm thành công")
    }).catch(error => {
        console.log(error);
    });
}

const updateCategory = () => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    var name = document.querySelector("input[name='name']").value.trim();
    var status = document.querySelectorAll("input[name='status']");
    for (var i = 0, length = status.length; i < length; i++) {
        if (status[i].checked) {
            sttvalue = status[i].value;
            break;
        }
    }
    axios.put(`${urlAPICategory}/${id}`, {
        name: name,
        status: sttvalue
    }).then(resp => {
        alert("Cập nhật thành công")
    }).catch(error => {
        console.log(error);
    });
}
btnCategory.addEventListener("click", () => {
    addCategory();
})