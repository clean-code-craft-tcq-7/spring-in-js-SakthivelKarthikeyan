export function computeStatistics(numbers) {
  if (!numbers.length) {
    return {
      average: NaN,
      min: NaN,
      max: NaN,
    };
  }
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const average = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { average, min, max };
}
