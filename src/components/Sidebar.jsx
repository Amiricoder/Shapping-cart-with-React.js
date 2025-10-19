import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

import styles from "./Sidebar.module.css";

import { categories } from "../constants/list";

function Sidebar({ query, setQuery }) {
  const categoryHandeler = (e) => {
    const tagName = e.target.tagName;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandeler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
