import { api, track, LightningElement } from "lwc";

export default class Table extends LightningElement {
  @api tabs;
  @api selectedTab;

  get columns(){
    if(this.tabs){
      let unproxyTabs = this.unproxy(this.tabs);
      console.log(unproxyTabs.flatMap( t => t.columns));
    }
    return [];
  }

  unproxy(value){
    if(value){
      return JSON.parse(JSON.stringify(value));
    }
    return null;
  }

}