import React, { useState, useEffect } from "react";
import { getFriendSuggestions } from "../../../services/UserService";
import "./FriendSuggestion.css";
import Suggestion from "./Suggestion/Suggestion";

const FriendSuggestion = () => {
  const [Suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getFriendSuggestions()
      .then((res) => {
        if (res?.data) {
          setSuggestions(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return !!Suggestions ? (
    <div className="suggestion-container">
      <div className="sugg-header">
        <h2>Suggestions For You</h2>
      </div>
      <div className="suggestion-row">
        {Suggestions.map((s) => {
          return (
            <Suggestion
              name={s.name}
              picture={s.profilePicture}
              username={s.username}
            ></Suggestion>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default FriendSuggestion;
