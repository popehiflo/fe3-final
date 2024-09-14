import { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const [favs, setFavs] = useState([]);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  const clearFavs = () => {
    localStorage.removeItem('favs');
    setFavs([]);
  };

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <button onClick={clearFavs}>Clear all favs</button>
      <div className="card-grid">
        {favs.map(fav => (
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
