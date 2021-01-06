import { ContainerBuilder } from "node-dependency-injection";
import InMemoryGeniallyRepository from "../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

const container = new ContainerBuilder();
container.register("genially_repository", InMemoryGeniallyRepository);

export default container;
