import { ImSearch } from "react-icons/im";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductProvider";
import styles from "./ProductsPage.module.css";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import {
  createQueryObject,
  filterProducts,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
function ProductsPage() {
  const products = useProducts(); //all data

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({}); //filter and search

  const [searhParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
  };

  const categoryHandeler = (e) => {
    const tagName = e.target.tagName;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
            <ul onClick={categoryHandeler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's clothing</li>
              <li>Women's clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
