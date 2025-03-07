// Load dependencies and utility functions
import { singlePageApp  } from "../components/utils.js";

// Change favicon dynamically
document.querySelector("link[rel='icon']").href = "assets/THE-BIGGIES.png";

// fetch year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Single Page App
singlePageApp();

