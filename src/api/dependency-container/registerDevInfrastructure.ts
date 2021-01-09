import MongoGeniallyRepository from "../../contexts/core/genially/infrastructure/mongo/MongoGeniallyRepository";
import { container } from "./container";

const registerDevInfrastructure = () => {
  container.register("genially_repository", MongoGeniallyRepository);
};

export default registerDevInfrastructure;