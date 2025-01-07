import "./App.css";
import Counter from "./components/Count";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const buttonStyle = {
    backgroundColor: "linear-gradient(to right, #ff7e5f, #feb47b)",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: "'Roboto', sans-serif",
  };

  return (
    <div className="App" style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={(e) => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <Counter />

      <button
        style={buttonStyle}
        onClick={(e) => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      
    </div>
  );
};

export default App;
