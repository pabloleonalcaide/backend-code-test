import errorHandler from "errorhandler";
import app from "./app";
import { disconnect } from "../contexts/Shared/Infrastructure/persistence/mongodb_config";


/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());


/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

server.on("close", () => {
  if(process.env.NODE_ENV !== "test"){
    disconnect();
  }
});

export default server;
