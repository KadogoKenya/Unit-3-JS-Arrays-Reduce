const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);

// OR using arrow function:
const totalBatteriesNew = batteryBatches.reduce((total, batch) => total + batch, 0);

