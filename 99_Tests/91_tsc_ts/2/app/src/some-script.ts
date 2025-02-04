import _ from "lodash";

export const someFce = (): string => {
  const aa = _.zip(["a", "b"], [1, 2], [true, false]);
  console.log(aa);
  return "aaa";
};

export const someVar = 55;
