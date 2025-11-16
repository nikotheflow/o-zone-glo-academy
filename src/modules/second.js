import getData from "./getData";

const second = async () => {
    const cartBtn = document.getElementById("cart");

    console.log(await getData());
};

export default second;