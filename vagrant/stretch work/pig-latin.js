const convertWorkd = (str) => {
  let arr = str.split("");
  let letter = arr.shift();
  arr.push(letter);
  arr.push("y");
  arr.push("a");
  arr = arr.join("");
  return arr;
};

let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  console.log(convertWorkd(args[i]));
}
