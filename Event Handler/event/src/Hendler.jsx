import React, { useState, useEffect } from 'react';
import './App.css';

function Handler() {
  const [data, setData] = useState([]);
  const [cler, setCler] = useState(true);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {cler ? (
        <button onClick={() => setCler(!cler)} className="fetch-button">
          Get Post
        </button>
      ) : null}
      {!cler && (
        <div className="posts-container">
          {data.map((el) => (
            <div key={el.id} className="post">
              <h2 className="post-title">{el.title}</h2>
              <p className="post-body">{el.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Handler;
