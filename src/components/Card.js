import { Link } from "react-router-dom";
import countryStore from "../stores/countryStore";
import CountryModalUpdate from "./CountryModalUpdate";

function Card(props) {
  const ghada = props.ghada;

  const handleDelete = () => {
    alert(`Delete ${ghada.name}`);
    countryStore.deleteCountry(ghada.id);
  };
  return (
    <div>
      <h2>{ghada.name}</h2>
      <CountryModalUpdate oldCountry={ghada} />
      <button onClick={handleDelete}>DELETE</button>
      <Link to={`/countries/${ghada.slug}`}>
        <img src={ghada.image} alt={ghada.name} />
      </Link>
    </div>
  );
}

export default Card;
