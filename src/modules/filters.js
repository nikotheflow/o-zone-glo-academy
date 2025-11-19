export const searchFilter = (goods, value) =>
    goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase())
);

export const categoryFilter = (goods, category) =>
    goods.filter(goodsItem => goodsItem.category.toLowerCase().includes(category.toLowerCase())
);

export const priceFilter = (goods, min = 0, max = Infinity) =>
    goods.filter((goodsItem) => min <= Number(goodsItem.price) && Number(goodsItem.price) <= max);

export const saleFilter = (goods, isSaleOnly = false) =>
    isSaleOnly ? goods.filter((goodsItem) => goodsItem.sale) : goods;