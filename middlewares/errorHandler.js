export default function errorHandler(error, req, res, next) {
  console.log(error.message);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformattted id" });
  } else if (error.name === "ValidationError") {
    returnres.status(400).json({ error: error.message });
  }

  next(error);
}
