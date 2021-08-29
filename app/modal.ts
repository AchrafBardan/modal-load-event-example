/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { Color, EventData, Label, Page } from '@nativescript/core'
import { ModalModel } from './modal-model'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object

  page.bindingContext = new ModalModel()
}

export function labelLoaded (args: EventData) {
  const label = <Label>args.object;

  label.style.color = new Color('green');
}
