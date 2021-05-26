//configs
const config = require("./config/config");
const app = require("./config/express");

//listen on port
app.listen(config.port, () => {
  console.info(`Server started on port ${config.port}`);
});
