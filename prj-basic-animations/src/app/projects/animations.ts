import { state, style, trigger } from "@angular/core/src/animation/dsl";

export const markedState = trigger("markedState", [
  state(
    "default",
    style({
      border: "1px solid black",
      backgroundColor: "transparent",
    })
  ),
  state(
    "marked",
    style({
      border: "1px solid black",
      backgroundColor: "lightblue",
    })
  ),
]);
