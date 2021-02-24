import { track, LightningElement } from "lwc";

export default class App extends LightningElement {
  
  @track tabs = [{ id: 1, name: 'Tab 1' }];
}
