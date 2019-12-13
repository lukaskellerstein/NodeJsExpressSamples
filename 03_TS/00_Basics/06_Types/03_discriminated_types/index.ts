type Square = {
    //-----------------
    kind: "square"; // the discriminant
    //-----------------
    size: number;
}
type Rectangle = {
    //-----------------
    kind: "rectangle"; // the discriminant
    //-----------------
    width: number;
    height: number;
}
type Circle = {
    //-----------------
    kind: "circle"; // the discriminant
    //-----------------
    radius: number;
}


type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}
