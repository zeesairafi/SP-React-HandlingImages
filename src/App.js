import "./App.css";
import { useState } from "react";

import List from "./components/List";

// CRUD => Create / Retrieve / Update / Delete

// list (components + props)
// search bar (state + props)
// store (mobx)
// forms => Create + Update
// routers => Detail
// axios

const countries = [
  {
    // key: "value",
    id: 1,
    name: "US",
    image:
      "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg",
  },
  {
    id: 2,
    name: "Switzerland",
    image:
      "https://www.nolato.com/-/media/Images/Career/Switzerland/Switzerland?h=81.png0&w=1650&hash=BF0D45F7DF677E5A785236B388E02898",
  },
  {
    id: 3,
    name: "Italy",
    image:
      "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large.jpg",
  },
  {
    id: 4,
    name: "Russia",
    image: "image",
  },
];

const books = [
  {
    // key: "value",
    id: 1,
    name: "Six of Crows",
    image: "https://m.media-amazon.com/images/I/51X-uVznafL.jpg",
  },
  {
    id: 2,
    name: "Crime and Punishment",
    image: "https://images-na.ssl-images-amazon.com/images/I/81b6e-dc41L.jpg",
  },
  {
    id: 3,
    name: "1984",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504611957l/9577857._SX318_.jpg",
  },
];

function App() {
  const [counterState, setCounterState] = useState(0);
  const title = "Hello Ghada and Ali!";
  let counterVariable = counterState * 5;
  // counterVariable++
  // counterVariable = counterVariable + 1
  const increment = () => {
    // counterVariable++;
    setCounterState(counterState + 1);
    console.log(counterVariable);
  };
  const decrement = () => {
    // counterVariable--;
    setCounterState(counterState - 1);
    console.log(counterVariable);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={increment}>PLUS</button>
      <h3>Variable: {counterVariable}</h3>
      <h3>State: {counterState}</h3>
      <button onClick={decrement}>MINUS</button>
      <List data={books} title="Books" backgroundColor="books" />
      <List data={countries} title="Countries" backgroundColor="countries" />
    </div>
  );
}

export default App;
