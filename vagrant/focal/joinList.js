function joinList(arr) {
  if (arr === []) {
    console.log("Empty array!");
  }
  let myStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      myStr += arr[i] + ".";
    } else {
      myStr += arr[i] + ", ";
    }
  }
  return myStr;
}

console.log(joinList(["A", "Rabbit", "is running"]));
