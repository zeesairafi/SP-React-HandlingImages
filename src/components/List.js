import Card from "./Card";
import { useState } from "react";

function List({ data, title, backgroundColor }) {
  const [query, setQuery] = useState("");

  const filteredArray = data.filter((info) => {
    return info.name.toLowerCase().includes(query.toLowerCase());
  });
  const newArray = filteredArray.map((info) => {
    return <Card key={info.id} ghada={info} />;
  });
  return (
    <div className={backgroundColor}>
      <h1>{title}</h1>
      <input
        placeholder={`Search for ${title} by name`}
        onChange={(event) => setQuery(event.target.value)}
      />
      {newArray}
    </div>
  );
}

export default List;
