import { vi } from "vitest";
import type { CatFact } from "../../services/testService";

export default function mockTestService() {
  vi.mock("../../services/testService.ts", async (importOriginal) => {
    const mod =
      await importOriginal<typeof import("../../services/testService")>();

    return {
      ...mod,
      getCatFact: vi.fn(
        () =>
          new Promise((x) =>
            setTimeout(x, 100, {
              fact: "Cats are cats",
              length: 57,
            } as CatFact),
          ),
      ),
    };
  });
}
