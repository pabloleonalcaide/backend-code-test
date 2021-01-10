import InMemoryEventBus from "../../contexts/Shared/Infrastructure/events/InMemoryEventBus";
import InMemoryGeniallyRepository from "../../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import InMemoryCounterRepository from "../../contexts/core/geniallyCounter/infrastructure/InMemoryCounterRepository";
import { container } from "./container";

const registerTestInfrastructure = () => {
  container.register("genially_repository", InMemoryGeniallyRepository);
  container.register("genially.counter_repository", InMemoryCounterRepository);

  container.register("genially_event_bus", InMemoryEventBus);
};
export default registerTestInfrastructure;