import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
function Sidebar({ setQuery }) {
  const categoryHandeler = (e) => {
    const tagName = e.target.tagName;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));
  };
  return (
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
  );
}

export default Sidebar;
