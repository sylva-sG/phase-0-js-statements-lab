const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Check temperature
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// Check the time
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// Increment until it reaches 40
while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}