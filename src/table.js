import { api, track, LightningElement } from "lwc";

export default class Table extends LightningElement {
  @api tabs;
  @api selectedTab;
  @api datArray;
  @api sortedBy;

  get data(){
    return this.datArray;
  }

  get columns(){
    if(this.tabs && !isNaN(this.selectedTab)){
      let unproxyTabs = this.unproxy(this.tabs);
      let unproxySortedBy = this.unproxy(this.sortedBy);
      for (let [index, tab] of unproxyTabs.entries()) {
        tab.columns.forEach(column => column.sortable = column.sortable || false);
        tab.columns.filter(column => column.sortable)
          .forEach( column => {column.class = "slds-is-resizable slds-is-sortable"; column.sortedSelected = false});
        if(unproxySortedBy){
          let ascValue = unproxySortedBy.sorted == 'asc' || false; 
          let descValue = unproxySortedBy.sorted == 'desc' || false;
          tab.columns.filter(column => column.sortable).filter(column => column.fieldpath == unproxySortedBy.fieldpath)
          .forEach(column => {
            column.sortedSelected = true; 
            column.isAsc = ascValue; 
            column.isDesc = descValue; });
        }
        
       
        if(index !== this.selectedTab){
          tab.columns.forEach( column => column.class = "hide" );
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

  handleColumnClick(event){
    let fieldpath = event.currentTarget.dataset.fieldpath;
    let unProxysortedBy = this.unproxy(this.sortedBy);
    let sorted =  unProxysortedBy ? (unProxysortedBy.sorted || '') : '';
    if(!sorted){
      sorted = 'asc';
    }
    else{
      if(sorted == 'asc'){
        sorted = 'desc';
      }
      else{
        sorted = 'asc';
      }
    }

    let sortedBy = {fieldpath, sorted}

    console.log(sortedBy);

    const sortChangeEvent = new CustomEvent('sortchange', {
        detail: {
          sortedBy
      },
    });

    this.dispatchEvent(sortChangeEvent);
  }

  handleCellChanged(event){
    let result = this.unproxy(event.detail.result);
    let record = this.unproxy(event.detail.record);
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