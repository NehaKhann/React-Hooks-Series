import React from "react";

const ArrayuseState = () => {
  var Biodata = [
    {
      id: 0,
      name: "A",
      depart: "Software",
    },
    {
      id: 1,
      name: "B",
      depart: "Chemical",
    },
    {
      id: 2,
      name: "C",
      depart: "Chemical",
    },
    {
      id: 3,
      name: "D",
      depart: "Chemical",
    },
  ];
  //   console.log(Biodata);

  const [biodata, setbiodata] = React.useState(Biodata);
  const clearData = () => {
    setbiodata([]);
  };
  const removeElement = (id) => {
    // alert(id);
    const newArray = biodata.filter((currentElement)=> currentElement.id!==id)
    setbiodata(newArray);
  };
  return (
    <>
      <h1>Students Record</h1>
      {biodata.map((currentValue) => {
        return (
          <h1 key={currentValue.id}>
            Name : {currentValue.name}
            Department: {currentValue.depart}
            <button onClick={() => removeElement(currentValue.id)}>
              Remove
            </button>
          </h1>
        );
      })}
      <button onClick={clearData}>Clear the data</button>
    </>
  );
};

export default ArrayuseState;
