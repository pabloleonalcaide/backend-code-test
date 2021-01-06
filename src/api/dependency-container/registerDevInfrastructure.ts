import InMemoryGeniallyRepository from "../../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import { container } from "./container";

const registerDevInfrastructure = () => {
  container.register("genially_repository", InMemoryGeniallyRepository);
};

export default registerDevInfrastructure;