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

export { shortenText, searchProducts, filterProducts };
