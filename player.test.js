import { player } from "./player.js";
let player1 = player("real");
test("player type", () => {
  expect(player1.type).toBe("real");
});
