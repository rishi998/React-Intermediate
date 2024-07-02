import { useState, useEffect } from "react";
import "./App.css";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  return response.json();
};

export default function App() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setdata(posts));
  }, []);

  return (
    <div>
      {data ? (
        data.map((data) => <Databox data={data} key={data.id} />)
      ) : (
        <p>NO data</p>
      )}
    </div>
  );
}

function Databox({ data }) {
  return (
    <div className="postcard">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
