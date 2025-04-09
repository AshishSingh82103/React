import styles from "./Items.module.css";
const Items = ({ foodItems }) => {
  // let {foodItems} = props;

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={`${styles["kg-span"]}`}>{foodItems}</span>
    </li>
  );
};

export default Items;
