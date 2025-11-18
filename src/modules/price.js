import getData from "./getData";
import {priceFilter} from "./filters";
import renderGoods from "./renderGoods";

const price = () => {
    const minPriceInput = document.getElementById("min");
    const maxPriceInput = document.getElementById("max");

    minPriceInput.addEventListener("input", async (e) => await updateGoods(
        Number(e.currentTarget.value) ?? 0,
        Number(maxPriceInput.value) ? Number(maxPriceInput.value) : Infinity
    ));

    maxPriceInput.addEventListener("input", async (e) => await updateGoods(
        Number(minPriceInput.value) ? Number(maxPriceInput.value) : 0,
        Number(e.currentTarget.value) ?? Infinity,
    ));

    const updateGoods = async (min, max) => {
        const goods = await getData();
        const filteredGoods = priceFilter(goods, min, max);
        await renderGoods(filteredGoods);
    };
};

export default price;