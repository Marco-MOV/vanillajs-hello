/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El perro", "El vecino", "El Gabriel", "Un moro"];
  let action = ["Se comió", "Me pegó", "Me insultó", "Me rompió"];
  let what = ["Mi comida", "mi movil", "mis deberes", "mi Ps5"];
  let when = [
    "Ayer por la mañana",
    "Ayer por la noche",
    "en 5 años",
    "Cuando me case"
  ];

  let variable1 = Math.floor(Math.random() * who.length);
  let variable2 = Math.floor(Math.random() * action.length);
  let variable3 = Math.floor(Math.random() * what.length);
  let variable4 = Math.floor(Math.random() * when.length);

  document.getElementById("#excuse").innerHTML =
    who[variable1] +
    " " +
    action[variable2] +
    " " +
    what[variable3] +
    " " +
    when[variable4];
  console.log("Hello Rigo from the console!");
};
