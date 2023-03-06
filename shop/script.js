// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };
//it show all the elements
let golbalIteam;
function showAllProduct() {
  let items = document.getElementById("items");
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      golbalIteam = data;
      let newData = data.map((value) => {
        showallProdunct.classList.add("active");
        men.classList.remove("active");
        jewelary.classList.remove("active");
        electronics.classList.remove("active");
        womens.classList.remove("active");
        return `<div class="item" id="${value.id}">
      <img src="${value.image}" alt="Item" />
      <div class="product-title">
        <h2>${value.title}</h2>
      </div>
      <div class="inforamtion">
        <h1 id="price">Rs.${value.price}</h1>
        <h1 id="size">S,Z,L</h1>
      </div>
      <div class="color">
        <p>color</p>
      </div>
      <div class="rating">
        <p>Rating</p>

        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>

      <div class="btn">
        <button class="productAddBtn" onclick="AddBtnclick(${value.id})">Add To Cart</button>
      </div>
    </div>`;
      });
      items.innerHTML = newData.join("");
    })
    .catch((error) => {
      alert("Failed" + error);
    });
}
//Here its end
let showallProdunct = document.getElementById("all");
window.addEventListener("load", showAllProduct);
showallProdunct.addEventListener("click", showAllProduct);
//--------------------Search Start here
// let search_item = document.getElementById("searchItem");
// console.log(search_item);
// search_item.addEventListener("input", () => {
//   const serachBox = document.getElementById("searchItem").value.toUpperCase();
//   console.log(serachBox);
//   const productItem = document.querySelectorAll(".item");
//   console.log(productItem + "  productItem ");
//   const product = document.querySelectorAll(".product-title");
//   const pname = document.getElementsByTagName("h2");
//   // console.log(pname + "  pname ");
//   for (var i = 0; i < pname.length; i++) {
//     let match = product[i].getElementsByTagName("h2")[0];
//     if (match) {
//       let textValue = match.textContent || match.innerHTML;
//       if (textValue.toUpperCase().indexOf(serachBox) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// });
//--------------------Search End

//Category For men function start here
function menProduct() {
  console.log("clicked");
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let newData = data.map((value) => {
        men.classList.add("active");
        showallProdunct.classList.remove("active");
        jewelary.classList.remove("active");
        electronics.classList.remove("active");
        console.log(value.category);
        if (value.category == "men's clothing") {
          return `<div class="item">
      <img src="${value.image}" alt="Item" />
      <div class="product-title">
        <h2>${value.title}</h2>
      </div>
      <div class="inforamtion">
        <h1 id="price">Rs. 100</h1>
        <h1 id="size">S,Z,L</h1>
      </div>
      <div class="color">
        <p>color</p>
      </div>
      <div class="rating">
        <p>Rating</p>

        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>

      <div class="btn">
        <button>Add To Cart</button>
      </div>
    </div>`;
        }
      });

      items.innerHTML = newData.join("");
    })
    .catch((error) => {
      alert("Failed" + error);
    });
}
//------------------------men function end here
//------------------------mwomen function end here
function womenensProduct() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let newData = data.map((value) => {
        womens.classList.add("active");
        showallProdunct.classList.remove("active");
        jewelary.classList.remove("active");
        electronics.classList.remove("active");
        men.classList.remove("active");

        if (value.category == "women's clothing") {
          return `<div class="item">
      <img src="${value.image}" alt="Item" />
      <div class="product-title">
        <h2>${value.title}</h2>
      </div>
      <div class="inforamtion">
        <h1 id="price">Rs. 100</h1>
        <h1 id="size">S,Z,L</h1>
      </div>
      <div class="color">
        <p>color</p>
      </div>
      <div class="rating">
        <p>Rating</p>

        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>

      <div class="btn">
        <button>Add To Cart</button>
      </div>
    </div>`;
        }
      });

      items.innerHTML = newData.join("");
    })
    .catch((error) => {
      alert("Failed" + error);
    });
}
//------------------------women function end here
//------------------------jewellaryProduct function start here
function jewellaryProduct() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let newData = data.map((value) => {
        console.log("clicked womens");
        if (value.category == "jewelery") {
          jewelary.classList.add("active");
          showallProdunct.classList.remove("active");
          men.classList.remove("active");
          electronics.classList.remove("active");
          womens.classList.remove("active");
          return `<div class="item">
      <img src="${value.image}" alt="Item" />
      <div class="product-title">
        <h2>${value.title}</h2>
      </div>
      <div class="inforamtion">
        <h1 id="price">Rs. 100</h1>
        <h1 id="size">S,Z,L</h1>
      </div>
      <div class="color">
        <p>color</p>
      </div>
      <div class="rating">
        <p>Rating</p>

        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>

      <div class="btn">
        <button>Add To Cart</button>
      </div>
    </div>`;
        }
      });

      items.innerHTML = newData.join("");
    })
    .catch((error) => {
      alert("Failed" + error);
    });
}
//------------------------jewellaryProduct function send here
//------------------------eletronicProduct function start here
function eletronicProduct() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let newData = data.map((value) => {
        if (value.category == "electronics") {
          electronics.classList.add("active");
          showallProdunct.classList.remove("active");
          men.classList.remove("active");

          womens.classList.remove("active");
          jewelary.classList.remove("active");
          return `<div class="item">
    <img src="${value.image}" alt="Item" />
    <div class="product-title">
      <h2>${value.title}</h2>
    </div>
    <div class="inforamtion">
      <h1 id="price">Rs.${value.price}</h1>
      <h1 id="size">S,Z,L</h1>
    </div>
    <div class="color">
      <p>color</p>
    </div>
    <div class="rating">
      <p>Rating</p>

      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>

    <div class="btn">
      <button>Add To Cart</button>
    </div>
  </div>`;
        }
      });

      items.innerHTML = newData.join("");
    })
    .catch((error) => {
      alert("Failed" + error);
    });
}
//------------------------eletronicProduct function end here

let men = document.getElementById("mens");
men.addEventListener("click", menProduct);
let womens = document.getElementById("womens");
womens.addEventListener("click", womenensProduct);

let jewelary = document.getElementById("Jewellery");
jewelary.addEventListener("click", jewellaryProduct);

let electronics = document.getElementById("eletronic");
electronics.addEventListener("click", eletronicProduct);

// let AddBtn = document.querySelectorAll(".productAddBtn");
// for (var a = 0; a < AddBtn.length; a++) {
//   AddBtn[a].addEventListener("click", function () {
//     console.log("clicked" + AddBtn.length);
//     //do somethin
//     let idElement = AddBtn[a].id;
//     console.log(idElement);
//   });
// }
function AddBtnclick(id) {
  ProductAddd(id);
}

//================This function used for product for loacal Storage
let arr = [];
function ProductAddd(id) {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((value) => {
        if (value.id == id) {
          let obj = {
            id: id,
            title: value.title,
            price: value.price,
            image: value.image,
          };

          let temp = JSON.parse(localStorage.getItem("addToCart"));
          console.log(temp);
          if (temp) {
            arr = [...temp];
          }
          // arr.push(obj);
          arr.push(obj);
          localStorage.setItem("addToCart", JSON.stringify(arr));
          alert("Product is Added Successfully");
        }
      });
    })

    .catch((error) => {
      alert("Failed" + error);
    });
}
//====================This function for Searching the product
function searchFun() {
  let filter = document.getElementById("searchItem").value.toUpperCase();
  let productTitle = document.querySelectorAll("h2");

  for (let i = 0; i < productTitle.length; i++) {
    let pval = productTitle[i].innerHTML;
    // console.log("p val" + pval);
    // console.log("filter val" + filter);
    pval = pval.toUpperCase();

    if (pval.includes(filter)) {
      productTitle[i].parentNode.parentNode.style.display = "block";
      // console.log("yes Present");
    } else {
      productTitle[i].parentNode.parentNode.style.display = "none";
      // console.log("not presrnt");
      // console.log("filter " + filter);
      // console.log("pval " + pval);
    }
  }
}
