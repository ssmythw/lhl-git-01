const chai = require("chai"); // 1
const assert = chai.assert;

const shouldBuyCar = require("../shouldBuyCar.js"); // 2

describe("#shouldBuyCar()", function () {
  // 3

  it("should return false if it's a hatchback", function () {
    const car = {
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when there are no details about the car", function () {
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true if the car color is pink", () => {
    const car = {
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false if the car is a hatchback and pink", () => {
    const car = {
      type: "hatchback",
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should retrun true when the car has 6 litres/100km and is under or equal to $5,000", () => {
    const car = {
      litresPer100km: 6,
      price: 3500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should retrun true when the car has 11 litres/100km and is under or equal to $5,000", () => {
    const car = {
      litresPer100km: 11,
      price: 3500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should retrun false when the car has 6 litres/100km and is over to $5,000", () => {
    const car = {
      litresPer100km: 6,
      price: 5500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should retrun false when the car has 11 litres/100km and is over to $5,000", () => {
    const car = {
      litresPer100km: 11,
      price: 5500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should retrun false when the car has 5 litres/100km and is under or equal to $5,000", () => {
    const car = {
      litresPer100km: 5,
      price: 3500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should retrun false when the car has 12 litres/100km and is under or equal to $5,000", () => {
    const car = {
      litresPer100km: 12,
      price: 3500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should retrun undefined when there is no car", () => {
    const shouldBuy = shouldBuyCar();
    assert.isUndefined(shouldBuy);
  });
});
