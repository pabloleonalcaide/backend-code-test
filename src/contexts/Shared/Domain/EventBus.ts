import { DomainEvent } from "./DomainEvent";
import { DomainEventSubscriber } from "./DomainEventSubscriber";

export interface EventBus {
  publish(events: Array<DomainEvent>): void;

  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>): void;

}