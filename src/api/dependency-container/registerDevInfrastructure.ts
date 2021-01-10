import InMemoryEventBus from "../../contexts/Shared/Infrastructure/events/InMemoryEventBus";
import InMemoryCounterRepository from "../../contexts/core/geniallyCounter/infrastructure/InMemoryCounterRepository";
import MongoGeniallyRepository from "../../contexts/core/genially/infrastructure/mongo/MongoGeniallyRepository";
import { container } from "./container";

const registerDevInfrastructure = () => {
  container.register("genially_repository", MongoGeniallyRepository);
  container.register("genially.counter_repository", InMemoryCounterRepository);

  container.register("genially_event_bus", InMemoryEventBus);
};

export default registerDevInfrastructure;