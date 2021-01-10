import { DomainEvent } from "../../../Shared/Domain/DomainEvent";

export class GeniallyCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = "genially.created";

  constructor(aggregateId: string, occurredOn?: Date, eventId?: string) {
    super(GeniallyCreatedDomainEvent.EVENT_NAME, aggregateId,occurredOn,eventId);
  }

  public toPrimitives() {
    const {aggregateId, occurredOn, eventId, eventName} = this;

    return {
      aggregateId,
      eventId,
      eventName,
      occurredOn
    };
  }

  static fromPrimitives(aggregateId: string, occurredOn?: Date, eventId?: string){
    return new GeniallyCreatedDomainEvent(aggregateId,occurredOn,eventId);
  }
}