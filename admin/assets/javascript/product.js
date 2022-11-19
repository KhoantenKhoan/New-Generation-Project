import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-storage.js";
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
const url = 'https://assignment-931e5-default-rtdb.firebaseio.com/products.json';

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

//Fetch Products
const render = document.querySelector('.renderProduct');
const fetchProduct = async() => {
    await fetch(url)
        .then(response => response.json())
        .then((data) => {
            let count = 1;
            let renderHTML = '';
            Object.keys(data).map((e) => {
                let tr = document.createElement('tr');
                let td = `
                <td>${count++}</td>
                <td>${data[e].name}</td>
                <td>
                    <img src="${data[e].image}" alt="" width="150px">
                </td>
                <td>${data[e].price}</td>
                <td>${data[e].status == 1 ? '<span class="btn btn-primary">Hiện</span>' : '<span class="btn btn-danger">Ẩn</span>'}</td>
                <td>
                <a href="../../admin/update-product.html?id=${e}"> <span class="btn btn-info">Sửa</span></a> 
                <span onclick="deleteProduct('${e}')" class="btn btn-danger btn-del">Xóa</span>
                </td>
                `
                tr.innerHTML = td;
                tr.querySelector('.btn-del').addEventListener('click', () => {
                    deleteProduct(e, tr)
                })
                render.appendChild(tr);
            })


        });
}


const deleteProduct = (id, tr) => {
    const vali = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không ?");
    if (vali == false) {
        return;
    }
    fetch(`https://assignment-931e5-default-rtdb.firebaseio.com/products/${id}.json`, {
            method: 'DELETE',
        })
        .then(() => {
            tr.remove();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
let isExistsProducts = true;

// Get Products
const checkExistProducts = async(id, name) => {
    await fetch(url)
        .then(response => response.json())
        .then((data) => {
            Object.keys(data).forEach((e) => {
                if (data[e].name === name && e != id) {
                    isExistsProducts = false;
                    console.log('Trùng' + isExistsProducts);
                }
            })

        })
}


fetchProduct();



const btnAddProduct = document.querySelector('.btn-add-product');
if (btnAddProduct) {
    btnAddProduct.addEventListener('click', () => {
        upLoadImage();
    })

}

// LOAD IMAGES

const loadImages = () => {
    let inputImage = document.querySelector('#image')
    if (inputImage) {
        let files = [];
        inputImage.onchange = (e) => {
            files = e.target.files;
            let reader = new FileReader();
            reader.onload = () => {
                document.getElementById('imgupload').src = reader.result;
            }
            reader.readAsDataURL(files[0]);
        }
    }

}
loadImages();
const upLoadImage = () => {
    let image = document.querySelector('#image').files[0];
    const file = image.name;
    const metadata = {
        contentType: image.type
    };
    const storage = getStorage();
    const ref = sRef(storage, "images/" + file);
    const upload = uploadBytesResumable(ref, image, metadata);
    upload
        .then(() => {
            getDownloadURL(upload.snapshot.ref).then(urlImage => {
                console.log(urlImage);
                addProduct(urlImage)
            })
        })
}
const addProduct = async(urlImage) => {
    // GET VALUE FORM
    let sttvalue;
    let name = document.querySelector("#nameproduct").value.trim();
    let category = document.querySelector("#category");
    let slug = string_to_slug(name);
    console.log(slug);
    let categoryText = category.options[category.selectedIndex].text;
    let price = document.querySelector("input[name='price']").value.trim();
    let description = document.querySelector("#description").value.trim();
    let status = document.querySelectorAll("input[name='stt']");
    let image = urlImage;
    let views = 0;
    let sold = 0;

    for (let i = 0, length = status.length; i < length; i++) {
        if (status[i].checked) {
            sttvalue = status[i].value;
            break;
        }
    }
    if (name == '' || price == '' || image == '' || description == '') {
        alert('Vui lòng điền đẩy đủ thông tin')
    } else {
        let data = {
            name,
            slug,
            category: categoryText,
            price,
            image,
            views,
            sold,
            description,
            status: sttvalue
        }
        await fetch(url, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                alert("Thêm thành công");
                fetchProduct();
                window.location.href = "./product.html"
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}


const getUpdateProduct = async() => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    await fetch(`https://assignment-931e5-default-rtdb.firebaseio.com/products/${id}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelector("#nameproduct").value = data.name;
            document.querySelector("#category").text = data.category;
            document.querySelector("#price").value = data.price;
            document.querySelector("#image").src = data.image;
            document.querySelector("#description").innerHTML = data.description;
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
getUpdateProduct();
const btnUpdateProduct = document.querySelector('.btn-update-prod');
if (btnUpdateProduct) {
    btnUpdateProduct.addEventListener('click', () => {
        updateLoadImage();
    })
}
const updateLoadImage = () => {
    let image = document.querySelector('#imagenew').files[0];
    if (image) {
        const file = image.name;
        const metadata = {
            contentType: image.type
        };
        const storage = getStorage();
        const ref = sRef(storage, "images/" + file);
        const upload = uploadBytesResumable(ref, image, metadata);
        upload
            .then(() => {
                getDownloadURL(upload.snapshot.ref).then(urlImage => {
                    console.log(urlImage);
                    updateProduct(urlImage);
                })
            })
    } else {
        updateProduct();
    }


}
const updateProduct = async(urlImage) => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    let sttvalue;
    let image;
    let name = document.querySelector("#nameproduct").value.trim();
    let slug = string_to_slug(name);
    let category = document.querySelector("#category");
    let categoryText = category.options[category.selectedIndex].text;
    let price = document.querySelector("input[name='price']").value.trim();
    let description = document.querySelector("#description").value.trim();
    let status = document.querySelectorAll("input[name='stt']");
    if (urlImage) {
        image = urlImage;
    } else {
        image = document.querySelector('#image').src;
    }

    for (let i = 0, length = status.length; i < length; i++) {
        if (status[i].checked) {
            sttvalue = status[i].value;
            break;
        }
    }

    checkExistProducts(id, name)
        .then(() => {
            if (isExistsProducts) {
                if (name == '' || price == '' || image == '' || description == '') {
                    alert('Vui lòng điền đẩy đủ thông tin')
                } else {
                    let data = {
                        name,
                        slug,
                        category: categoryText,
                        price,
                        image,
                        description,
                        status: sttvalue
                    }
                    fetch(`https://assignment-931e5-default-rtdb.firebaseio.com/products/${id}.json`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        })
                        .then(response => response.json())
                        .then(data => {
                            alert("Cập nhật thành công");
                            fetchProduct();
                            // window.location.href = "./product.html"
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }
            } else {
                alert('Tên sản phẩm này đã tồn tại')
            }
        })



}