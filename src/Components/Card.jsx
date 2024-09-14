import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    if (!favs.some(fav => fav.id === id)) {
      favs.push({ name, username, id });
      localStorage.setItem('favs', JSON.stringify(favs));
      alert('Added to favorites!');
    } else {
      alert('Already in favorites!');
    }
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt={`Dr. ${name}`} className="card-image" />
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
