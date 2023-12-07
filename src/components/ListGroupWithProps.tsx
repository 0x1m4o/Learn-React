import { useState } from "react";

interface ListGroupProps {
  allCountry: string[];
  title: string;
  onSelected: (item: string) => void;
}

function ListGroupWithProps({ allCountry, title, onSelected }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      {allCountry.length !== 0 ? (
        <ul className="list-group">
          {allCountry.map((country, index) => (
            <li
              key={country}
              onClick={() => {
                setSelectedIndex(index);
                onSelected(country);
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

export default ListGroupWithProps;
