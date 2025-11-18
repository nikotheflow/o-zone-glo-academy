export const searchFilter = (goods, value) => goods
    .filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase())
);