import React, { useEffect, useState } from "react";
import "./Quotes.css";
import { Link } from "react-router-dom";
import logo from "./img/1.png";
import logo2 from "./img/2.png";

const Quotes = () => {
  const git =
    "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png";
  const img =
    "data:image/png;base64,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";
  const [Quotes, setQuotes] = useState("");
  const [author, setauthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((Quotes) => {
        setQuotes(Quotes.content);
        setauthor(Quotes.author);
        console.log(Quotes);
      });
  }, []);

  let change = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((Quotes) => {
        setQuotes(Quotes.content);
        setauthor(Quotes.author);
        console.log(Quotes);
      });
  };

  return (
    <>
      <div className="main3">
        <h1 className="head"> Quotes </h1>
        <div className="card3">
          <h1 className="icon">
            {" "}
            <i className="zmdi zmdi-quote"></i>
          </h1>
          <h2 className="icon2">
            {" "}
            <i className="zmdi zmdi-quote"></i>
          </h2>

          <h3 className="Quotes">{Quotes}</h3>
        </div>
        <h6 className="author">{author}</h6>

        <div className="mainbtn">
          <button className="btn" onClick={change}>
            <span class="notranslate">New Quotes</span>
          </button>
          <Link to="/">
            {" "}
            <button className="btn" onClick={change}>
              <span class="notranslate">New Gyaan</span>
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/ImMohitRathore" className="git">
          {" "}
          <img src={logo2} alt="" />{" "}
        </a>
      </div>
    </>
  );
};

export default Quotes;
