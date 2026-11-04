function FavoritesPanel({ elegidos, alPulsar }) {
  return (
    <aside className="favoritos">
      <h3>Favoritos ({elegidos.length})</h3>
      <ul>
        {elegidos.map((ficha) => (
          <li key={ficha.id}>
            <img src={ficha.image} alt={ficha.name} />
            <span>{ficha.name}</span>
            <button onClick={() => alPulsar(ficha)}>Quitar</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FavoritesPanel;