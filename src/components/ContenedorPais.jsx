import { TarjetaPais } from "./TarjetaPais";

export const ContenedorPais = ({ pais, handleClick, paisSeleccionado }) => {
  return (
    <li className="Contenedor_pais">

      <div>
        <h2>{pais.name.common}</h2>
        <button onClick={() => handleClick(pais)}>Mostrar</button>
      </div>

      {paisSeleccionado === pais && (
        <TarjetaPais pais={pais} />
      )}
      <br />
    </li>);
};