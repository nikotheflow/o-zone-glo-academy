import getData from "./getData";
import {priceFilter, saleFilter} from "./filters";
import renderGoods from "./renderGoods";

const filter = () => {
    const minPriceInput = document.getElementById("min");
    const maxPriceInput = document.getElementById("max");
    const discountCheckbox = document.getElementById("discount-checkbox");
    const discountCheckboxCheckmark = document.querySelector(".filter-check_checkmark");

    minPriceInput.addEventListener("input", async () => await updateGoods());
    maxPriceInput.addEventListener("input", async () => await updateGoods());

    discountCheckbox.addEventListener("change", async () => {
        discountCheckboxCheckmark.classList.toggle("checked", getCurrentIsOnSale());

        await updateGoods();
    });


    const updateGoods = async () => {
        const goods = await getData();
        const saleFilteredGoods = saleFilter(goods, getCurrentIsOnSale());
        const priceFilteredGoods = priceFilter(saleFilteredGoods, getCurrentMinPrice(), getCurrentMaxPrice());
        await renderGoods(priceFilteredGoods);
    };

    const getCurrentMinPrice = () => minPriceInput.value === '' ? 0 : Number(minPriceInput.value);
    const getCurrentMaxPrice = () => maxPriceInput.value === '' ? Infinity : Number(maxPriceInput.value);
    const getCurrentIsOnSale = () => discountCheckbox.checked;
};

export default filter;