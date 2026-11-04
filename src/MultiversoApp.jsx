import { useCatalogoMultiverso } from "./hooks/usePersonajes";
import PersonajeList from "./components/PersonajeList";
import FavoritesPanel from "./components/FavoritesPanel";

function MultiversoApp() {
  const {
    catalogo,
    elegidos,
    enEspera,
    fallo,
    cambiarElegido,
    estaElegido,
  } = useCatalogoMultiverso();

  return (
    <div>
      <h1>Rick and Morty Universo</h1>

      {enEspera && <p className="mensaje">Cargando...</p>}
      {fallo && <p className="mensaje error">Error: {fallo}</p>}

      {!enEspera && !fallo && (
        <div className="layout">
          <PersonajeList
            catalogo={catalogo}
            estaElegido={estaElegido}
            alPulsar={cambiarElegido}
          />
          <FavoritesPanel elegidos={elegidos} alPulsar={cambiarElegido} />
        </div>
      )}
    </div>
  );
}

export default MultiversoApp;