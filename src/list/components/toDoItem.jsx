import checkmark1 from '../../assets/checkmark1.png';
import deleteItem from '../../assets/deleteItem.png';
import '../list.style.css';

const ToDoItem = () => {
  const isCompleted = false;
  return (
    <div className="toDoItemHolder">
      <div className="toDoItemMain">
        <div className="toDoItemLeft">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={34}
            stroke="#22C55E"
            fill={isCompleted ? '#22C55E' : '#ffff'}
          >
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          <p>Hello World!</p>
        </div>
        <div className="toDoItemRight">
          <img src={checkmark1} alt="checkmark" />
          <img src={deleteItem} alt="deleteItem" />
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
