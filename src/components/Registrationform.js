import React from "react";

const Registrationform = () => {
  const [state, setstate] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [record, setrecord] = React.useState([]);
  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log(name,value)
    setstate({ ...state, [name]: value });
    console.log(state);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    const newData = {
      ...state,
      id: new Date().getTime().toString(),
    };
    setrecord([...record, newData]);
    setstate({
      fullname: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <form action="" onSubmit={formSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          autoComplete="off"
          name="fullname"
          id="fullname"
          value={state.fullname}
          onChange={handleInput}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          value={state.email}
          onChange={handleInput}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={state.password}
          onChange={handleInput}
        />

        <button type="submit">Register</button>
      </form>
      <div>
        {record.map((currElement) => {
          return (
            <div key={currElement.id}>
              <p>{currElement.fullname}</p>
              <p>{currElement.email}</p>
              <p>{currElement.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Registrationform;
