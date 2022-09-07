function getDetailProductApi(id) {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
        method: "GET",
    });
    promise.then(function (result) {
        renderDetailProduct(result.data.content);
        renderRelatedProduct(result.data.content.relatedProducts);
    });
    promise.catch(function (error) {
        console.log(error);
    });
}

function renderDetailProduct(arrProduct) {
    let html = "";
    let html1 = "";
    html += `
        <div class="col-lg-5">
            <div class="detail-product__left">
                <div class="detail-product__thumb">
                    <img src="${arrProduct.image}" alt="">
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            <div class="detail-product__right">
                <div class="detail-product__content">
                    <h2 class="detail-product__name">${arrProduct.name}</h2>
                    <p class="detail-product__desc">${arrProduct.description}</p>
                    <p class="detail-product__a-size">Available size</p>
                    <div class="detail-product__size"></div>
                    <p class="detail-product__price">${arrProduct.price}$</p>
                    <div class="detail-product__quantity">
                        <button class="plus">+</button>
                        <span>1</span>
                        <button class="minus">-</button>
                    </div>
                    <button class="add-to-cart">Add to cart</button>
                </div>
            </div>
        </div>
    `;
    for (let items of arrProduct.size) {
        html1 += `
            <button class="btn btn-secondary">${items}</button>
        `;
    }
    document.querySelector("#detail").innerHTML = html;
    document.querySelector(".detail-product__size").innerHTML = html1;
}

function renderRelatedProduct (arrProduct) {
    let html = "";
    for (let item of arrProduct) {
        html += `
            <div class="col-lg-4 col-md-6">
                <div class="item">
                    <div class="thumbnail">
                    <a href="../views/detail.html?productid=${item.id}"><img src="${item.image}" alt="" /></a>
                    </div>
                    <div class="detail">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
                <div class="price">
                    <div class="col-6 buy">
                        <a href="../views/detail.html?productid=${item.id}" class="btn">Buy now</a>
                    </div>
                    <div class="col-6 cost">
                        <p>${item.price}$</p>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector("#item").innerHTML = html;
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    getDetailProductApi(myParam);
};
