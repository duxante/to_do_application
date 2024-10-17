import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './navigation.style.css';

const Navigation = () => {
  return (
    <div className="navigationHolder">
      <div className="navigationMain">
        <img src={logo} className="navigationLogo" alt="logo" />
        <div className="navigationList">
          <Link to={{ pathname: '/' }}>Početna</Link>
          <Link to={{ pathname: '/create' }}>Kreiraj task</Link>
          <div className="taskNumber">
            <Link to={{ pathname: '/tasks' }}>Lista taskova</Link>
            <span className="number">162</span>
          </div>
          <Link to={{ pathname: '/about' }}>O nama</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
