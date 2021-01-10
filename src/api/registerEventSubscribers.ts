import { EventBus } from "../contexts/Shared/Domain/EventBus";
import { DomainEvent } from "../contexts/Shared/Domain/DomainEvent";
import { DomainEventSubscriber } from "../contexts/Shared/Domain/DomainEventSubscriber";
import UpdateCounterOnGeniallyCreated from "../contexts/core/geniallyCounter/application/UpdateCounterOnGeniallyCreated";

import container from "./dependency-container/container";

export const registerEventSubscribers = () => {

  const subscribers: DomainEventSubscriber<DomainEvent>[] = [
    new UpdateCounterOnGeniallyCreated() ];
  const eventBus: EventBus = container.get("genially_event_bus");
  // Should extract list of subscribers & events for each environment (DI)

  eventBus.addSubscribers(subscribers);
};