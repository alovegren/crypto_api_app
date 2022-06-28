import getDollarAmount from './getTotalValue.js';

test('providing BTC and a valid integer returns the correct value', () => {
  expect(getDollarAmount('BTC', '2')).toBeCloseTo(41442.68418705147);
});