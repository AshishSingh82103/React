import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import HeadingMessage from "./components/HeadingMessage";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
      <HeadingMessage></HeadingMessage>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

// function App() {
//   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
//   // let foodItems = [];

//   // ternary operators
//   // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;

//   // Logical operators
//   let emptyMessage = foodItems.length === 0 && <h3>I am still hungry</h3>;

//   // if-else statement
//   // if(foodItems.length === 0) {
//   //   return <h3>I am still hungry</h3>
//   // }

//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}
//       {emptyMessage}
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

export default App;
