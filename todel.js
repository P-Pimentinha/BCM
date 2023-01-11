const state = {
  a: 1,
  b: 2,
  c: 3,
  tt: 1,
};

const xTest = {
  a: 4,
  b: 5,
  c: 6,
  d: 7,
};

const test = { ...state, ...xTest };

console.log(test);
