var data = [
    { "id": "p01", "name": "Mitchell  O120CESB Auditorium", "name1": "2$", "name2": "sale 14%", "pic": "Images//Acoustic//acoutic1.png", "price": 43, "description": "", "guitar": "acoustic" },

    { "id": "p02", "name": "Rogue RA-090 Dreadnought", "name1": "", "name2": "", "pic": "../Images/Acoustic/RogueRA-090DreadnoughtAcousticGuitarSunburst.png", "price": 2.69, "description": "", "guitar": "acoustic" },

    { "id": "p03", "name": "TANGLEWOOD TWBB SFCE", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 256.08, "description": "", "guitar": "acoustic" },

    { "id": "p04", "name": "???", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 2.20, "description": "", "guitar": "acoustic" },

    { "id": "p05", "name": "???", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 1.76, "description": "", "guitar": "domestic" },

    { "id": "p06", "name": "?", "name1": "4.5$", "name2": "sale 20%", "pic": "../Images/Acoustic/acoutic1.png", "price": 3.6, "description": "", "guitar": "domestic" },

    { "id": "p07", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 2.73, "description": "", "guitar": "domestic" },

    { "id": "p08", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 2.2, "description": "", "guitar": "domestic" },

    { "id": "p09", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 1.72, "description": "", "guitar": "domestic" },

    { "id": "p10", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 0.97, "description": "", "guitar": "domestic" },

    { "id": "p11", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 0.97, "description": "", "guitar": "domestic" },

    { "id": "p12", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 0.97, "description": "", "guitar": "domestic" },

    { "id": "p13", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 0.97, "description": "", "guitar": "domestic" },

    { "id": "p14", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 0.97, "description": "", "guitar": "domestic" },

    { "id": "p15", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 0.97, "description": "", "guitar": "domestic" },

    { "id": "p16", "name": "?", "name1": "", "name2": "", "pic": "../Images/Acoustic/acoutic1.png", "price": 0.97, "description": "", "guitar": "domestic" },
];

function displayImage(items) {
    let s = ``;
    $.each(items, function (k, v) {
        s += `<div class="col-sm-4 col-md-4 col-lg-2 divImage">
        <div class="detailImage" data-id="${v.id}">
            <a href="product_${v.id}.html"><img src="img/${v.pic}" alt="" class="guitar"></a>
            <a href="product_${v.id}.html" style="text-decoration: none;"><h5>${v.name}</h5></a>
            <h5>Price: ${v.price}$ </h5>
            <a><del style="color:Gray;">${v.name1}</del></a>
            <a style="color:yellow; background-color:red">${v.name2}</a>
   
            <br><a data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-warning">Add to cart</a>
            </div>
        </div>` ;

    });
    $("#products").html(s);

}


//lap trinh su kien xem chi tiet san pham
$(".detailImage").click(function () {
    alert("detailImage");
    let id = $(this).data('id');
    alert("test + " + id);
    location.href = "product_" + id + ".html";
});

function showProduct(pid) {
    let products = data.filter(ele => ele.id == pid);
    let product = products[0];
    let x = `
      <div class="row">
          <div class="col-sm-md-10">
              <div><img src="img/${product.pic}" alt="" class="driedFruit"></div>
          </div>
          <div class="col-md-2">
            <h3>${product.name}</h3>
            <div class="stars">
                <form action="">
                    <input class="star star-5" id="star-5" type="radio" name="star"/>
                    <label class="star star-5" for="star-5"></label>
                    <input class="star star-4" id="star-4" type="radio" name="star"/>
                    <label class="star star-4" for="star-4"></label>
                    <input class="star star-3" id="star-3" type="radio" name="star"/>
                    <label class="star star-3" for="star-3"></label>
                    <input class="star star-2" id="star-2" type="radio" name="star"/>
                    <label class="star star-2" for="star-2"></label>
                    <input class="star star-1" id="star-1" type="radio" name="star"/>
                    <label class="star star-1" for="star-1"></label>
                </form>
            </div>
            <h4>Price:${product.price}$</h4>
          <table>
          <h5><tr><th>Transport:
             <input select="shipping place" placeholder="Enter address"></th></h5>
                <th><select name="shipping place">
                   <option value="">VietNam</option>
                   <option value="">India</option>
             </select></th></tr>
             <tr><th>Transport Fee:
                <select name="shipping place">
                   <option value="">VietNam 0$</option>
                   <option value="">India 1$</option>
             </select>
             </th></tr>
          </table><br>
          <a onclick="alert(${product})" data-name="${product.name}" data-price="${product.price}" class="add-to-cart btn btn-success">Add to cart</a>
          
          </div>
      </div>           
      `;
    $("#productDetail").html(x);
}

//call function to show all image
displayImage(data);

//event search
$("#formSearch").submit(function (e) {
    e.preventDefault();

    // lay noi dung cua the input
    let value = $("#search").val();
    let re = new RegExp(value, "ig");
    let subdata = data.filter(item => item.name.search(re) >= 0);
    displayImage(subdata);
})

$("input[type=checkbox]").click(function () {
    let guitars = $(".ck-guitar:checked").map(function () { return $(this).val() }).toArray().toString();

    let subdata = (guitars.length == 0) ? data : data.filter(item => guitars.search(item.guitar) >= 0);

    displayImage(subdata);
})
