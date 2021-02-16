import React from "react";

const Form = () => {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [entry, setentry] = React.useState([]);
  const submitForm = (event) => {
    event.preventDefault();
    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email,
        password,
      };
      setentry([...entry, newEntry]);
      console.log(entry);
      setemail("");
      setpassword("");
    } else {
      alert("Fill out all the fields");
    }
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
      <div>
        {entry.map((currElement) => {
          const {id,email,password}= currElement
          return (
            <div key={id}>
              <h1>{email}</h1>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
