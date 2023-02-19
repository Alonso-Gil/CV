export const divideArray = (array: string[]) => {
    const newArray: string[][] = [];
  let subArray: string[] = [];

  array.forEach((string, indice) => {
    subArray.push(string);

    if (subArray.length === 10 || indice === array.length - 1) {
        newArray.push(subArray);
      subArray = [];
    }
  });

  return newArray;
}

export const splideConfig = (showSideMenu: boolean, direction: boolean) => ({
    type: "loop",
    autoWidth: true,
    drag: "free",
    gap: "1rem",
    arrows: false,
    pagination: false,
    width: 500,
    direction: direction ? "rtl" : "ltr",
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: true,
      speed: 0.4,
    },
    breakpoints: showSideMenu
      ? {
          2000: { width: 500 },
          1000: { width: 280 },
          620: { width: 200 },
          340: { width: 180 },
        }
      : {
          2000: { width: 500 },
          1000: { width: 280 },
          620: { width: 200 },
          340: { width: 180 },
        },
    })