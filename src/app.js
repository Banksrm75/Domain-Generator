/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let domain = [];
  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        let currentDomain =
          pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com, ";
        domain += currentDomain;
      }
    }
  }
  document.querySelector(".domainGenerator").innerHTML = domain;
};
