import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true }));

app.post("/", (req, res) => {
  console.log("Server received cookies:", JSON.stringify(req.cookies, null, 2));
  res.json({
    result: "success",
    cookies: JSON.stringify(req.cookies),
  });
});

app.listen(4444, () => {
  console.log("Server started :4444");
});
