import { GeniallyCreatedDomainEvent } from "../../genially/domain/GeniallyCreatedDomainEvent";
import { DomainEventSubscriber } from "../../../Shared/Domain/DomainEventSubscriber";
import { DomainEventClass } from "../../../Shared/Domain/DomainEvent";
import CounterUpdater from "./CounterUpdater";

import container from "../../../../api/dependency-container/container";


export default class UpdateCounterOnGeniallyCreated implements DomainEventSubscriber<GeniallyCreatedDomainEvent> {

  private counterUpdater: CounterUpdater;
  constructor(){
    this.counterUpdater = new CounterUpdater(container.get("genially.counter_repository"));
  }

  subscribedTo(): string[]{
    return [GeniallyCreatedDomainEvent.EVENT_NAME];
  }

  async on(domainEvent: DomainEventClass): Promise<void> {
    console.log(`Executing subscriber for ${domainEvent.EVENT_NAME}`);
    await this.counterUpdater.execute();
  }
}