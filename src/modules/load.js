import getData from "./getData";
import renderGoods from "./renderGoods";

const load = async () => {
    const data = await getData();
    renderGoods(data);
};

export default load;