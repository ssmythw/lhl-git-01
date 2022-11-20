const nameInverter = function (name) {
  if (name === "") return "";
  if (name === undefined) return Error;
  let output = name.split("");
  //check if the name doesn't containa space (single name)
  if (!output.includes(" ")) {
    return name;
    //the name contains at least 1 space
  } else {
    output = name.replace(/\s{2,}/g, " ").trim();
    output = output.split(" ");
    if (
      output.includes("Dr.") ||
      output.includes("Ms.") ||
      output.includes("Mrs.") ||
      output.includes("Mr.")
    ) {
      //single honorific case
      if (output.length === 1) {
        return "";
      }
      //if output length is two we know it is in the form honorific firname
      if (output.length === 2) {
        return output.join(" ");
      }
      //if the output length is greater than two we know it is in the form honorific firstname lastname
      const firstName = output[1];
      output[1] = output[2];
      output[2] = firstName;
      output[1] += ",";
      output = output.join(" ");
      return output;
    }
    const firstName = output[0];
    output[0] = output[1];
    output[1] = firstName;
    output = output.join(", ");
    return output;
  }
};

module.exports = nameInverter;
