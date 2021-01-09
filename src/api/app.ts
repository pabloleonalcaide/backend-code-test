import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import lusca from "lusca";

// Controllers (route handlers)
import * as healthController from "./controllers/health";
// Routes (to consolidate endpoints around own domain)
import geniallyRouter from "../api/routes/genially";
import { connect } from "../contexts/Shared/Infrastructure/persistence/mongodb_config";


// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));


// Primary app routes
app.get("/", healthController.check);
app.use("/genially", geniallyRouter);

// DB Connection
if(process.env.NODE_ENV !== "test"){
  connect();
}

export default app;
