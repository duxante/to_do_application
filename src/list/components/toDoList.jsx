import '../list.style.css';
import ToDoItem from './toDoItem';

const ToDoList = () => {
  return (
    <div className="toDoListHolder">
      <div className="toDoListMain">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  );
};

export default ToDoList;
