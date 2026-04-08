import "./style.css";

import { Header } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { Footer } from "./components/footer.js";
import { About } from "./components/about.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="min-h-screen flex flex-col">

    <div class="header-hero bg-cover bg-center flex-grow">
      ${Header()}
      ${Hero()}
    </div>
      ${About()}

    ${Footer()}
  </div>
`;
