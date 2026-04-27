import "./style.css";

import { Header } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { Footer } from "./components/footer.js";
import { About } from "./components/about.js";
import { Contact } from "./components/contact.js";
import { Benefits } from "./components/benefits.js";
import { Game } from "./components/buyGame.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="min-h-screen flex flex-col">

    <div class="header-hero bg-cover bg-center grow">
      ${Header()}
      ${Hero()}
    </div>
    ${About()}
    ${Contact()}
    ${Benefits()}
    ${Game()}

    ${Footer()}
  </div>
`;
