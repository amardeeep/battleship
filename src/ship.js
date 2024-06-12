function ship(length) {
  const lengthOfShip = length;
  let hits = 0;
  function hit() {
    hits++;
    return hits;
  }
  function isSunk() {
    if (hits == lengthOfShip) {
      return true;
    } else {
      return false;
    }
  }
  return {
    lengthOfShip,
    hit,
    isSunk,
  };
}
export { ship };
