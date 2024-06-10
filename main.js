function setActive(element) {
  // Loại bỏ lớp "active" từ tất cả các li trong menu
  var menuItems = document.querySelectorAll(".tt");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }

  // Thêm lớp "active" vào li được nhấp vào
  element.classList.add("active");
}

// Sử dụng hàm setActive() khi một li được nhấp vào
document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".tt");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function (event) {
      setActive(event.currentTarget);
    });
  }

  // Sử dụng hàm setActive() khi một mục con được nhấp vào
  var subMenuItems = document.querySelectorAll(".dropdown li");
  for (var i = 0; i < subMenuItems.length; i++) {
    subMenuItems[i].addEventListener("click", function (event) {
      setActive(document.getElementById("product")); // Đặt lại lớp "active" cho mục "Sản phẩm"
    });
  }
});

const navs = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    navs.classList.add("sticky");
  } else {
    navs.classList.remove("sticky");
  }
});
const scrollToTopButton = document.getElementById("scrollToTopButton");
let scrolling = false;

// Hiển thị/nhấn nút cuộn lên đầu trang khi cần
window.onscroll = () => {
  if (document.documentElement.scrollTop > 500) {
    scrollToTopButton.style.bottom = "20px"; // Hiển thị nút
  } else {
    scrollToTopButton.style.bottom = "-40px"; // Ẩn nút ngoài khung nhìn
  }
};
// Khi người dùng nhấp vào nút, trang sẽ cuộn lên đầu
scrollToTopButton.addEventListener("click", () => {
  if (!scrolling) {
    scrolling = true;
    scrollToTop();
  }
});
// Cuộn lên đầu một cách mượt mà
function scrollToTop() {
  if (document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50); // Cuộn lên 20px mỗi lần
    setTimeout(scrollToTop, 10); // Gọi lại hàm sau 10ms
  } else {
    scrolling = false;
  }
}
// Get all buttons with the class "addToCartBtn"
const buttons = document.querySelectorAll("#toats");

// Attach click event to each button
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Update button text and other attributes
    button.innerHTML = `<div class="btn-conteiner" onclick='gh()'>
  <div class="btn-content" >
    <span class="btn-title">Xem giỏ hàng</span>
    <span class="icon-arrow">
      <svg
        width="66px"
        height="43px"
        viewBox="0 0 66 43"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="arrow"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <path
            id="arrow-icon-one"
            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
            fill="#FFFFFF"
          ></path>
          <path
            id="arrow-icon-two"
            d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
            fill="#FFFFFF"
          ></path>
          <path
            id="arrow-icon-three"
            d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>
    </span>
  </div>
</div>`;
    button.disabled = true;
  });
});

const ten = document.getElementById("name");
const sim = document.getElementById("sdt");
const text = document.getElementById("nd");
const nameeror = document.getElementById("name-error");
const sdteror = document.getElementById("sdt-error");
const texterror = document.getElementById("text-error");
const button = document.getElementById("subit");

button.addEventListener("click", function () {
  forma();
});

function forma() {
  var is = true;
  if (ten.value === "") {
    nameeror.innerHTML = "Nhập họ và tên";
  } else {
    nameeror.innerHTML = "";
    is = false;
  }
  if (sim.value === "") {
    sdteror.innerHTML = "Nhập số điện thoại";
  } else if (sim.value.length <= 9) {
    sdteror.innerHTML = "Sai ký tự số điện thoại";
  } else {
    sdteror.innerHTML = "";
  }

  if (text.value === "") {
    texterror.innerHTML = "Nhập nội dung cần tư vấn";
  } else {
    texterror.innerHTML = "";
  }
  if (!nameeror.innerHTML && !sdteror.innerHTML && !texterror.innerHTML) {
    showSuccess();
    ten.value = "";
    sim.value = "";
    text.value = "";
  }
}

function showSuccessToast() {
  toast({
    title: "Thành công!",
    message: "Đã thêm sản phẩm vào giỏ hàng",
    type: "success",
    duration: 1000,
  });
}
function toast({ title = "", message = "", type = "info", duration = 1000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;

    main.appendChild(toast);
  }
}
//
function showSuccess() {
  toast({
    message: "Form đã được gửi thành công",
    type: "success",
    duration: 5000,
  });
}
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;

    main.appendChild(toast);
  }
}
//

function gh() {
  var ghs = document.getElementById("than");
  ghs.style.display = "none";
  document.getElementById("gh").style.display = "block";
  document.getElementById("thongtin").style.display = "none";
}
function trangchu() {
  document.getElementById("than").style.display = "block";
  document.getElementById("thongtin").style.display = "none";
  document.getElementById("gh").style.display = "none";
}

function ttms() {
  document.getElementById("than").style.display = "block";
  document.getElementById("gh").style.display = "none";
}
function quaylai() {
  location.reload();
}
function thtt() {
  document.getElementById("gh").style.display = "none";
  document.getElementById("thongtin").style.display = "block";
  setTimeout(() => {
    document.getElementById("thongtin").style.opacity = 1;
  }, 1200);

  var activeTab = $(".tt.active");
  if (activeTab) {
    activeTab.classList.remove("active");
  }

  setTimeout(() => {
    document.querySelector(".loading").style.display = "block";
    document.getElementById("thongtin").style.opacity = 0.4;
  }, 100);
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
  }, 1000);
}
function muangay() {
  mua();
}
const productname = document.getElementById("product-name");
const producttp = document.getElementById("product-tp");
const productdc = document.getElementById("product-dc");
const productsdt = document.getElementById("product-sdt");
const tenloi = document.getElementById("ten-loi");
const dcloi = document.getElementById("dc-loi");
const tploi = document.getElementById("tp-loi");
const sdtloi = document.getElementById("sdt-loi");
const producttency = document.getElementById("product-tency");
const texts = document.getElementById("textt");
function mua() {
  var paymentOptions = document.getElementsByName("tt");
  var errorMessage = document.getElementById("errorMessage");
  var isSelected = false;

  for (var i = 0; i < paymentOptions.length; i++) {
    if (paymentOptions[i].checked) {
      isSelected = true;
      break;
    }
  }

  if (!isSelected) {
    errorMessage.innerHTML = "Vui lòng chọn một phương thức thanh toán.";
  } else {
    errorMessage.innerHTML = "";
  }
  if (productname.value === "") {
    tenloi.innerHTML = "Họ và tên là mục bắt buộc.";
    productname.style.borderColor = "red";
  } else {
    tenloi.innerHTML = "";
    productname.style.borderColor = "#ddd";
  }
  if (producttp.value === "") {
    tploi.innerHTML = "Tỉnh / Thành phố là mục bắt buộc.";
    producttp.style.borderColor = "red";
  } else {
    tploi.innerHTML = "";
    producttp.style.borderColor = "#ddd";
  }
  if (productdc.value === "") {
    dcloi.innerHTML = "Địa chỉ là mục bắt buộc.";
    productdc.style.borderColor = "red";
  } else {
    dcloi.innerHTML = "";
    productdc.style.borderColor = " #ddd";
  }
  if (productsdt.value === "") {
    sdtloi.innerHTML = "Số điện thoại là mục bắt buộc.";
    productsdt.style.borderColor = "red";
  } else {
    sdtloi.innerHTML = "";
    productsdt.style.borderColor = " #ddd";
  }
  if (
    !tenloi.innerHTML &&
    !tploi.innerHTML &&
    !dcloi.innerHTML &&
    !sdtloi.innerHTML &&
    !errorMessage.innerHTML
  ) {
    // productname.value = "";
    // productdc.value = "";
    // producttp.value = "";
    // productsdt.value = "";
    // producttency.value = "";
    // texts.value = "";
    // document.querySelector(".chitiet").style.display = "block";
    // document.getElementById("thongtin").style.display = "none";
    // var spp = document.querySelector(".dathang");
    // spp.addEventListener("click", () => {
    alert("Cảm ơn bạn đã mua hàng\nMua hàng thành công");
    location.reload();
    // });
  }
}
function hoteen() {
  if (productname.value === "") {
    tenloi.innerHTML = "Họ và tên là mục bắt buộc.";
    productname.style.borderColor = "red";
  } else {
    tenloi.innerHTML = "";
    productname.style.borderColor = "#ddd";
  }
}
function diachi() {
  if (productdc.value === "") {
    dcloi.innerHTML = "Địa chỉ là mục bắt buộc.";
    productdc.style.borderColor = "red";
  } else {
    dcloi.innerHTML = "";
    productdc.style.borderColor = " #ddd";
  }
}
function thanhpho() {
  if (producttp.value === "") {
    tploi.innerHTML = "Tỉnh / Thành phố là mục bắt buộc.";
    producttp.style.borderColor = "red";
  } else {
    tploi.innerHTML = "";
    producttp.style.borderColor = "#ddd";
  }
}
function dienthoai() {
  if (productsdt.value === "") {
    sdtloi.innerHTML = "Số điện thoại là mục bắt buộc.";
    productsdt.style.borderColor = "red";
  } else {
    sdtloi.innerHTML = "";
    productsdt.style.borderColor = " #ddd";
  }
}
//thêm sản phẩm
const cartItems = [];

function addToCart(itemName, itemPrice, itemImageSrc) {
  cartItems.push({
    name: itemName,
    price: itemPrice,
    img: itemImageSrc,
    quantity: 1,
  });
  displayCart();
}

function removeFromCart(itemIndex) {
  cartItems.splice(itemIndex, 1);
  displayCart();
}

function updateProductSubtotal(index, quantity) {
  const productSubtotal = document.querySelectorAll(".tong")[index];
  const productprice = document.querySelectorAll(".product-price")[index];
  const price = cartItems[index].price * quantity;
  const tong = cartItems[index].price;
  productSubtotal.innerHTML = `<p>${price.toLocaleString("vi-VN")}₫</p>`;
  productprice.innerHTML = `<p>${tong.toLocaleString("vi-VN")}₫</p>`;
  cartItems[index].quantity = quantity;
  return price;
}

function displayCartTotal() {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const quantity = cartItems[i].quantity;
    total += updateProductSubtotal(i, quantity);
  }
  total += 30000;
  const formattedTotal = total.toLocaleString("vi-VN");
  document.querySelectorAll(
    ".product-totals"
  ).textContent = ` ${formattedTotal}₫`;

  document.querySelector(".tong-h4").textContent = ` ${formattedTotal}₫`;
}

function displayCart() {
  const cartItemsList = document.querySelector("tbody");
  // const cartdh = document.querySelector(".cart1");
  if (cartItems.length === 0) {
    var tt = document.querySelector(".spp");
    tt.style.display = "none";
    var chua = document.querySelector(".chua-sp");
    chua.style.display = "block";
  } else {
    // let cart = "";
    let cartInfo = "";

    // let total = 0;
    var sp = document.querySelector(".spp");
    sp.style.display = "block";
    sp.style.display = "flex";
    var chuas = document.querySelector(".chua-sp");
    chuas.style.display = "none";
    for (let i = 0; i < cartItems.length; i++) {
      cartInfo += `
      <tr class="cart-item">
        <td>
          <div class="remote">
            <p data-item-index="${i}">x</p>
          </div>
        </td>
        <td class="product-thumbnail th">
          <img src="${cartItems[i].img}" alt="" />
        </td>
        <td class="product-name nk flex"> ${cartItems[i].name}
        <p class="product-price amount th none left " style="color: black;    margin-top: -20px;
        "></p>

        </td>
        <td class="product-price amount th center block">${cartItems[i].price}₫</td>
        <td class="quantity th">
          <button class="is-form minus" type="button">-</button>
          <input
            type="text"
            class="input-qty"
            step="1"
            min="0"
            max="10"
            value="1"
          />
          <button class="is-form plus" type="button">+</button>
        </td>
        <td class="product-subtotal amount tong right block">
          <p> ${cartItems[i].price}₫</p>
        </td>
        </tr>`;
    }

    let cart = "";
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price;

      cart += `
   <tr class="cart">
      <td id="tt-name">
        ${cartItems[i].name} <strong class="tt-quantity">x${
        cartItems[i].quantity
      }</strong>
      </td>
      <td> ${cartItems[i].price.toLocaleString("vi-VN")}₫</td>
    </tr>`;
    }

    total += 30000;
    // Cập nhật tổng tiền trong HTML
    const formattedTotal = total.toLocaleString("vi-VN");
    const totalPriceElement = document.getElementById("product-totals");
    totalPriceElement.textContent = ` ${formattedTotal}₫`;
    // Cập nhật nội dung giỏ hàng
    const cartdh = document.querySelector(".cart1");
    cartdh.innerHTML = cart;
    cartItemsList.innerHTML = cartInfo;
    // Add event listeners for the remove buttons
    const removeButtons = document.querySelectorAll(".remote p");
    for (let j = 0; j < removeButtons.length; j++) {
      removeButtons[j].addEventListener("click", function () {
        const itemIndex = this.dataset.itemIndex;
        removeFromCart(itemIndex);
      });
    }

    // Add event listeners for the plus and minus buttons
    const minusButtons = document.querySelectorAll(".minus");
    const plusButtons = document.querySelectorAll(".plus");
    for (let i = 0; i < cartItems.length; i++) {
      minusButtons[i].addEventListener("click", function () {
        const inputQty = this.nextElementSibling;
        let quantity = parseInt(inputQty.value);
        if (quantity > 1) {
          quantity--;
          inputQty.value = quantity;
          updateProductSubtotal(i, quantity);
          displayCartTotal();
        }
      });

      plusButtons[i].addEventListener("click", function () {
        const inputQty = this.previousElementSibling;
        let quantity = parseInt(inputQty.value);
        if (quantity < 10) {
          quantity++;
          inputQty.value = quantity;
          updateProductSubtotal(i, quantity);
          displayCartTotal();
        }
      });
    }
  }
  displayCartTotal();
}

// Xử lý sự kiện khi người dùng nhấn vào nút "Thêm vào giỏ hàng"
const addToCartButtons = document.getElementsByClassName("addToCartBtn");
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {
    var itemName = this.dataset.itemName;
    var itemPrice = parseInt(this.dataset.itemPrice);
    var itemImageSrc = this.dataset.itemimagesrc;
    addToCart(itemName, itemPrice, itemImageSrc);
  });
}
displayCart();
// Lấy các phần tử cần thao tác
var menu = document.getElementById("thoat");
var nav = document.querySelectorAll(".nav");
var li = document.getElementById("li");
menu.addEventListener("click", () => {
  nav.forEach((element) => {
    element.classList.toggle("block");
  });

  setTimeout(() => {
    nav.forEach((element) => {
      element.classList.remove("block");
    });
    setTimeout(() => {
      document.querySelector("body").style.overflow = "auto";
    }, 2000);
    // Sau khi menu hoàn thành, thực hiện click trên checkboxToggle
    const checkboxToggle = document.getElementById("checkbox_toggle");
    if (checkboxToggle) {
      checkboxToggle.click();
    }
  }, 1000); // Thời gian chờ sau khi click menu
});

const checkboxToggle = document.getElementById("checkbox_toggle");

checkboxToggle.addEventListener("click", () => {
  nav.forEach((element) => {
    element.classList.toggle("none");
  });
  // setTimeout(() => {
  //   document.querySelector("body").style.overflow = "hidden";
  // }, 2000);
  setTimeout(() => {
    nav.forEach((element) => {
      element.classList.remove("none");
    });
  }, 10000000); // Thời gian chờ sau khi click checkboxToggle
});
// Define a function to handle the click event on elements with class "pd"
// Define a function to handle the click event on elements with ID "li"
function handleLiClick() {
  nav.forEach((element) => {
    element.classList.toggle("block");
  });

  setTimeout(() => {
    // Code to remove "block" class from elements
    // Assuming 'nav' is an array of elements
    nav.forEach((element) => {
      element.classList.remove("block");
    });

    setTimeout(() => {
      document.querySelector("body").style.overflow = "auto";
    }, 2000);

    // Code to click on 'checkboxToggle' if it exists
    const checkboxToggle = document.getElementById("checkbox_toggle");
    if (checkboxToggle) {
      checkboxToggle.click();
    }
  }, 1000); // Wait time after clicking menu
}

// Get all elements with the ID "li" and add click event listener to each
var ulffffff = document.querySelectorAll("#li");
ulffffff.forEach((element) => {
  element.addEventListener("click", handleLiClick);
});

function drop() {
  var len = document.querySelector(".len");
  var dropp = document.querySelector(".dropp");
  var screenSize =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (screenSize < 1023) {
    if (dropp.style.display === "block") {
      dropp.style.display = "none ";
      len.innerHTML = `<i class="bi bi-chevron-down"></i>`;
    } else {
      dropp.style.display = "block";
      len.innerHTML = ` 
    <i class="bi bi-chevron-up"></i>
  `;
    }
  }
}
function handleLiClick() {
  nav.forEach((element) => {
    element.classList.toggle("block");
  });

  setTimeout(() => {
    // Code to remove "block" class from elements
    // Assuming 'nav' is an array of elements
    nav.forEach((element) => {
      element.classList.remove("block");
    });

    setTimeout(() => {
      document.querySelector("body").style.overflow = "auto";
    }, 2000);

    // Code to click on 'checkboxToggle' if it exists
    const checkboxToggle = document.getElementById("checkbox_toggle");
    if (checkboxToggle) {
      checkboxToggle.click();
    }
  }, 1000); // Wait time after clicking menu
}

// Get all elements with the ID "li" and add click event listener to each
var ul = document.querySelectorAll(".tt");
ul.forEach((element) => {
  element.addEventListener("click", handleLiClick);
});
