import { rest } from "msw";
const baseUrl = "http://127.0.0.1:3010";

function sleep(sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

export const handlers = [
  rest.post(baseUrl + "/auth/login", async (req, res, ctx) => {
    await sleep(1);
    return res(
      ctx.json({
        accessToken: "mockingToken"
      })
    );
  }),
  rest.post(baseUrl + "/auth/logout", (req, res, ctx) => {
    return res(ctx.status(200));
  })
];
