const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
  return obj[key];
};

// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));
