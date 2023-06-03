export const FormularioPais = ({ busqueda, handleChange }) => {
  return (

    <div className="Formulario_pais">

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="pais">
          <strong>Buscar país:</strong>
        </label>
        <input
          autoFocus
          id="pais"
          type="text"
          role="searchbox"
          value={busqueda}
          onChange={handleChange}
        />
      </form>

      <h2>{busqueda}</h2>
      
    </div>
  );
};