import { api, track, LightningElement } from "lwc";

export default class Table extends LightningElement {
  @api tabs;
  @api selectedTab;
  @api data;

  get columns(){
    if(this.tabs && !isNaN(this.selectedTab)){
      let unproxyTabs = this.unproxy(this.tabs);
      for (let [index, tab] of unproxyTabs.entries()) {
        if(index === this.selectedTab){
          tab.columns.forEach( column => column.active = true );
        }
        else{
          tab.columns.forEach( column => column.active = false );
        }
      }
      let columns = unproxyTabs
        .flatMap( t => t.columns)
        .map((column, index) => ({...column,id: index + 1}));
      console.log(columns);
      return columns;
    }
    return [];

  }

  get records(){
    if(this.data){
      console.log(this.unproxy(this.data));
      return this.data;
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