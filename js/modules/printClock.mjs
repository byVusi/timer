import { inputHours, inputMinutes, inputSeconds, clockHours, clockMinutes, clockSeconds } from "./getElements.mjs";
import { setFormat } from "./formatting.mjs";

export function printClock() {
  setFormat(inputHours, clockHours)
  setFormat(inputMinutes, clockMinutes)
  setFormat(inputSeconds, clockSeconds)
}