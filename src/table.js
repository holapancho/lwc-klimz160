import { api, track, LightningElement } from "lwc";

export default class Table extends LightningElement {
  @api tabs;
  @api selectedTab;
  @api datArray;

  get data(){
    return this.datArray;
  }

  get columns(){
    if(this.tabs && !isNaN(this.selectedTab)){
      let unproxyTabs = this.unproxy(this.tabs);
      for (let [index, tab] of unproxyTabs.entries()) {
        if(index === this.selectedTab){
          //tab.columns.forEach( column => column.active = true );
        }
        else{
          tab.columns.forEach( column => column.class = "hide" );
        }
      }
      let columns = unproxyTabs
        .flatMap( t => t.columns)
        .map((column, index) => ({...column,id: index + 1}));
      return columns;
    }
    return [];

  }

  handleCellChanged(event){
    let result = this.unproxy(event.detail.result);
    let record = this.unproxy(event.detail.record);
    console.log(record);
    console.log(result);
    const cellChangeEvent = new CustomEvent('cellchange', {
        detail: {
          result: result,
          record: record
      },

    });

    this.dispatchEvent(cellChangeEvent);
  }

  unproxy(value){
    if(value){
      return JSON.parse(JSON.stringify(value));
    }
    return null;
  }

}