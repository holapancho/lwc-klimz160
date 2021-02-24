import { track, LightningElement } from "lwc";

export default class App extends LightningElement {
  @track selectedTab = 0;
  @track tabs = [{ id: 0, name: 'Tab 1'},{ id: 1, name: 'Tab 2'},{ id: 3, name: 'Tab 3'},{ id: 4, name: 'Tab 4'}];

  handleItemClicked(event) {
    this.selectedTab = parseInt(event.target.getAttribute("data-index"));
  }
}
