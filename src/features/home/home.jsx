import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import './home.style.css';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div className="homeHolder">
      <div className="homeMain">
        <div className="homeTitle">
          <p>Što planiraš danas?</p>
          <p>Kreiraj svoj novi task!</p>
        </div>
        <Button
          redirect={() => handleNavigate(`/create`)}
          buttonText="Kreiraj task!"
        />
      </div>
    </div>
  );
};

export default Home;
