function getProductApi() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        // responseType: JSON,
    });
    promise.then(function (result) {
        renderProduct(result.data.content);
    });
    promise.catch(function (error) {
        console.log(error);
    });
}

window.onload = function () {
    getProductApi();
};

function renderProduct(arrProduct) {
    let html = "";
    for (let index = 0; index < arrProduct.length; index++) {
        var proD = arrProduct[index];
        html += `
            <div class="col col-6 col-lg-4 col-xl-4">
                <div class="item">
                    <div class="thumbnail">
                        <img src="${proD.image}" alt="" />
                    </div>
                    <div class="detail">
                        <h3>${proD.name}</h3>
                        <p>${proD.description}</p>
                    </div>
                </div>
                <div class="price">
                    <div class="col-6 buy">
                        <button class="btn">Buy now</button>
                    </div>
                    <div class="col-6 cost">
                        <p>${proD.price}$</p>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector("#item").innerHTML = html;
}
