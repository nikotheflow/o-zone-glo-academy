export const searchFilter = (goods, value) => goods
    .filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase())
);

export const categoryFilter = (goods, category) => goods
    .filter(goodsItem => goodsItem.category.toLowerCase().includes(category.toLowerCase())
);