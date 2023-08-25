
import View from "./scripts/game-view";
import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game();
    const rootEl = document.querySelector(".game-board");
    new View(game, rootEl);
  });

