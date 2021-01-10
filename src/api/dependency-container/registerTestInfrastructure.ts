import InMemoryEventBus from "../../contexts/Shared/Infrastructure/events/InMemoryEventBus";
import InMemoryGeniallyRepository from "../../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import InMemoryCounterRepository from "../../contexts/core/geniallyCounter/infrastructure/InMemoryCounterRepository";
import { container } from "./container";
import { GeniallyPost } from "../controllers/genially/geniallyPost";
import { GeniallyPut } from "../controllers/genially/geniallyPut";
import { GeniallyDelete } from "../controllers/genially/geniallyDelete";


const registerTestInfrastructure = () => {
  container.register("genially_repository", InMemoryGeniallyRepository);
  container.register("genially.counter_repository", InMemoryCounterRepository);

  container.register("genially_event_bus", InMemoryEventBus);

  container.register("genially.post_controller", GeniallyPost);
  container.register("genially.put_controller", GeniallyPut);
  container.register("genially.delete_controller", GeniallyDelete);
};
export default registerTestInfrastructure;