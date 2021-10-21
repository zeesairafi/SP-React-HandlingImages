function Card(props) {
  const ghada = props.ghada;
  return (
    <div>
      <h2>{ghada.name}</h2>
      <img src={ghada.image} alt={ghada.name} />
    </div>
  );
}

export default Card;
