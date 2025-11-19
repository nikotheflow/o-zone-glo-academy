import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
    const getCartGoods = () => localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    renderCart(getCartGoods());

    const cartModal = document.querySelector(".cart");

    const openCart = () => cartModal.style.display = "flex";
    const closeCart = () => cartModal.style.display = "";

    const addItemToCart = (id) => {
        const cart = getCartGoods();
        const goods = JSON.parse(localStorage.getItem("goods"));
        cart.push(goods.find(goodsItem => goodsItem.id === id));
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const removeItemFromCart = (id) => {
        const cart = getCartGoods();
        const itemToRemoveIndex = cart.findIndex(goodsItem => goodsItem.id === id);
        cart.splice(itemToRemoveIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const cartBtn = document.getElementById("cart");
    cartBtn.addEventListener("click", openCart);

    const goodsWrapper = document.querySelector(".goods");
    goodsWrapper.addEventListener("click", (e) => {
        const addToCartButton = e.target.closest(".btn.btn-primary");
        if (addToCartButton) {
            const itemId = Number(addToCartButton.closest(".card").dataset.id);
            addItemToCart(itemId);
            renderCart(getCartGoods());
        }
    });

    const cartCloseBtn = cartModal.querySelector(".cart-close");
    cartCloseBtn.addEventListener("click", closeCart);

    const cartWrapper = cartModal.querySelector(".cart-wrapper");
    cartWrapper.addEventListener("click", (e) => {
        const removeFromCartButton = e.target.closest(".btn.btn-primary");
        if (removeFromCartButton) {
            const itemId = Number(removeFromCartButton.closest(".card").dataset.id);
            removeItemFromCart(itemId);
            renderCart(getCartGoods());
        }
    });

    const cartConfirmButton = cartModal.querySelector(".cart-confirm");
    cartConfirmButton.addEventListener("click", async () => {
        await postData(getCartGoods());

        const cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart(cart);
    });
};

export default cart;