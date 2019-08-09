const temperature = 12;
const raining=false

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

if (!raining) {
  console.log("And please leave your umbrella at home!");
}
