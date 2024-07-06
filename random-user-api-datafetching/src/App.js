import { useEffect, useState } from "react";
import "./App.css";

const getuser = async () => {
  const response = await fetch("https://randomuser.me/api/", {
    method: "GET",
  });
  return response.json();
};

export default function App() {
  const [user, setuser] = useState(null);

  function handleclick(e) {
    e.preventDefault();
    getuser().then((user) => setuser(user));
  }

  useEffect(() => {
    getuser().then((user) => setuser(user));
  }, []);
  return (
    <>
      {user ? <Usercard user={user} handleclick={handleclick} /> : "Loading..."}
    </>
  );
}

function Usercard({ user, handleclick }) {
  return (
    <div className="container">
      <img src={user.results[0].picture.large} alt="User"></img>
      <div className="name">
        <h1>
          {user.results[0].name.title} {user.results[0].name.first}{" "}
          {user.results[0].name.last}
        </h1>
      </div>
      <div className="phone">
        <h3>{user.results[0].phone}</h3>
      </div>
      <div>
        <h3 className="email">{user.results[0].email}</h3>
      </div>
      <div className="restinfo">
        <span>
          <h3>{user.results[0].location.city}</h3>
        </span>
        <span>
          <h3>{user.results[0].location.country}</h3>
        </span>
        <span>
          <h3>{user.results[0].location.postcode}</h3>
        </span>
      </div>
      <br />
      <div className="btn">
        <button onClick={(e) => handleclick(e)}>Refresh</button>
      </div>
    </div>
  );
}
