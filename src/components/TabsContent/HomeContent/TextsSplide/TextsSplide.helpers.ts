export const divideArray = (array: string[]) => {
  const newArray: string[][] = [];
  let subArray: string[] = [];

  array.forEach((string, index) => {
    subArray.push(string);

    if (subArray.length === 10 || index === array.length - 1) {
      newArray.push(subArray);
      subArray = [];
    }
  });

  return newArray;
};
