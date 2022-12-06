const labels = [0+" Sản phẩm",10+" Sản phẩm",20+" Sản phẩm",30+" Sản phẩm",40+" Sản phẩm",50+" Sản phẩm",60+" Sản phẩm",70+" Sản phẩm",80+" Sản phẩm",90+" Sản phẩm",100+" Sản phẩm"];
    let w10 = [];
    let w20 = [];
    let w30 = [];
    let w40 = [];
    let w50 = [];
    let w60 = [];
    let w70 = [];
    let w80 = [];
    let w90 = [];
    let w100 = [];
    let s10 = [];
    let s20 = [];
    let s30 = [];
    let s40 = [];
    let s50 = [];
    let s60 = [];
    let s70 = [];
    let s80 = [];
    let s90 = [];
    let s100 = [];
(async () => {
    
    const response = await fetch(
      "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json"
    );
    const data1 = await response.json();
    Object.keys(data1).forEach((key) => {
        const row = data1[key];
        for (let i = 1; i < data1.length; i++) {
            if (row) {
                if(row.luotXem == 10)w10.push(key) 
                    
                if(row.luotXem == 20)w20.push(key) 
                    
                if(row.luotXem == 30)w30.push(key) 
                    
                if(row.luotXem == 40)w40.push(key) 
                    
                if(row.luotXem == 50) w50.push(key) 
                   
                if(row.luotXem == 60)w60.push(key) 
                    
                if(row.luotXem == 70)w70.push(key) 
                    
                if(row.luotXem == 80)w80.push(key) 
                    
                if(row.luotXem == 90)w90.push(key) 
                    
                if(row.luotXem >= 99)w100.push(key) 
                
                if(row.soLuong == 10)s10.push(key) 
                    
                if(row.soLuong == 20)s20.push(key) 
                    
                if(row.soLuong == 30)s30.push(key) 
                    
                if(row.soLuong == 40)s40.push(key) 
                    
                if(row.soLuong == 50)s50.push(key) 
                   
                if(row.soLuong == 60)s60.push(key) 
                    
                if(row.soLuong == 70)s70.push(key) 
                    
                if(row.soLuong == 80)s80.push(key) 
                    
                if(row.soLuong == 90)s90.push(key) 
                    
                if(row.soLuong >= 99)s100.push(key) 
            }
            return i++;
        }});
    const data = {
    labels: labels,
    datasets: [
        {
            label:'Lượt truy cập',
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: [0,w10.length,w20.length,w30.length,w40.length,w50.length,w60.length,w70.length,w80.length,w90.length,w100.length],
            // tension: 0.4,
        },
   
  
        {
            label:'Số lượng sản phẩm',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [0,s10.length,s20.length,s30.length,s40.length,s50.length,s60.length,s70.length,s80.length,s90.length,s100.length],
            // tension: 0.4,
        },
   
  
        // {
        //     label:'Lượt truy cập',
        //     backgroundColor: 'red',
        //     borderColor: 'red',
        //     data: [0,68,67,67,78,45,87,56,67,24],
        //     // tension: 0.4,
        // },
    ],
}
const config = {
    type:'line',
    data: data,
}
const canvas = document.getElementById('canvas');
const chart = new Chart(canvas, config);

})();