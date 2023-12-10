import "./App.css";
// import ListGroup from "./components/ListGroup";
// import ListGroupWithProps from "./components/ListGroupWithProps";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import CounterApp from "./Counter";

function App() {
  // let allCountry = ["Indonesia", "Japan", "United States", "Russia"];
  // function handleSubmit() {
  //   console.log("submit");
  // }

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
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {/* <Button color="secondary" handler={handleSubmit}>
        Click Me
      </Button> */}
      <CounterApp />
    </div>
  );
}

export default App;
