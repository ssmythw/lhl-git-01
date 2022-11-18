const obfuscate = (password) => {
  //loop through the string
  password = password.split("");
  for (let i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      password.splice(i, 1, "4");
    }
    if (password[i] === "e") {
      password.splice(i, 1, "3");
    }
    if (password[i] === "o") {
      password.splice(i, 1, "0");
    }
    if (password[i] === "l") {
      password.splice(i, 1, "1");
    }
  }
  return password.join("");
};

args = process.argv.slice(2);
console.log(obfuscate(args[0]));

/*
Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/
