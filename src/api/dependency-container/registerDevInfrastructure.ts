import InMemoryEventBus from "../../contexts/Shared/Infrastructure/events/InMemoryEventBus";
import InMemoryCounterRepository from "../../contexts/core/geniallyCounter/infrastructure/InMemoryCounterRepository";
import MongoGeniallyRepository from "../../contexts/core/genially/infrastructure/mongo/MongoGeniallyRepository";
import { container } from "./container";
import { GeniallyPost } from "../controllers/genially/geniallyPost";
import { GeniallyPut } from "../controllers/genially/geniallyPut";
import { GeniallyDelete } from "../controllers/genially/geniallyDelete";
import { CounterGet } from "../controllers/counter/counterGet";

const registerDevInfrastructure = () => {
  container.register("genially_repository", MongoGeniallyRepository);
  container.register("genially.counter_repository", InMemoryCounterRepository);

  container.register("genially_event_bus", InMemoryEventBus);

  container.register("genially.post_controller", GeniallyPost);
  container.register("genially.put_controller", GeniallyPut);
  container.register("genially.delete_controller", GeniallyDelete);

  container.register("genially_counter.get_controller", CounterGet);
};

export default registerDevInfrastructure;