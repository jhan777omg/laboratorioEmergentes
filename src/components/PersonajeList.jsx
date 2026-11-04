import PersonajeCard from "./PersonajeCard";

function PersonajeList({ catalogo, estaElegido, alPulsar }) {
  return (
    <div className="grid">
      {catalogo.map((ficha) => (
        <PersonajeCard
          key={ficha.id}
          personaje={ficha}
          resaltado={estaElegido(ficha.id)}
          alPulsar={alPulsar}
        />
      ))}
    </div>
  );
}

export default PersonajeList;