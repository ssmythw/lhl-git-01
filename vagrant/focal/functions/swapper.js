const swapper = (key1, object1, key2, object2) => {
  //get the value of key1 from object 1 save in var
  const value1 = object1[key1];
  //get the value of key2 from object 2 save in var
  const value2 = object2[key2];
  //set object1[key1] to var2
  object1[key1] = value2;
  //set object2[key2] to var1
  object2[key2] = value1;

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
