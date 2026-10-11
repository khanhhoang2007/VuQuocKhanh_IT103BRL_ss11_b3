// Code minh họa
console.log("1. Function Declaration:");

showMessage();

function showMessage() {
  console.log("Smart Home dang hoat dong");
}

console.log("2. Function Expression:");

const showStatus = function () {
  console.log("Thiet bi dang bat");
};

showStatus();

console.log("3. Arrow Function:");

const calculateEnergy = (powerWatts, hours) => (powerWatts * hours) / 1000;

console.log(calculateEnergy(1500, 4));
