const TOTAL_DAYS = 256;
const REPRODUCTION_CYCLE = 6;

const run = (fishes) => {
  const fishByDay = [];

  for (let i = -10; i < 300; i++) {
    fishByDay[i] = 0;
  }

  for (let i = 0; i < fishes.length; i++) {
    const lastReproduction = fishes[i] - REPRODUCTION_CYCLE + 1;

    if (fishByDay[lastReproduction] === undefined) {
      fishByDay[lastReproduction] = 0;
    }

    fishByDay[lastReproduction]++;
  }

  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const prevGenerationDay = day - REPRODUCTION_CYCLE;
    const prevGenerationAmount = fishByDay[prevGenerationDay];
    let newBornDay = day + 2;

    fishByDay[newBornDay] = prevGenerationAmount * (day <= REPRODUCTION_CYCLE ? 1 : 2);
  }

  console.log(
    "Result -",
    fishByDay.reduce((a, b) => a + b)
  );
  console.log("Expected", "26984457539");
};

const getTotalFromPrevGenerations = (data, day) => {
  if (day <= 0 - REPRODUCTION_CYCLE) {
    return 0;
  }

  let result = data[day];

  result += getTotalFromPrevGenerations(data, day - REPRODUCTION_CYCLE);

  return result;
};

// run([
//   3, 5, 1, 5, 3, 2, 1, 3, 4, 2, 5, 1, 3, 3, 2, 5, 1, 3, 1, 5, 5, 1, 1, 1, 2, 4, 1, 4, 5, 2, 1, 2, 4, 3, 1, 2, 3, 4, 3, 4, 4, 5, 1, 1, 1, 1, 5, 5, 3, 4, 4, 4, 5,
//   3, 4, 1, 4, 3, 3, 2, 1, 1, 3, 3, 3, 2, 1, 3, 5, 2, 3, 4, 2, 5, 4, 5, 4, 4, 2, 2, 3, 3, 3, 3, 5, 4, 2, 3, 1, 2, 1, 1, 2, 2, 5, 1, 1, 4, 1, 5, 3, 2, 1, 4, 1, 5,
//   1, 4, 5, 2, 1, 1, 1, 4, 5, 4, 2, 4, 5, 4, 2, 4, 4, 1, 1, 2, 2, 1, 1, 2, 3, 3, 2, 5, 2, 1, 1, 2, 1, 1, 1, 3, 2, 3, 1, 5, 4, 5, 3, 3, 2, 1, 1, 1, 3, 5, 1, 1, 4,
//   4, 5, 4, 3, 3, 3, 3, 2, 4, 5, 2, 1, 1, 1, 4, 2, 4, 2, 2, 5, 5, 5, 4, 1, 1, 5, 1, 5, 2, 1, 3, 3, 2, 5, 2, 1, 2, 4, 3, 3, 1, 5, 4, 1, 1, 1, 4, 2, 5, 5, 4, 4, 3,
//   4, 3, 1, 5, 5, 2, 5, 4, 2, 3, 4, 1, 1, 4, 4, 3, 4, 1, 3, 4, 1, 1, 4, 3, 2, 2, 5, 3, 1, 4, 4, 4, 1, 3, 4, 3, 1, 5, 3, 3, 5, 5, 4, 4, 1, 2, 4, 2, 2, 3, 1, 1, 4,
//   5, 3, 1, 1, 1, 1, 3, 5, 4, 1, 1, 2, 1, 1, 2, 1, 2, 3, 1, 1, 3, 2, 2, 5, 5, 1, 5, 5, 1, 4, 4, 3, 5, 4, 4,
// ]);

run([3, 4, 3, 1, 2]);
