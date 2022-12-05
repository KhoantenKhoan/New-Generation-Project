const labels = ['January','February','March','April','May','June','July','August','September','October'];
(async () => {
    let w20 = [{}];
    const response = await fetch(
      "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json"
    );
    const data1 = await response.json();
    Object.keys(data1).forEach((key) => {
        const row = data1[key];
        for (let i = 1; i < data1.length; i++) {
            if (row) {
                // console.log(row.luotXem = 99);
                // console.log(row.luotXem = 99);
                  if(row.luotXem == 20){
                          w20 += row; 
                          console.log(w20);
                        }
            }
             return i++;
        }
const data = {
    labels: labels,
    datasets: [
        {
            label:'Lượt xem',
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: [0,27,56,45,36,76,56,23,56,25],
            // tension: 0.4,
        },
   
  
        {
            label:'Số sản phẩm bán được',
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            data: [0,67,34,65,67,45,46,23,67,98],
            // tension: 0.4,
        },
   
  
        {
            label:'Lượt truy cập',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [0,68,67,67,78,45,87,56,67,24],
            // tension: 0.4,
        },
    ],
}
const config = {
    type:'line',
    data: data,
}
const canvas = document.getElementById('canvas');
const chart = new Chart(canvas, config);

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map((key) => {
    let number = Number(key);
    if(number>5){
    return number
    }
});
// console.log(result);
});
})();