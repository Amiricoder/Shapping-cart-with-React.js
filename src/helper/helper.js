const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" "); //small text
};

const searchProducts = (products, search) => {
  //for search
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  //for filter
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumProducts = (items) => {
  const itemsCounter = items.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter: itemsCounter, total: total };
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
};
