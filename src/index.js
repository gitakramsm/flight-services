const express = require("express");

const { ServerConfig, logger } = require("./config");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("./utils/common");
const AppError = require("./utils/errors/app-error");

const apiRoutes = require("./routes");

const app = express();

//middleware to parse body params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.use((req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    ...ErrorResponse,
    message: "Resource not found",
    error: new AppError(
      `The requested method ${req.method} on path ${req.originalUrl} is invalid.`,
      StatusCodes.NOT_FOUND
    ),
  });
});

app.listen(ServerConfig.PORT, () => {
  console.log(`successfully started the server on PORT : ${ServerConfig.PORT}`);
  // logger.info("successfully started the server", {});
});
