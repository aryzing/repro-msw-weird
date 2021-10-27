/**
 * @jest-environment ./src/addCookies.ts
 */

import { code } from "./someFetchingCode";

// import { server } from "./mocks/server";
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe("Test 01", () => {
  test("A", async () => {
    expect(fetch).toBeTruthy();
    const res = await code();
    expect(res).toMatchObject({ result: "success" });
    console.log("cookies:", res.cookies);
  });
});
