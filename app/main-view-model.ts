import { Button, EventData, Observable } from '@nativescript/core'

export class HelloWorldModel extends Observable {
  openModal (args: EventData) {
    const button = <Button>args.object;
    const page = button.page;

    page.showModal('modal');
  }
}
