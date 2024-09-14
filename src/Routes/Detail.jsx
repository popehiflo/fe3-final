import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const [dentist, setDentist] = useState(null);
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data));
  }, [id]);

  if (!dentist) return <div>Loading...</div>;

  return (
    <div className={state.theme}>
      <h1>Detail Dentist id {id}</h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;
