import { useEffect, useState } from "react";
import axios from "axios";
import { FormularioPais } from "./components/FormularioPais";
import { ContenedorPais } from "./components/ContenedorPais";

export const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [paisInfo, setPaisInfo] = useState([]);
  const [paisesEncontrados, setPaisesEncontrados] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
      const { data } = response;
      setPaisInfo(data);
    });
  }, []);

  useEffect(() => {

    if (busqueda) {
      const paisesCoincidentes = paisInfo
        .filter((pais) =>
          pais.name.common.toLowerCase().includes(busqueda.toLowerCase())
        );
      setPaisesEncontrados(paisesCoincidentes);
    }
    else {
      setPaisesEncontrados([]);
    }

    setPaisSeleccionado(null);

  }, [busqueda, paisInfo]);

  const handleClick = (pais) => {
    setPaisSeleccionado(pais);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    setPaisSeleccionado(null);
  };

  return (
    <div className="App">
      <FormularioPais busqueda={busqueda} handleChange={handleChange} />

      <ol className="App_paises">
        {paisesEncontrados.length > 0 ? (
          paisesEncontrados.map((pais) => (
            <ContenedorPais
              pais={pais}
              handleClick={handleClick}
              paisSeleccionado={paisSeleccionado}
              key={pais.cca3} />
          ))
        ) : (
          <li>No se encontraron países</li>
        )}
      </ol>
    </div>
  );
};
