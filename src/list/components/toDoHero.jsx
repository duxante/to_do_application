import '../list.style.css';

const ToDoHero = () => {
  return (
    <div className="toDoHeroHolder">
      <div className="toDoHeroMain">
        <div className="toDoHeroTitle">
          <h1>Gotovi taskovi</h1>
          <h2>Nastavi tako!</h2>
        </div>
        <div className="toDoHeroNumber">
          <span>0/3</span>
        </div>
      </div>
    </div>
  );
};

export default ToDoHero;
