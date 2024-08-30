import expres from "express";

const app = expres();

app.get("/", (req, res) => {
  res.send({ message: "Server is working" });
});

export default app;
