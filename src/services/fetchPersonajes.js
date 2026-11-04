const ENDPOINT_PERSONAJES = "https://rickandmortyapi.com/api/character";

export async function descargarCatalogo() {
  const peticion = await fetch(ENDPOINT_PERSONAJES);

  if (!peticion.ok) {
    throw new Error("No se pudieron cargar los personajes");
  }

  const contenido = await peticion.json();
  return contenido.results.slice(0, 8);
}