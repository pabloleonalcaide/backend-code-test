import { DomainEvent, DomainEventClass } from "./DomainEvent";

export interface DomainEventSubscriber<T extends DomainEvent> {
  subscribedTo(): Array<string>;

  on(domainEvent: DomainEventClass): Promise<void>;
}