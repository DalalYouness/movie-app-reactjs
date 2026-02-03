import "./Add.css";

const Add = () => {
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <input type="text" placeholder="Search for a movie" />
          <ul className="results"></ul>
        </div>
      </div>
    </div>
  );
};

export default Add;
