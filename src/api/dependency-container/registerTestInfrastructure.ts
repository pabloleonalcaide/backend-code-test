import InMemoryGeniallyRepository from "../../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import { container } from "./container";

const registerTestInfrastructure = () => {
  container.register("genially_repository", InMemoryGeniallyRepository);
};
export default registerTestInfrastructure;