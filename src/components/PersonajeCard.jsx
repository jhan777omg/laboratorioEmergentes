function PersonajeCard({ personaje, resaltado, alPulsar }) {
  return (
    <div className={`card ${resaltado ? "fav" : ""}`}>
      <img src={personaje.image} alt={personaje.name} />
      <h4>{personaje.name}</h4>
      <p className={`estado estado-${personaje.status.toLowerCase()}`}>
        {personaje.status} - {personaje.species}
      </p>
      <button onClick={() => alPulsar(personaje)}>
        {resaltado ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
      </button>
    </div>
  );
}

export default PersonajeCard;