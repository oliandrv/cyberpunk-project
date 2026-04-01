import './style.css'

import { Header } from './components/header.js'
import { Hero } from './components/hero.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="header-hero bg-cover bg-center min-h-screen"">
    ${Header()}
    ${Hero()}
  </div>
`