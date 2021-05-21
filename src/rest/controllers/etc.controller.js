export const root = (req, res) => {
  const meta = { name: "@junction/api", version: "0.1.0" };
  res.send({
    ...meta,
    uptime: process.uptime(),
  });
};
