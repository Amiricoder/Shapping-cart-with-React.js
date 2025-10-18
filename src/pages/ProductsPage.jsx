import { ImSearch } from "react-icons/im";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductProvider";
import styles from "./ProductsPage.module.css";
import { useState } from "react";
function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const serachHandler = () => {
    console.log("search");
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
        <div>sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;
