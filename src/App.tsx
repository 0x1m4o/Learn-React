import "./App.css";
// import ListGroup from "./components/ListGroup";
// import ListGroupWithProps from "./components/ListGroupWithProps";
import Alert from "./components/Alert";
function App() {
  // let allCountry = ["Indonesia", "Japan", "United States", "Russia"];

  return (
    <div>
      {/* <ListGroup /> */}
      {/* <ListGroupWithProps
        title="ListGroupWithProps"
        allCountry={allCountry}
        onSelected={(item) => {
          console.log(item);
        }}
      /> */}
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
