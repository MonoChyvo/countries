export const TarjetaPais = ({ pais }) => {
  return (
    <div className="Tarjeta_pais">
      <p>Capital: <strong>{pais.capital}</strong></p>
      <p>Población: {pais.population} habitantes.</p>
      <br />
      <h3>Idiomas:</h3>
      <br />
      
      <ul>
        {pais.languages ? (
          Object.keys(pais.languages).map((key) => (
            <li key={key}>
              {key}: <strong>{pais.languages[key]}</strong>
            </li>
          ))
        ) : (
          <li>No hay idiomas disponibles</li>
        )}

        <div style={{ fontSize: "8rem" }}>{pais.flag}</div>
      </ul>
    </div>
  );
};