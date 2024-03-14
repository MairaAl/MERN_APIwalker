import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [id, setId] = useState("");
  const [personData, setPersonData] = useState(null);
  const [error, setError] = useState(null);
  const [recurso, setRecurso] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://swapi.dev/api/${recurso}/${id}`
      );
      setPersonData(response.data);
      setError(null);
      navigate.push(`/${id}`);
    } catch (error) {
      setPersonData(null);
      setError("Estos no son los droides que está buscando");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/${recurso}/${id}`
        );
        setPersonData(response.data);
      } catch (error) {
        console.error("Error fetching person data:", error);
      }
    };

    fetchData();
  }, [id, recurso]);

  return (
    <div>
      <h1>API Walker</h1>
      <select
        onChange={(event) => {
          const selectedRecurso = event.target.value;
          setRecurso(selectedRecurso);
          console.log(selectedRecurso);
        }}
      >
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
      <p>Name: {personData ? personData.name : "-"}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idInput">Ingrese un ID:</label>
        <input
          type="text"
          id="idInput"
          value={id}
          onChange={handleChange}
          placeholder="Ingrese el ID"
        />
        <button type="submit">Buscar</button>
      </form>
      {error && (
        <div>
          <p>{error}</p>
          <img src="./Obi-Wan-Kenobi.png" alt="Error" />
        </div>
      )}
      <h2>Detalles de la persona con ID: {id}</h2>
      {personData ? (
        <div>
          <p>Name: {personData.name}</p>
          <p>Height: {personData.height}</p>
          <p>Gender: {personData.gender}</p>
          <p>Hair-color: {personData.hair_color}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
