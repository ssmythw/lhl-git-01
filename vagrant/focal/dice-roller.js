const rollDice = (timesToRoll) => {
  let str = `Rolled ${timesToRoll} dice: `;
  for (let i = 0; i < timesToRoll; i++) {
    if (i === timesToRoll - 1) {
      str += Math.floor(Math.random() * 6) + 1;
    } else {
      str += Math.floor(Math.random() * 6) + 1 + ", ";
    }
  }
  return str;
};

arg = process.argv.slice(2);
rollDice(arg[0]);
