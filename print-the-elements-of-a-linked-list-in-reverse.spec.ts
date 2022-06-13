import { makeList } from "./helper-functions";
import { reversePrint } from "./print-the-elements-of-a-linked-list-in-reverse";

describe("reversePrint", () => {
  it("print list reverse", () => {
    console.log = jest.fn();

    let list = makeList([16, 12, 4, 2, 5]);
    reversePrint(list);
    const mock = (<jest.Mock>console.log).mock;

    expect(mock.calls).toHaveLength(5);

    expect(mock.calls[1][0]).toBe(2);
  });
});
