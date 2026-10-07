const { add, subtract } = require('./calculator');

describe('calculator', () => {
  test('add: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('add: handles negatives', () => {
    expect(add(-1, -4)).toBe(-5);
  });

  test('subtract: 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('subtract: handles negatives', () => {
    expect(subtract(-1, -4)).toBe(3);
  });
});