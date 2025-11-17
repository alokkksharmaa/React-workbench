export const PI = 3.14;
export const name = "Alok";


export class MathOps {
    static add(a, b) { return a + b; }
  static sub(a, b) { return a - b; }
  static mul(a, b) { return a * b; }
  static div(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero.");
    return a / b;
  }
  static rem(a, b) { return a % b; }
}
