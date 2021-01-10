import { Domain } from "domain";
import { DomainEvent } from "./DomainEvent";

export abstract class AggregateRoot {
  private domainEvents: DomainEvent[];

  constructor() {
    this.domainEvents = [];
  }

  recordEvent(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  pullDomainEvents(): DomainEvent[] {
    const events = this.domainEvents.slice();

    this.domainEvents = [];

    return events;
  }
}