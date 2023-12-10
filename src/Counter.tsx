import { useEffect, useState } from "react";
import Button from "./components/Button";
import { showToast } from "./util/Utils";
import { ToastContainer } from "react-toastify";

interface CounterHandlerProps {
  isIncrement: boolean;
}
const CounterApp = () => {
  const [count, setCounter] = useState(0);
  const [toastDisplayed, setToastDisplayed] = useState(false);

  const counterHandler = ({ isIncrement = true }: CounterHandlerProps) => {
    if (isIncrement) {
      setCounter(count + 1);
    } else {
      if (count != 0) {
        setCounter(count - 1);
      } else {
        setToastDisplayed(true);
      }
    }
  };

  useEffect(() => {
    console.log("The count is", count);
    if (toastDisplayed) {
      showToast({
        message: "Your counter is 0",
      });

      const timer = setTimeout(() => {
        setToastDisplayed(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [count, toastDisplayed]);

  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="container-fluid d-flex justify-content-center align-items-center mw-100 mh-100"
      >
        <ToastContainer />
        <Button
          color="primary"
          handler={() => counterHandler({ isIncrement: false })}
        >
          Decrement
        </Button>
        <h1 className="px-5">{count}</h1>
        <Button
          color="primary"
          handler={() => counterHandler({ isIncrement: true })}
        >
          Increment
        </Button>
      </div>
    </>
  );
};

export default CounterApp;
