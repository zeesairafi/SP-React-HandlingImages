import "./App.css";
import { useState } from "react";
import { observer } from "mobx-react";
import countryStore from "./stores/countryStore";
import List from "./components/List";
import Home from "./components/Home";
import Counter from "./components/Counter";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import CountryDetail from "./components/CountryDetail";

// CRUD => Create / Retrieve / Update / Delete

// list (components + props)
// search bar (state + props)
// store (mobx)
// forms => Create + Update
// routers => Detail
// axios

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
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/countries/:countrySlug">
          <CountryDetail />
        </Route>
        <Route path="/countries">
          <List
            data={countryStore.countries}
            title="Countries"
            backgroundColor="countries"
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default observer(App);
