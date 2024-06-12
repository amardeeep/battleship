import expect from "expect";
import { ship } from "./ship.js";
test("ship length", () => {
  expect(ship(5).lengthOfShip).toBe(5);
});
test("hit", () => {
  expect(ship(7).hit()).toBe(1);
});
test("isSunk", () => {
  expect(ship(4).isSunk()).toBe(false);
});
