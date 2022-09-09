class Polygon {
    constructor(sides) {
      this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
    let total = 0;
        for (let side of this.sides) {
        total += side
    }
    return total
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      let side0 = this.sides[0]
      let side1 = this.sides[1]
      let side2 = this.sides[2]
      return ((side0 + side1 > side2) && (side0 + side2 > side1) && (side1 + side2> side0))
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      let side0 = this.sides[0]
      let side1 = this.sides[1]
      let side2 = this.sides[2]
      let side3 = this.sides[3]
      return ((side0 === side1) && (side0 === side2) && (side0 === side3))
    }

    get area() {
      return this.sides[0] * this.sides[0]
    }
  }