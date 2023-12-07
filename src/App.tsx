import "./App.css";
// import ListGroup from "./components/ListGroup";
import ListGroupWithProps from "./components/ListGroupWithProps";

function App() {
  let allCountry = ["Indonesia", "Japan", "United States", "Russia"];

  return (
    <div>
      {/* <ListGroup /> */}
      <ListGroupWithProps
        title="ListGroupWithProps"
        allCountry={allCountry}
        onSelected={(item) => {
          console.log(item);
        }}
      />
    </div>
  );
}

export default App;
