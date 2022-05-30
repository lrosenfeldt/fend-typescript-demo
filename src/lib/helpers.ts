import { Gradient } from "../components/programCard";

export function pickGradient(index: number): Gradient {
  if (index % 3 === 0) {
    return "gradient-1";
  } else if (index % 3 === 1) {
    return "gradient-2";
  } else {
    return "gradient-3";
  }
}
