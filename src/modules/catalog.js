import getData from "./getData";
import {categoryFilter} from "./filters";
import renderGoods from "./renderGoods";

const catalog = () => {
    const catalogButtonWrapper = document.querySelector(".catalog-button");

    let isModalOpen = false;

    catalogButtonWrapper.addEventListener("click", async (e) => {
        if (e.target instanceof HTMLElement) {
            if (e.target.closest("button")) {
                isModalOpen = !isModalOpen;

                const catalogModal = e.currentTarget.querySelector(".catalog");
                catalogModal.style.display = isModalOpen ? "block" : "";
            } else if (e.target.closest("li")) {
                const goods = await getData();
                const filteredGoods = categoryFilter(goods, e.target.innerText);
                renderGoods(filteredGoods);
            }
        }
    });
};

export default catalog;