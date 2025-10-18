import { ImSearch } from "react-icons/im";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductProvider";
import styles from "./ProductsPage.module.css";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const serachHandler = () => {
    console.log("search");
  };

  const categoryHandeler = (e) => {
    const tagName = e.target.tagName;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    console.log(category);
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
        <button onClick={serachHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
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
