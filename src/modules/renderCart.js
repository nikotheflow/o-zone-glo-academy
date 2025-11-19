const renderGoods = (goods) => {
    const cartModal = document.querySelector(".cart");
    const cartWrapper = cartModal.querySelector(".cart-wrapper");

    cartWrapper.innerHTML = "";

    if (goods.length === 0) {
        cartWrapper.insertAdjacentHTML("beforeend", `            
            <div id="cart-empty">Ваша корзина пока пуста</div>
        `);
    } else {
        goods.forEach(goodsItem => {
            cartWrapper.insertAdjacentHTML("beforeend", `
                <div class="card" data-id="${goodsItem.id}">
                    ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top" style="background-image: url('${goodsItem.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${goodsItem.price} ₽</div>
                        <h5 class="card-title">${goodsItem.title}</h5>
                        <button class="btn btn-primary">Удалить</button>
                    </div>
                </div>
            `);
        });
    }

    const cartTotalSpan = cartModal.querySelector(".cart-total > span");
    cartTotalSpan.innerHTML = goods.reduce((sum, item) => sum + item.price, 0);

    const cartButton = document.getElementById("cart");
    const cartButtonCounter = cartButton.querySelector(".counter");
    cartButtonCounter.innerHTML = goods.length;
};

export default renderGoods;