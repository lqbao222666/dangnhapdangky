var itemList={
    "paper01":{     "name":"Giấy in A4 Double A 70gsm - Thái Lan Chính Hãng (500 tờ)", 
                    "price":79000,
                    "photo":"images/sanpham/paper/giay-a4-double.jpg"},
    "paper02":{     "name":"Giấy in A4 Supreme ĐL70", 
                    "price":65000,
                    "photo":"images/sanpham/paper/Giay-in-A4-Supreme-DL70.webp"},
    "paper03":{     "name":"Giấy A4 IK Plus 70 gsm", 
                    "price":70000,
                    "photo":"images/sanpham/paper/giay-a4-ik-plus-70-gsm-6703.jpg"},
    "notebook01":{  "name":"NOTEBOOK - Tập Vở, Sổ Kẻ Ngang size A5", 
                    "price":15000,
                    "photo":"images/sanpham/notebook/tap-a5.jfif"},
    "notebook02":{  "name":"Tập Notebook A4 (200 trang)", 
                    "price":10000,
                    "photo":"images/sanpham/notebook/noteA4-200tr.jpg"},
    "notebook03":{  "name":"Tập sinh viên Campus Basic Notebook 120 trang 70gsm kẻ ngang dán gáy", 
                    "price":19000,
                    "photo":"images/sanpham/notebook/tap-campus.webp"},
    "pen01":{       "name":"Hộp 20 Bút Bi 0.5 mm Treeden - Thiên Long TL-079 - Mực Xanh", 
                    "price":64000,
                    "photo":"images/sanpham/pen/thienlongTL-pen.webp"},
    "pen02":{       "name":"Bút gel mực xanh/OT-GP004BU", 
                    "price":6000,
                    "photo":"images/sanpham/pen/OT004BU.webp"},
    "pen03":{       "name":"Bút Mực Nước Mực Đen/Đỏ/Xanh 0.5mm 3 Màu Tùy Chọn", 
                    "price":5000,
                    "photo":"images/sanpham/pen/but-muc-nuoc.jfif"},
    "pencil01":{    "name":"Bút chì gỗ Thiên Long GP-01", 
                    "price":4500,
                    "photo":"images/sanpham/pencil/TLpencil.webp"},
    "pencil02":{    "name":"Hộp 12 cây Bút chì gỗ có tẩy ClassMate 2B/4B/6B", 
                    "price":30000,
                    "photo":"images/sanpham/pencil/CMpencil.jpg"},
    "pencil03":{    "name":"Bút chì Marco đen độ cứng 7B", 
                    "price":6900,
                    "photo":"images/sanpham/pencil/but-chi-marco-7b.jpg"},
    "other01":{    "name":"Băng keo trong OPP Flexoffice BKT15/FO", 
                    "price":38700,
                    "photo":"images/sanpham/others/bang-keo-trong-opp-flexoffice.webp"},
    "other02":{    "name":"Kéo văn phòng S-008 (SO-180)", 
                    "price":11000,
                    "photo":"images/sanpham/others/keo-van-phong-so180.jpg"},
    "other03":{    "name":"Dao rọc giấy Deli 2031 (Dao nhỏ)",
                    "price":17000,
                    "photo":"images/sanpham/others/dao-roc-giay-deli.webp"},
};
// Thêm vào đơn hàng
function addCart(code) {
    var number = parseInt(document.getElementById(code).value);
    var name = itemList[code].name;
    if (number == 0) return;
    if (typeof localStorage[code] === "undefined") {
      window.localStorage.setItem(code, number);
    } else {
      var current = parseInt(window.localStorage.getItem(code, number));
      if (current + number > 100) {
        window.localStorage.setItem(code, 100);
        showToast(`Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm. Bạn đã đặt 100 sản phẩm của mặt hàng ${name}.`, "danger");
        return;
      } else {
        window.localStorage.setItem(code, current + number);
      }
    }
    showToast(`Đã cập nhật ${name} với số lượng là ${parseInt(window.localStorage.getItem(code))} vào giỏ hàng.`, "success");
}
// Mở trang Đơn hàng
function openCart(){    window.location.href="donhang.html";}

function showToast(message, type) {
    // Lấy phần tử toast
    const toastEl = document.getElementById("toast-message");
    const toastBody = toastEl.querySelector(".toast-body");
  
    // Thay đổi nội dung thông báo
    toastBody.textContent = message;
  
    // Thay đổi kiểu giao diện (success, danger,...)
    toastEl.classList.remove("text-bg-primary", "text-bg-success", "text-bg-danger");
    if (type === "success") {
      toastEl.classList.add("text-bg-success");
    } else if (type === "danger") {
      toastEl.classList.add("text-bg-danger");
    } else {
      toastEl.classList.add("text-bg-primary");
    }
  
    // Hiển thị toast
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
  
// hiện trang đơn hàng
function showCart(){
    var formatter=new Intl.NumberFormat('vi-vn', {style: 'currency', currency:'vnd'});
    var container=document.getElementById("cartDetail").getElementsByTagName("tbody")[0];
    container.innerHTML="";
    var sum=0;
    var total=0;
    for(var i=0; i<window.localStorage.length; i++){
        if(typeof itemList[localStorage.key(i)]==='undefined') continue;
        var tr=document.createElement("tr");
        var photocell=document.createElement("td");
        var namecell=document.createElement("td");
        var numbercell=document.createElement("td");
        var pricecell=document.createElement("td");
        var sumcell=document.createElement("td");
        var removecell=document.createElement("td");
        var removeLink=document.createElement("a");

        var item=itemList[localStorage.key(i)];
        var number=localStorage.getItem(localStorage.key(i));

        photocell.style.textAlign="left";
        photocell.innerHTML="<img src='"+item.photo+"' class='img-fluid rounded shadow h-100 mb-3' width='150px''/>";

        namecell.innerHTML=item.name;
        pricecell.innerHTML=formatter.format(item.price);
        pricecell.style.textAlign="left";

        numbercell.innerHTML=number;
        numbercell.style.textAlign="left";

        sum=number*item.price;
        sumcell.innerHTML=formatter.format(sum);
        sumcell.style.textAlign="left";

        removeLink.innerHTML="<button class='btn btn-danger'><i class='fa fa-trash text-light'></i></button>";
        removeLink.setAttribute("href", "#");
        removeLink.setAttribute("data-code", localStorage.key(i));
        removeLink.onclick=function(){removeCart(this.dataset.code);};
        removecell.style.textAlign="center";
        removecell.appendChild(removeLink);
        tr.appendChild(photocell);
        tr.appendChild(namecell);
        tr.appendChild(numbercell);
        tr.appendChild(pricecell);
        tr.appendChild(sumcell);
        tr.appendChild(removecell);
        container.appendChild(tr);
        total+=sum;
    }
    document.getElementById("bill_total").innerHTML=formatter.format(total);
}
//hàm xoá đơn hàng ra khỏi cart
function removeCart(code){
    if(typeof window.localStorage[code]!=="undefined"){
        window.localStorage.removeItem(code);
        document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML="";
        showCart();
    }
}
window.onstorage=()=>{ showCart();};

// đa ngôn ngữ
const translations = {
  //Tiếng Việt
    vi: {
        ItemList:"Danh Mục Sản Phẩm",
        Register:"Đăng Ký",
        Login:"Đăng Nhập",
        Title:"DANH MỤC SẢN PHẨM",
        Seemore:"Xem thêm",
        Detail:"Chi tiết",
        Amount:"Số lượng",
        Order:"Đặt Hàng",
        Paper:"Giấy in văn phòng - giấy photo chất lượng",
        Notebook:"Sổ ghi chép - Notebook",
        Pen:"Bút bi, bút mực các loại",
        Pencil:"Bút chì các loại",
        Other:"Băng keo - Dao - Kéo"
    },
  //Tiếng Anh
    en: {
        ItemList:"Item Category",
        Register:"Register",
        Login:"Login",
        Title:"ITEM CATEGORY",
        Seemore:"See more",
        Detail:"Detail",
        Amount:"Quantity",
        Order:"Order",
        Paper:"Office paper",
        Notebook:"Notebook",
        Pen:"Types of pens",
        Pencil:"Types of pencils",
        Other:"Tape - Knife - Scissors"
    },
  };
// Ngôn ngữ hiện tại là tiếng Việt
  let currentLang = "vi";
// Hàm thay đổi ngôn ngữ
function changeLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[currentLang][key]) {
        element.textContent = translations[currentLang][key];
      }
    });
}

  // Gán sự kiện thay đổi ngôn ngữ
document.getElementById("languageSelector")
.addEventListener("change", (event) => {
      changeLanguage(event.target.value);
});
  