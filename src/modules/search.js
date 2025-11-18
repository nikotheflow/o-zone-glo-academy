import getData from "./getData";
import {searchFilter} from "./filters";
import renderGoods from "./renderGoods";

const search = () => {
    const searchInput = document.querySelector(".search-wrapper_input");

    searchInput.addEventListener("input", async (e) => {
        const goods = await getData();
        const filteredGoods = searchFilter(goods, e.target.value);
        renderGoods(filteredGoods);
    });
};

export default search;