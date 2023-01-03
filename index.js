// B2': thuật toán  
function calArea (area){
    if (area === "A"){
        return 2;
    }
    if (area === "B"){
        return 1;
    }
    if (area === "C"){
        return 0.5;
    }
    return 0;
}

function calStudent (person) {
    if (person === "1" ) {
        return 2.5;
    }
    if (person === "2" ) {
        return 1.5;
    }
    if (person === "3" ) {
        return 1;
    }
}

document.getElementById("button").onclick = function() {
    //B1: gọi giá trị và gán biến  
    let sub1 = +document.getElementById("sub1").value;
    let sub2 = +document.getElementById("sub2").value;
    let sub3 = +document.getElementById("sub3").value;

    let point = +document.getElementById("point").value;
    let area = document.getElementById("area").value;
    let person = document.getElementById("person").value;

    let showPoint = document.getElementById("show");
    showPoint.style.display = "block";

    // B2: Thuật toán
    // tính điểm ưu tiên theo khu vực  

    let kqArea = calArea(area);   

    // tính điểm ưu tiên theo đối tượng 

    let kqStudent = calStudent(person);

    // Tổng điểm
    let totalPoint = sub1 + sub2 + sub3 + kqArea + kqStudent;

    if (totalPoint >= point && sub1 > 0 && sub2 > 0 && sub3 > 0) {
        showPoint.innerHTML = " Đậu .  Tổng điểm :  " + totalPoint;
    }  else {
        showPoint.innerHTML = " Rớt .  Tổng điểm :  " + totalPoint;
    }

}



// Bài 2 



document.getElementById("button2").onclick = function() {
    //B1: gọi giá trị và gán biến  
    let nameEL = document.getElementById("name").value;
    let kw = +document.getElementById("kw").value;

    console.log(nameEL);

    let showKw = document.getElementById("show2");
    showKw.style.display = "block";

    let totalKw;

    // B2: Thuật toán 
    // tạo function tính tiền điện 
    function calKw(kw) {
        if(kw < 50 ) {
            totalKw = 500 * kw ; 
        } else if ( kw >= 50 && kw < 100){
            totalKw = 500 * 50 +  ( 650 * (kw - 50));
        } else if ( kw >= 100 && kw < 200) {
            totalKw = (500 * 50) + (50 * 650) + ( kw - 100) * 850; 
        } else if ( kw >= 200 && kw < 350 ) {
            totalKw = (500 * 50) + (50 * 650) + (100 * 850) + (kw - 150) * 1100;
        } else {
            totalKw =  (500 * 50) + (50 * 650) + (100 * 850) + (150 * 1100 ) + (kw - 350 )* 1300  ;
        }
        return totalKw;
    };

    // B3: Xuất kq: 
    let kqTotal = calKw(kw);

    showKw.innerHTML = "Họ tên: " + nameEL + " ; " + " Tiền điện: " + kqTotal ;

}

