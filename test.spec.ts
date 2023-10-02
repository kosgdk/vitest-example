import {it, expect, vi} from "vitest";

it("should pass", () => {
    const foo = vi.fn();
    expect(foo).not.toHaveBeenCalled();
});
