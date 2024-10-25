import ToDoHero from './components/toDoHero';
import ToDoList from './components/toDoList';
import './list.style.css';

const List = () => {
  return (
    <div className="listHolder">
      <div className="listMain">
        <ToDoHero />
        <ToDoList />
      </div>
    </div>
  );
};

export default List;
