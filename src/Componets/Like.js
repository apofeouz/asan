import React,{useState,useEffect} from 'react';
import axios from "axios";
import data from './data';

function Like() {
  const [isDisplay, setDisplay] = React.useState(false);
  const displayAdd = () => setDisplay(!isDisplay);

  const [allCards, setAllCards] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    const apiUrl =
     {data};
    axios.get(apiUrl).then((resp) => {
      const allCards = resp.data;
      setAllCards(allCards);
      setLoading(false);
    });
  }, []);

  const likeButtonHandler = (id) => {
    setAllCards(
      allCards.map((item) =>
        item.id === id ? { ...item, liked: !item.likes } : item
      )
    );
  };

  return (
    <div className="app">
      <div>
        {loading
          ? "Loading..."
          : allCards.map(({ id, likes}) => (
              <div
                key={id}
                style={{
                  border: "1px solid black",
                  margin: "1rem",
                  padding: "1rem",
                }}
              >
               
                <div>Liked: {likes.toString()}</div>
               
                <button onClick={() => likeButtonHandler(id)}>
                  {likes ? "unlike me" : "like me"}
                </button>
              </div>
            ))}
      </div>
    </div>
  );
}

 export default Like;
