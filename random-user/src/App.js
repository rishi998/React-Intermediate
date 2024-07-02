import { useEffect, useState } from "react";
import "./App.css";

const getUser = async () => {
  const response = await fetch("https://randomuser.me/api/", {
    method: "GET",
  });
  return response.json();
};

export default function App() {
  const [user, setuser] = useState(null);

  useEffect(() => {
    getUser().then((user) => setuser(user));
  }, []);

  return <div>{user ? <Userinfo user={user} /> : <p>loading...</p>}</div>;
}

function Userinfo({ user }) {
  return (
    <div>
      <Userimg user={user} />
      <Usern user={user} />
      <Restinfo user={user} />
    </div>
  );
}

function Userimg({ user }) {
  return (
    <div>
      <img src={user.results[0].picture.large} alt="loading"></img>
    </div>
  );
}

function Usern({ user }) {
  return (
    <div>
      <h3>Hi, my name is</h3>
      <h2>
        {user.results[0].name.first} {user.results[0].name.last}
      </h2>
    </div>
  );
}

function Restinfo({ user }) {
  return (
    <div>
      <span>{user.results[0].email}</span>
      <span>{user.results[0].dob.date}</span>
      <span>{user.results[0].phone}</span>
      <span>{user.results[0].city}</span>
    </div>
  );
}
