const raisinAlarm = function (cookie) {
  // Put your solution here
  // Loop through the cookie and check if the index contains a raisin
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
