import { useEffect, useState } from "react";
import "./ActiveCategory.css";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/filterSlice";

export default function CategoryList() {
  const [musicData, setMusicData] = useState([]);
  const [activeItem, setActiveItem] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("musicData.json")
      .then((response) => response.json())
      .then((data) => setMusicData(data));
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleChoiseCategory = (e) => {
    dispatch(setSelectedCategory(e.target.textContent));
  };

  return (
    <ul onClick={handleChoiseCategory}>
      {musicData.map((data, index) => (
        <li
          key={index}
          style={{ cursor: "pointer" }}
          className={activeItem === index ? "active" : ""}
          onClick={() => handleItemClick(index)}
        >
          <p>{data.category}</p>
        </li>
      ))}
    </ul>
  );
}
