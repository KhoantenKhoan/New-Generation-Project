// CATEGORY
const urlAPICategory = 'https://assignment-931e5-default-rtdb.firebaseio.com/category.json';
const btnAddCategory = document.querySelector('.btn-category');
const btn_edit = document.querySelector('.btn-edit');
const bodyCategory = document.querySelector('.renderCategory');
const btnUpdateCategory = document.querySelector('.btn-update');
let isExistsCategory = true;


function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();

    var from = "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;";
    var to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd------";
    for (var i = 0; i < from.length; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    str = str.replace(/\s+/g, "-")

    return str;
}



const checkExistCategory = async(name, id = 0, ) => {
    await fetch(urlAPICategory)
        .then(response => response.json())
        .then((data) => {
            Object.keys(data).forEach((e) => {
                if (data[e].name === name && e != id) {
                    isExistsCategory = false;
                    console.log('Trùng' + isExistsCategory);
                }
            })

        })
}
const deleteCategory = async(id) => {
    const vali = confirm("Bạn có chắc muốn xóa danh mục này không ?");
    if (vali == false) {
        return;
    }
    await fetch(`https://assignment-931e5-default-rtdb.firebaseio.com/category/${id}.json`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            fetchCategory()
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

const getUpdateCategory = async() => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    await fetch(`https://assignment-931e5-default-rtdb.firebaseio.com/category/${id}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelector("#namecat").value = data.name;
            if (data.status == 1) {
                document.getElementById("stt1").checked = true;
            } else {
                document.getElementById("stt2").checked = true;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
const fetchCategory = async() => {
    await fetch(urlAPICategory)
        .then(response => response.json())
        .then((data) => {
            let count = 1;
            let renderHTML = '';
            Object.keys(data).map((e) => {
                renderHTML += `
                <tr data-id="${data[e].id}">
                <th>${count++}</th>
                <td>${data[e].name}</td>
                <td>${data[e].status == 1 ? '<span class="btn btn-primary">Hiện</span>' : '<span class="btn btn-danger">Ẩn</span>'}</td>
                <td>
                  <a href="../../admin/update-category.html?id=${e}"> <span class="btn btn-info btn-edit" data-id="${e}">Sửa</span></a> 
                    <span onclick="deleteCategory('${e}')" class="btn btn-danger btn-del">Xóa</span>
                </td> 
            </tr>`;
            })
            bodyCategory.innerHTML = renderHTML;
        })
}

fetchCategory();
getUpdateCategory();

const addCategory = async() => {
    let name = document.querySelector("input[name='name']").value.trim();
    let slug = string_to_slug(name);
    let status = document.querySelectorAll("input[name='stt']");
    for (let i = 0, length = status.length; i < length; i++) {
        if (status[i].checked) {
            status = status[i].value;
            break;
        }
    }
    let data = {
        name,
        slug,
        status
    }
    checkExistCategory(name)
        .then(() => {
            if (name === '' || status === '') {
                alert('Vui lòng nhập đầy đủ thông tin !');
            } else
            if (isExistsCategory) {
                fetch(urlAPICategory, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },

                        body: JSON.stringify(data),
                    })
                    .then(response => response.json())
                    .then(data => {
                        alert("Thêm thành công");
                        fetchCategory()
                        window.location.href = "./category.html"
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            } else {
                alert('Trùng tên rồi')
            }
        })
}

const updateCategory = async() => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    let name = document.querySelector("input[name='name']").value.trim();
    let slug = string_to_slug(name);
    let status = document.querySelectorAll("input[name='stt']");
    for (let i = 0, length = status.length; i < length; i++) {
        if (status[i].checked) {
            status = status[i].value;
            break;
        }
    }
    let data = {
        name,
        slug,
        status
    }
    checkExistCategory(name)
        .then(() => {
            if (name === '' || status === '') {
                alert('Vui lòng nhập đầy đủ thông tin !');
            } else if (isExistsCategory) {
                fetch(`https://assignment-931e5-default-rtdb.firebaseio.com/category/${id}.json`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                    .then(response => response.json())
                    .then(data => {
                        alert("Cập nhật thành công");
                        fetchCategory()
                        window.location.href = "./category.html"
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            } else {
                alert('Tên đã tồn tại')
            }
        })

}
if (btnAddCategory) {
    btnAddCategory.addEventListener("click", addCategory)
}

if (btnUpdateCategory) {
    btnUpdateCategory.addEventListener("click", updateCategory)
}