import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:5555", async (req, res, ctx) => {
    const cookies = JSON.stringify(req.cookies, null, 2);
    console.log("MSW received cookies:", cookies);
    return res(ctx.json({ result: "success", cookies }));
  }),
];
