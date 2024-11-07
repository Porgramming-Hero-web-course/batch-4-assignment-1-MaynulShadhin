type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type UniqueShape = Circle | Rectangle;

const calculateShapeArea = (shape: UniqueShape): number => {
  if (shape.shape === "circle") {
    const circleShapeAreaResult = Math.PI * shape.radius * shape.radius;
    return parseFloat(circleShapeAreaResult.toFixed(2));
  } else if (shape.shape === "rectangle") {
    const RectangleShapeAreaResult = shape.width * shape.height;
    return parseFloat(RectangleShapeAreaResult.toFixed(2));
  }
  return 0;
};

// console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
// console.log(
//   calculateShapeArea({
//     shape: "rectangle",
//     width: 4,
//     height: 6,
//   })
// );
