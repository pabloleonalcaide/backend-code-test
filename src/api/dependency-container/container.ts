import { ContainerBuilder } from "node-dependency-injection";
import registerTestInfrastructure from "./registerTestInfrastructure";
import registerDevInfrastructure from "./registerDevInfrastructure";

export const container = new ContainerBuilder();
const environment = process.env.NODE_ENV;

// In order to avoid extra configuration to handle dependency injection
environment === "test" ? registerTestInfrastructure() : registerDevInfrastructure();

export default container;
