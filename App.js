import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bio, setBio] = useState([
    { id: 0, name: "Bipin", rollNo: "07" },
    { id: 1, name: "Ankit", rollNo: "03" },
    { id: 2, name: "Kapil", rollNo: "08" },
    { id: 3, name: "Ansh", rollNo: "09" }
  ]);

  const rem = (id) => {
    const myNewArray = bio.filter((curElem) => {
      return curElem.id !== id;
    });

    setBio(myNewArray);
  };

  const clear = () => {
    setBio([]);
  };

  return (
    <>
      {bio.map((elem) => {
        return (
          <h2 id="h2">
            name:{elem.name} , Roll No :{elem.rollNo}
            <button id="remove" onClick={() => rem(elem.id)}>
              {" "}
              Remove
            </button>
          </h2>
        );
      })}
      <button id="clear" onClick={clear}>
        Clear
      </button>
    </>
  );
}
