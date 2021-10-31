import Card from "./Card";
import { useState } from "react";

import countryStore from "../stores/countryStore";
import CountryModal from "./CountryModal";
import { observer } from "mobx-react";

function List({ data, title, backgroundColor }) {
  const [query, setQuery] = useState("");

  const filteredArray = data.filter((info) => {
    return info.name.toLowerCase().includes(query.toLowerCase());
  });
  const newArray = filteredArray.map((info) => {
    return <Card key={info.id} ghada={info} />;
  });

  const handleDelete = () => {
    countryStore.deleteAllCountries();
  };

  const handleRetrieve = () => {
    countryStore.fetchCountries();
  };
  return (
    <div className={backgroundColor}>
      <h1>{title}</h1>
      <input
        placeholder={`Search for ${title} by name`}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={handleDelete}>DELETE ALL</button>
      <button onClick={handleRetrieve}>BRING BACK COUNTRIES</button>
      <CountryModal />
      {newArray}
    </div>
  );
}

export default observer(List);
