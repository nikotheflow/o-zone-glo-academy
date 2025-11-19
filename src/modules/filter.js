import getData from "./getData";
import {priceFilter} from "./filters";
import renderGoods from "./renderGoods";

const filter = () => {
    const minPriceInput = document.getElementById("min");
    const maxPriceInput = document.getElementById("max");

    minPriceInput.addEventListener("input", async () =>
        await updateGoods(getCurrentMinPrice(), genCurrentMaxPrice()));

    maxPriceInput.addEventListener("input", async () =>
        await updateGoods(getCurrentMinPrice(), genCurrentMaxPrice()));

    const getCurrentMinPrice = () => minPriceInput.value === '' ? 0 : Number(minPriceInput.value);
    const genCurrentMaxPrice = () => maxPriceInput.value === '' ? Infinity : Number(maxPriceInput.value);

    const updateGoods = async (min, max) => {
        const goods = await getData();
        const filteredGoods = priceFilter(goods, min, max);
        await renderGoods(filteredGoods);
    };
};

export default filter;