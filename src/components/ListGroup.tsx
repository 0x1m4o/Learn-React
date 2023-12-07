// import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let allCountry = ["Indonesia", "Japan", "United States", "Russia"];
  //   allCountry = [];
  /**
    const getMessage = () => {
        // return allCountry.length === 0 ? <p>No Items Found</p> : null;
        // OR 
        // return allCountry.length === 0 && <p>No Items Found</p>;
    };
  **/

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event.target);
  //   };

  //   const handleSelectedIndex = (selectedIndex: any) => {
  //     setSelectedIndex(selectedIndex);
  //   };

  return (
    <>
      <h1>Title</h1>
      {/* {getMessage()} */}

      {allCountry.length !== 0 ? (
        <ul className="list-group">
          {allCountry.map((country, index) => (
            <li
              key={country}
              //   onClick={handleClick}
              //--------------------------------------------------------
              //   onClick={() => handleSelectedIndex(index)}
              //   OR
              onClick={() => {
                setSelectedIndex(index);
              }}
              className={
                selectedIndex == index
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {country}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Items Found</p>
      )}
    </>
  );
}

export default ListGroup;
