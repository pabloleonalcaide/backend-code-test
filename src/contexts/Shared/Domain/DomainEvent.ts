/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {v4 as uuidV4 } from "uuid";

export abstract class DomainEvent {
  static EVENT_NAME: string;
  static fromPrimitives: (...args: any[]) => DomainEvent;

  readonly eventId: string;
  readonly aggregateId: string;
  readonly occurredOn: Date;
  readonly eventName: string;

  constructor(eventName: string, aggregateId: string, occurredOn?: Date, eventId?: string) {
    this.eventName =  eventName;
    this.aggregateId = aggregateId;
    this.occurredOn = occurredOn || new Date();
    this.eventId = eventId || uuidV4();
  }
  public abstract toPrimitives(): Object;
}

export type DomainEventClass = {
  EVENT_NAME: string;
  event: DomainEvent;
};