import { useState, useEffect } from "react";
import { descargarCatalogo } from "../services/fetchPersonajes";

export function useCatalogoMultiverso() {
  const [catalogo, setCatalogo] = useState([]);
  const [elegidos, setElegidos] = useState([]);
  const [enEspera, setEnEspera] = useState(true);
  const [fallo, setFallo] = useState(null);

  useEffect(() => {
    const iniciarCarga = async () => {
      try {
        const registros = await descargarCatalogo();
        setCatalogo(registros);
      } catch (excepcion) {
        setFallo(excepcion.message);
      } finally {
        setEnEspera(false);
      }
    };
    iniciarCarga();
  }, []);

  const cambiarElegido = (candidato) => {
    setElegidos((previo) =>
      previo.some((entrada) => entrada.id === candidato.id)
        ? previo.filter((entrada) => entrada.id !== candidato.id)
        : [...previo, candidato]
    );
  };

  const estaElegido = (idBuscado) =>
    elegidos.some((entrada) => entrada.id === idBuscado);

  return {
    catalogo,
    elegidos,
    enEspera,
    fallo,
    cambiarElegido,
    estaElegido,
  };
}