import { DomainEventSubscriber } from "./../../Domain/DomainEventSubscriber";
import { EventBus } from "../../Domain/EventBus";
import { DomainEvent } from "../../Domain/DomainEvent";

export default class InMemoryEventBus implements EventBus {

  subscribers: Map<string, DomainEventSubscriber<DomainEvent>[]>;

  constructor(){
    this.subscribers = new Map<string, DomainEventSubscriber<DomainEvent>[]>();
  }
  // Sync way publish => execute
  publish(events: Array<DomainEvent>): void {
    events.map((event) => {
      const elem = event;
      const subscribers: DomainEventSubscriber<DomainEvent>[] = this.subscribers.get(event.eventName);
      const eventClass = { EVENT_NAME: event.eventName, event: elem };
      if(subscribers){
        subscribers.forEach((subscriber) => {
          subscriber.on(eventClass);
        });
      }
    });
  }

  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>): void{
    subscribers.map((subscriber) => {
      this.subscribe(subscriber);
    });
  }

  private subscribe(subscriber: DomainEventSubscriber<DomainEvent>) {
    subscriber.subscribedTo().map((event) => {
      this.subscribers.set(event, [subscriber]);
    });
  }
}