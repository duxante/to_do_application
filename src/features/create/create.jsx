import { Input } from '@mui/base';
import Button from '../../components/button/button';
import './create.style.css';

const Create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.toDo.value);
  };

  return (
    <div className="createHolder">
      <div className="createMain">
        <p>Koji je tvoj sljedeći task?</p>
        <form className="createForm" onSubmit={handleSubmit}>
          <Input name="toDo" placeholder="Upiši..." />
          <Button buttonText="Spremi" />
        </form>
      </div>
    </div>
  );
};

export default Create;
