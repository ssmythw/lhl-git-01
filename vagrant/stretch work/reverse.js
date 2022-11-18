const reverseWord = (str) => {
  let a = 0;
  let b = str.length;
  let arr = str.split("");
  while (a < b) {
    let temp = str[a];
    arr[a] = arr[b];
    arr[b] = temp;
    a++;
    b--;
  }
  return arr.join("");
};

let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  console.log(reverseWord(args[i]));
}
