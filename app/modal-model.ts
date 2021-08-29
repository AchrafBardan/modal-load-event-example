import { Color, EventData, Label, Observable } from '@nativescript/core'

export class ModalModel extends Observable {
  isBinded: boolean = true;

  labelLoadedModal (args: EventData) {
    const label = <Label>args.object;

    label.style.color = new Color('green');
  }
}
