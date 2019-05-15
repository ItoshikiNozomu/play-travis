import { add } from "../num";
describe("testing utils/num.js", () => {
  it("work properly", () => {
    expect(add(1, 2)).toBe(3);
  });
});
